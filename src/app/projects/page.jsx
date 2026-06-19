import Navbar from "@/components/Navbar";
import Link from "next/link";
export default function Projects() {
  const projects = [
    {
      name: "Secure Portfolio Website",
      description:
        "A responsive portfolio built with Next.js and Tailwind CSS, featuring reusable layouts, clean navigation, and dark mode styling.",
      tech: "Next.js · Tailwind CSS · React",
    },
    {
      name: "Cloud Infrastructure Lab",
      description:
        "A project focused on networking, cloud architecture, system security, and scalable infrastructure design.",
      tech: "Cloud · Networking · Security",
    },
    {
      name: "Cybersecurity Dashboard",
      description:
        "A concept dashboard for tracking security alerts, system status, and infrastructure performance in one interface.",
      tech: "JavaScript · React · UI Design",
    },
    {
      name: "Business CRM Prototype",
      description:
        "A customer relationship management prototype designed to organize leads, improve workflows, and track business opportunities.",
      tech: "React · Data · UX",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <nav className="flex gap-6 rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link className="font-semibold text-cyan-500" href="/projects">
            Projects
          </Link>
          <Link href="/uses">Uses</Link>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          Things I’ve built while learning software, infrastructure, and secure systems.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          These projects represent my growth as a technology student and developer. Each one focuses on solving real
          problems through clean design, organized code, and practical technical thinking.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="rounded-2xl border border-zinc-200 p-6 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 dark:bg-cyan-950">
                💻
              </div>

              <h2 className="text-xl font-bold">{project.name}</h2>

              <p className="mt-3 text-zinc-600 dark:text-zinc-400">{project.description}</p>

              <p className="mt-4 text-sm font-medium text-cyan-500">{project.tech}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
