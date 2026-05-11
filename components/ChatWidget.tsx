"use client";

import { useEffect, useState } from "react";
import io from "socket.io-client";
import { MessageCircle, X, Send } from "lucide-react";

const socket = io("http://localhost:3001");

type Message = {
    author: string;
    message: string;
    time: string;
    room: string;
};

export default function ChatWidget() {
    const [open, setOpen] = useState(false);
    const [newMessage, setNewMessage] = useState(false);

    const [username, setUsername] = useState("");
    const [connected, setConnected] = useState(false);

    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);

    const [typingUser, setTypingUser] = useState("");

    const room = "PortfolioRoom";

    useEffect(() => {
        socket.on("receive_message", (data: Message) => {
            setMessages((prev) => [...prev, data]);

            if (!open && data.author !== username) {
                setNewMessage(true);
            }
        });

        socket.on("typing", (data) => {
            if (data.username !== username) {
                setTypingUser(`${data.username} est en train d’écrire...`);

                setTimeout(() => {
                    setTypingUser("");
                }, 1500);
            }
        });

        return () => {
            socket.off("receive_message");
            socket.off("typing");
        };
    }, [open, username]);

    const joinChat = () => {
        if (!username.trim()) return;

        socket.emit("join_room", room);
        setConnected(true);
    };

    const sendMessage = () => {
        if (!message.trim()) return;

        const messageData: Message = {
            room,
            author: username,
            message: message.trim(),
            time: new Date().toLocaleTimeString("fr-FR", {
                hour: "2-digit",
                minute: "2-digit",
            }),
        };

        socket.emit("send_message", messageData);
        setMessages((prev) => [...prev, messageData]);
        setMessage("");
    };

    return (
        <>
            {!open && (
                <button
                    onClick={() => {
                        setOpen(true);
                        setNewMessage(false);
                    }}
                    className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500 text-white shadow-2xl transition hover:scale-105"
                >
                    <MessageCircle size={28} />

                    {newMessage && (
                        <span className="absolute right-0 top-0 h-4 w-4 animate-pulse rounded-full border-2 border-white bg-red-500"></span>
                    )}
                </button>
            )}

            {open && (
                <div className="fixed bottom-6 right-6 z-50 flex h-[620px] w-[350px] flex-col overflow-hidden rounded-[28px] border border-white/10 bg-[#08122c] shadow-[0_20px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl">
                    <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                        <h2 className="text-lg font-bold text-white">
                            Chat en temps réel
                        </h2>

                        <button
                            onClick={() => setOpen(false)}
                            className="rounded-full p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {!connected ? (
                        <div className="flex flex-1 flex-col justify-center gap-4 p-6">
                            <input
                                type="text"
                                placeholder="Votre nom"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") joinChat();
                                }}
                                className="relative z-50 w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-white outline-none"
                            />

                            <button
                                onClick={joinChat}
                                className="rounded-xl bg-cyan-500 py-3 font-medium text-white transition hover:bg-cyan-400"
                            >
                                Rejoindre le chat
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="flex-1 space-y-3 overflow-y-auto p-4">
                                {messages.map((msg, index) => {
                                    const own = msg.author === username;

                                    return (
                                        <div
                                            key={index}
                                            className={`flex ${
                                                own ? "justify-end" : "justify-start"
                                            }`}
                                        >
                                            <div
                                                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                                                    own
                                                        ? "bg-cyan-500 text-white"
                                                        : "bg-slate-800 text-slate-100"
                                                }`}
                                            >
                                                {!own && (
                                                    <p className="mb-1 text-xs font-bold text-cyan-300">
                                                        {msg.author}
                                                    </p>
                                                )}

                                                <p className="break-words text-sm">{msg.message}</p>

                                                <div className="mt-2 flex items-center justify-end gap-1 text-[10px] opacity-70">
                                                    <span>{msg.time}</span>
                                                    {own && <span className="text-cyan-200">✓✓</span>}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {typingUser && (
                                <p className="px-4 pb-2 text-xs text-cyan-300">
                                    {typingUser}
                                </p>
                            )}

                            <div className="flex gap-2 border-t border-white/10 p-3">
                                <input
                                    type="text"
                                    placeholder="Votre message..."
                                    value={message}
                                    onChange={(e) => {
                                        setMessage(e.target.value);

                                        socket.emit("typing", {
                                            username,
                                            room,
                                        });
                                    }}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") sendMessage();
                                    }}
                                    className="flex-1 rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-white outline-none"
                                />

                                <button
                                    onClick={sendMessage}
                                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500 text-white transition hover:bg-cyan-400"
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    );
}