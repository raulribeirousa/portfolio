'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  function toggleDarkMode() {
    const nextMode = !darkMode;

    setDarkMode(nextMode);

    if (nextMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
      <nav className="flex gap-6 rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/uses">Uses</Link>
      </nav>

      <button
        onClick={toggleDarkMode}
        className="rounded-full border border-zinc-200 bg-white px-4 py-2 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
    </header>
  );
}
