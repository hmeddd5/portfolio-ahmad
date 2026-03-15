import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
};

export function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`px-5 py-3 bg-sky-500 hover:bg-sky-600 text-white rounded-xl transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}