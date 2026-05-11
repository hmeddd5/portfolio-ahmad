"use client";
import React from "react";
import { motion } from "framer-motion";
import ChatWidget from "./ChatWidget";
import {
  ArrowRight,
  Briefcase,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Sparkles,
  User,
  Download,
  Layers3,
  Globe,
  ShieldCheck,
  MonitorSmartphone,
  Star,
} from "lucide-react";

const skills = [
  "Java",
  "C#",
  "PHP",
  "SQL",
  "JavaScript",
  "Swift",
  "Python",
  "HTML",
  "CSS",
  "React",
  "Node.js",
  "Socket.io",
  "Spring Boot",
  "MVC",
  "MySQL",
  "SQL Server",
  "Git",
  "GitHub",
  "Visual Studio",
  "Visual Studio Code",
  "API / JSON",
  "POO / CRUD",
];

const highlights = [
  {
    icon: Star,
    title: "Analyse",
    text: "Analyse des besoins fonctionnels et techniques.",
  },
  {
    icon: Star,
    title: "Autonomie",
    text: "Autonomie dans la recherche de solutions et le débogage.",
  },
  {
    icon: Star,
    title: "Rigueur",
    text: "Rigueur dans l’organisation du code et le respect des consignes.",
  },
  {
    icon: Star,
    title: "Apprentissage",
    text: "Bonne capacité d’apprentissage et adaptation à de nouveaux outils.",
  },
  {
    icon: Star,
    title: "Approche",
    text: "Approche structurée et logique dans le développement d’applications.",
  },
];

const projects = [
  {
    title: "ChatApp",
    stack: "React • Node.js • Socket.io • JavaScript • HTML • CSS",
    description:
      "Développement d’une application web permettant l’échange de messages en temps réel entre utilisateurs. Implémentation de Socket.io pour assurer la communication temps réel entre le client et le serveur, avec une interface utilisateur développée en React.",
    tag: "Temps réel",
    link: "https://github.com/hmeddd5",
  },
  {
    title: "AccessNow Montréal",
    stack: "HTML • CSS • JavaScript • API",
    description:
      "Développement d’une application web permettant la recherche dynamique d’informations à partir de critères sélectionnés par l’utilisateur. Intégration d’une API pour récupérer et afficher les résultats en temps réel, avec manipulation des données JSON.",
    tag: "API / Web",
    link: "https://github.com/hmeddd5",
  },
];

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-4xl font-black tracking-tight text-white md:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 text-lg leading-8 text-slate-400">{description}</p>
      ) : null}
    </motion.div>
  );
}

function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

