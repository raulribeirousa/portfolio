import Navbar from '@/components/Navbar';

export default function Uses() {
  const groups = [
    {
      title: 'Workstation',
      items: [
        ['MacBook Pro', 'My main machine for coding, school projects, and web development.'],
        ['External Monitor', 'Helps me work with code, browser preview, and documentation side by side.'],
        ['Wireless Keyboard and Mouse', 'A simple setup that keeps my workspace clean and comfortable.'],
      ],
    },
    {
      title: 'Development Tools',
      items: [
        ['VS Code / Codespaces', 'My main development environment for React, Next.js, and GitHub projects.'],
        ['GitHub', 'Used for version control, collaboration, commits, and project submission.'],
        ['Next.js', 'My preferred framework for building modern portfolio pages and web applications.'],
        ['Tailwind CSS', 'Used to create responsive layouts quickly with clean utility classes.'],
      ],
    },
    {
      title: 'Design',
      items: [
        ['Figma', 'Used to study layouts, spacing, typography, and translate designs into code.'],
        ['Canva', 'Helpful for quick graphics, presentations, and visual assets.'],
      ],
    },
    {
      title: 'Productivity',
      items: [
        ['Google Workspace', 'Used for documents, communication, scheduling, and school work.'],
        ['Notion', 'Used for organizing notes, project ideas, and learning goals.'],
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          Software, hardware, and tools I use to build projects and stay productive.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          These are the tools I use for school, coding, design, and productivity.
          My setup helps me build responsive web applications, manage projects,
          and continue growing as a technology student.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="space-y-16">
          {groups.map((group) => (
            <div
              key={group.title}
              className="grid grid-cols-1 gap-8 border-l-2 border-zinc-200 pl-6 dark:border-zinc-800 md:grid-cols-4"
            >
              <h2 className="text-lg font-bold">{group.title}</h2>

              <div className="space-y-8 md:col-span-3">
                {group.items.map(([title, description]) => (
                  <article key={title}>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                      {description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
