import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function About() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <Navbar />

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-14 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            I’m Raul Ribeiro, a technology student focused on secure systems and practical solutions.
          </h1>

          <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            <p>
              I am studying Cyber Infrastructure Design and Strategy while building
              skills in software development, cloud infrastructure, networking, and
              cybersecurity. I enjoy learning how applications are built, how systems
              communicate, and how technology can solve real problems.
            </p>

            <p>
              My portfolio represents my growth through hands-on projects using
              React, Next.js, Tailwind CSS, GitHub, and modern development workflows.
              Each project helps me improve my ability to create clean interfaces,
              organize code, and think like a developer.
            </p>

            <p>
              My goal is to continue growing in technology, especially in areas
              related to cloud systems, infrastructure, security, and full-stack
              development.
            </p>
          </div>
        </div>

        <aside className="space-y-6">
          <Image
            src="/profile.png"
            alt="Raul Ribeiro"
            width={320}
            height={320}
            priority
            className="rounded-3xl object-cover shadow-lg"
          />

          <div className="rounded-2xl border border-zinc-200 p-6 shadow-sm dark:border-zinc-800">
            <h2 className="font-semibold">Contact</h2>
            <div className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
              <a href="mailto:raul.schindler15@gmail.com" className="block">
                Email: raul.schindler15@gmail.com
              </a>
              <a href="https://github.com/" target="_blank" className="block">
                GitHub
              </a>
              <a href="https://linkedin.com/" target="_blank" className="block">
                LinkedIn
              </a>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