export default function PortfolioClient() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#020617] text-slate-100 selection:bg-cyan-400/30 selection:text-white">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_24%),radial-gradient(circle_at_top_right,rgba(99,102,241,0.16),transparent_22%),radial-gradient(circle_at_bottom,rgba(16,185,129,0.12),transparent_24%),linear-gradient(to_bottom,#020617,#020617,#031525)]" />
      <div className="pointer-events-none fixed inset-0 -z-20 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:42px_42px]" />

      <motion.div
        className="pointer-events-none fixed -left-24 top-24 -z-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none fixed right-0 top-40 -z-10 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -18, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <header className="sticky top-0 z-50 border-b border-white/8 bg-slate-950/55 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#home" className="group flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 transition group-hover:scale-105 group-hover:bg-cyan-400/20">
              <Code2 className="h-5 w-5 text-cyan-300" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.45em] text-slate-500">
                Portfolio
              </p>
              <p className="text-lg font-semibold text-white">Ahmad Errekab</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-white">
              À propos
            </a>
            <a href="#skills" className="transition hover:text-white">
              Compétences
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projets
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>

          <a
            href="/cv-ahmad.pdf"
            download
            className="hidden items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-3 text-white transition hover:-translate-y-0.5 hover:bg-white/[0.09] md:inline-flex"
          >
            <Download className="h-4 w-4" />
            Télécharger CV
          </a>

          <button className="md:hidden">
            <Menu className="h-5 w-5 text-white" />
          </button>
        </div>
      </header>

      <main id="home">
        <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:pb-24 lg:pt-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.10)]"
            >
              <Sparkles className="h-4 w-4" />
              Recherche de stage • Développement web et logiciel
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="mt-7 max-w-5xl text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl"
            >
              Des projets web structurés,
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                {" "}clairs et orientés usage
              </span>
              {" "}pour évoluer en milieu professionnel.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
              className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl"
            >
              Étudiant en Techniques de l’informatique – Programmation au Collège LaSalle, je développe des applications logicielles et web à travers des projets concrets. À la recherche d’un stage pour contribuer à des projets réels et renforcer mes compétences techniques en environnement professionnel.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-500 px-7 py-4 text-base font-medium text-white shadow-[0_20px_60px_rgba(6,182,212,0.22)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(6,182,212,0.28)]"
              >
                Voir mes projets
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center rounded-2xl border border-white/10 bg-white/[0.05] px-7 py-4 text-base font-medium text-white transition hover:-translate-y-1 hover:bg-white/[0.09]"
              >
                Me contacter
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="mt-12 grid gap-4 sm:grid-cols-3"
            >
              {[
                { value: "2", label: "Projets réels" },
                { value: "10+", label: "Technologies clés" },
                { value: "2026", label: "Recherche de stage" },
              ].map((item) => (
                <GlassCard
                  key={item.label}
                  className="p-6 transition hover:-translate-y-1"
                >
                  <p className="text-4xl font-black text-white">{item.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{item.label}</p>
                </GlassCard>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-cyan-500/10 via-transparent to-indigo-500/10 blur-3xl" />
            <GlassCard className="relative overflow-hidden p-8 md:p-10">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),transparent_30%,transparent_70%,rgba(34,211,238,0.08))]" />
              <div className="relative">
                <div className="mb-8 flex items-center gap-4">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex h-24 w-24 items-center justify-center rounded-[30px] bg-gradient-to-br from-cyan-400 via-sky-400 to-emerald-400 text-3xl font-black text-slate-950 shadow-[0_20px_50px_rgba(34,211,238,0.25)]"
                  >
                    AE
                  </motion.div>
                  <div>
                    <h2 className="text-3xl font-black text-white">
                      Ahmad Errekab
                    </h2>
                    <p className="mt-1 text-slate-300">
                      Étudiant en programmation
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 text-cyan-300" />
                    <span>Montréal, Québec, Canada</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <GraduationCap className="mt-0.5 h-4 w-4 text-emerald-300" />
                    <span>
                      Techniques de l’informatique – Programmation, Collège LaSalle
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Briefcase className="mt-0.5 h-4 w-4 text-cyan-300" />
                    <span>Recherche de stage en développement logiciel / web</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <User className="mt-0.5 h-4 w-4 text-emerald-300" />
                    <span>
                      Profil structuré, logique et orienté résolution de problèmes
                    </span>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: Github,
                      label: "GitHub",
                      value: "Voir mon profil",
                      href: "https://github.com/hmeddd5",
                    },
                    {
                      icon: Linkedin,
                      label: "LinkedIn",
                      value: "Voir mon profil",
                      href: "https://www.linkedin.com/in/ahmad-errekab-5948ba2a8/",
                    },
                    {
                      icon: Mail,
                      label: "Email",
                      value: "M'envoyer un message",
                      href: "mailto:ahmaderrekab@gmail.com",
                    },
                    {
                      icon: ExternalLink,
                      label: "CV",
                      value: "Télécharger mon CV",
                      href: "/cv-ahmad.pdf",
                    },
                  ].map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target={
                        item.label === "CV" || item.label === "Email"
                          ? "_self"
                          : "_blank"
                      }
                      rel="noreferrer"
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.35 + index * 0.06 }}
                      className="group rounded-[22px] border border-white/10 bg-slate-900/50 p-5 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-slate-900/70"
                    >
                      <item.icon className="mb-3 h-5 w-5 text-cyan-300 transition group-hover:scale-110" />
                      <div className="text-sm font-semibold text-white">
                        {item.label}
                      </div>
                      <div className="mt-1 text-xs text-slate-400">
                        {item.value}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-4 lg:px-10 lg:py-8">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                icon: Globe,
                title: "Développement web",
                text: "Création d’interfaces web dynamiques et structurées.",
              },
              {
                icon: Layers3,
                title: "Intégration d’API",
                text: "Consommation d’API et manipulation de données JSON.",
              },
              {
                icon: ShieldCheck,
                title: "Code structuré",
                text: "Organisation logique du code et séparation claire des responsabilités.",
              },
              {
                icon: MonitorSmartphone,
                title: "Approche sérieuse",
                text: "Travail rigoureux, lisible et orienté progression vers le stage.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <GlassCard className="h-full p-6 transition hover:-translate-y-1">
                  <item.icon className="h-9 w-9 text-cyan-300" />
                  <h3 className="mt-5 text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-400">{item.text}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        <section
          id="about"
          className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"
        >
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <GlassCard className="p-8 md:p-12">
              <SectionTitle
                eyebrow="À propos"
                title="Étudiant en Techniques de l’informatique — Programmation"
                description="Développement d’applications logicielles et web à travers des projets concrets. Intérêt particulier pour le développement web, l’intégration d’API, la structuration du code et la résolution de problèmes techniques. À la recherche d’un stage pour contribuer à des projets réels et renforcer mes compétences techniques dans un environnement professionnel."
              />
            </GlassCard>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
            >
              <GlassCard className="h-full bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 p-8 md:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">
                  Forces
                </p>
                <div className="mt-8 space-y-5 text-sm leading-7 text-slate-300">
                  <div className="flex items-start gap-3">
                    <Star className="mt-0.5 h-4 w-4 text-cyan-300" />
                    <span>Analyse des besoins fonctionnels et techniques</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="mt-0.5 h-4 w-4 text-cyan-300" />
                    <span>Autonomie dans la recherche de solutions et le débogage</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="mt-0.5 h-4 w-4 text-cyan-300" />
                    <span>Rigueur dans l’organisation du code et le respect des consignes</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="mt-0.5 h-4 w-4 text-cyan-300" />
                    <span>Bonne capacité d’apprentissage et adaptation à de nouveaux outils</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="mt-0.5 h-4 w-4 text-cyan-300" />
                    <span>Approche structurée et logique dans le développement d’applications</span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </section>

        <section
          id="skills"
          className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"
        >
          <SectionTitle
            eyebrow="Compétences"
            title="Compétences techniques"
            description="Langages, outils, bases de données, frameworks, concepts logiciels et pratiques de développement utilisés dans mes projets et dans ma formation."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="rounded-[22px] border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-medium text-slate-200 shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.07]"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

        <section
          id="projects"
          className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"
        >
          <SectionTitle
            eyebrow="Projets"
            title="Deux projets réels"
            description="Deux projets développés dans un contexte académique, choisis pour représenter mes compétences actuelles en développement web, communication temps réel et intégration d’API."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <GlassCard className="group relative h-full overflow-hidden p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/25">
                  <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.10),transparent_30%)]" />
                  <div className="relative flex h-full flex-col">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
                        {project.tag}
                      </span>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-white/10 p-2 transition hover:border-cyan-400/25 hover:bg-white/[0.05]"
                      >
                        <ExternalLink className="h-4 w-4 text-slate-400 transition group-hover:text-cyan-300" />
                      </a>
                    </div>

                    <h3 className="text-3xl font-black text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm font-medium text-emerald-300">
                      {project.stack}
                    </p>
                    <p className="mt-6 flex-1 leading-8 text-slate-300">
                      {project.description}
                    </p>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-8 inline-flex items-center text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
                    >
                      Voir le projet sur GitHub
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-7xl px-6 pb-24 pt-20 lg:px-10 lg:pb-28 lg:pt-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="relative overflow-hidden p-8 md:p-12">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(34,211,238,0.10),transparent_30%,transparent_70%,rgba(16,185,129,0.10))]" />
              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
                    Contact
                  </p>
                  <h2 className="mt-4 text-4xl font-black text-white md:text-6xl">
                    Travaillons ensemble
                  </h2>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                    Je suis actuellement à la recherche d’un stage en développement web ou logiciel. Vous pouvez me contacter pour consulter mon CV, découvrir mes projets ou échanger à propos d’une opportunité de stage.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <a
                    href="mailto:ahmaderrekab@gmail.com"
                    className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-sky-500 px-8 py-5 text-base font-medium text-white transition hover:-translate-y-1"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    M’envoyer un email
                  </a>

                  <a
                    href="https://www.linkedin.com/in/ahmad-errekab-5948ba2a8/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] px-8 py-5 text-base font-medium text-white transition hover:-translate-y-1 hover:bg-white/[0.09]"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    Voir mon LinkedIn
                  </a>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </section>
      </main>
      <ChatWidget />
    </div>
  );
}