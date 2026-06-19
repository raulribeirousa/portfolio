"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <nav className="flex gap-6 rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <Link className="font-semibold text-cyan-500" href="/">
              Home
            </Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/uses">Uses</Link>
          </nav>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full border border-zinc-200 bg-white px-4 py-2 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </header>

        <section className="mx-auto max-w-6xl px-6 py-14">
          <Image
            src="/portfolio/profile.png"
            alt="Raul Ribeiro"
            width={96}
            height={96}
            priority
            className="mb-8 rounded-full border border-zinc-200 object-cover shadow-lg dark:border-zinc-700"
          />

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Building secure systems, scalable applications, and meaningful digital experiences.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            I am Raul Ribeiro, a Cyber Infrastructure Design and Strategy student passionate about software development,
            cloud infrastructure, and secure technology solutions. I enjoy building clean, responsive web applications
            and learning how modern systems connect, scale, and protect data.
          </p>

          <div className="mt-6 flex gap-5 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <a href="https://github.com/" target="_blank">
              GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank">
              LinkedIn
            </a>
            <a href="mailto:raul.schindler15@gmail.com">Email</a>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="space-y-12 lg:col-span-2">
              {[
                {
                  date: "June 2026",
                  title: "Building Secure and Scalable Web Applications",
                  text: "Modern software needs more than a clean interface. I focus on creating applications that are responsive, organized, secure, and easy to maintain.",
                },
                {
                  date: "May 2026",
                  title: "Why Cloud Infrastructure Matters",
                  text: "Cloud platforms allow teams to build faster, scale better, and protect systems more effectively.",
                },
                {
                  date: "April 2026",
                  title: "Learning Through Real Projects",
                  text: "The best way to grow as a developer is by building. This portfolio represents my progress in React, Next.js, Tailwind CSS, and modern web development.",
                },
              ].map((article) => (
                <article
                  key={article.title}
                  className="rounded-2xl p-6 transition hover:bg-zinc-50 dark:hover:bg-zinc-900"
                >
                  <p className="text-sm text-zinc-400">{article.date}</p>

                  <h2 className="mt-2 text-xl font-bold">{article.title}</h2>

                  <p className="mt-3 text-zinc-600 dark:text-zinc-400">{article.text}</p>

                  <a className="mt-4 inline-block font-semibold text-cyan-500" href="#">
                    Read article →
                  </a>
                </article>
              ))}
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-zinc-200 p-6 shadow-sm dark:border-zinc-800">
                <h3 className="font-semibold">Connect With Me</h3>

                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                  Interested in software development, infrastructure, or technology projects? Let&apos;s connect.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 p-6 shadow-sm dark:border-zinc-800">
                <h3 className="font-semibold">Work</h3>

                <div className="mt-5 space-y-5">
                  <div>
                    <p className="font-medium">Databricks</p>
                    <p className="text-sm text-zinc-500">Cloud Infrastructure Engineer</p>
                  </div>

                  <div>
                    <p className="font-medium">Nubank</p>
                    <p className="text-sm text-zinc-500">Software Engineer</p>
                  </div>

                  <div>
                    <p className="font-medium">VTEX</p>
                    <p className="text-sm text-zinc-500">Full Stack Developer</p>
                  </div>

                  <div>
                    <p className="font-medium">iFood</p>
                    <p className="text-sm text-zinc-500">Platform Engineer</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-200 p-6 shadow-sm dark:border-zinc-800">
                <h3 className="font-semibold">Skills</h3>

                <div className="mt-5 space-y-4">
                  <p>React / Next.js</p>
                  <p>Tailwind CSS</p>
                  <p>JavaScript</p>
                  <p>Cloud Infrastructure</p>
                  <p>Cybersecurity Fundamentals</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <footer className="border-t border-zinc-200 py-8 dark:border-zinc-800">
          <div className="mx-auto flex max-w-6xl justify-between px-6 text-sm text-zinc-500">
            <div className="flex gap-6">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/uses">Uses</Link>
            </div>

            <p>© 2026 Raul Ribeiro. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
