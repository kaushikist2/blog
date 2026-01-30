import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 text-gray-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur bg-white/60 border-b border-white/40">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-serif tracking-tight">
            iris<span className="text-pink-400">verseee</span>
          </h1>
          <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <a className="hover:text-pink-500 transition">Blog</a>
            <a className="hover:text-pink-500 transition">Dev</a>
            <a className="hover:text-pink-500 transition">Design</a>
            <a className="hover:text-pink-500 transition">Diary</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-14 pb-10">
        <p className="text-sm uppercase tracking-widest text-pink-400 mb-3">
          cozy dev blog
        </p>
        <h2 className="text-3xl md:text-4xl font-serif leading-tight">
          soft thoughts, code snippets &<br />
          quiet internet corners ☁️
        </h2>
        <p className="mt-4 max-w-xl text-gray-600">
          a calm little space for dev notes, design finds, and cozy creativity.
        </p>
      </section>

      {/* Latest */}
      <main className="max-w-6xl mx-auto px-6 pb-20">
        <h3 className="text-lg font-semibold mb-6">Latest</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <article className="rounded-3xl bg-white/70 backdrop-blur p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
            <span className="text-xs uppercase tracking-wide text-pink-500">
              Dev Diary
            </span>
            <div className="mt-4 h-40 rounded-2xl bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300" />
            <h4 className="mt-4 font-semibold">
              What building calm UI taught me
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              small lessons from soft interfaces
            </p>
          </article>

          {/* Card 2 */}
          <article className="rounded-3xl bg-white/70 backdrop-blur p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
            <span className="text-xs uppercase tracking-wide text-purple-500">
              Design
            </span>
            <div className="mt-4 h-40 rounded-2xl bg-gradient-to-br from-purple-200 to-pink-200" />
            <h4 className="mt-4 font-semibold">
              My Y2K color palette
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              gentle, nostalgic & web-safe
            </p>
          </article>

          {/* Card 3 */}
          <article className="rounded-3xl bg-gradient-to-br from-indigo-400 to-purple-500 p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all text-white">
            <span className="text-xs uppercase tracking-wide text-indigo-100">
              Personal
            </span>
            <div className="mt-4 h-40 rounded-2xl bg-white/20" />
            <h4 className="mt-4 font-semibold">
              Burnout, but make it slow
            </h4>
            <p className="text-sm text-indigo-100 mt-1">
              choosing rest without guilt
            </p>
          </article>
        </div>
      </main>
    </div>
  );
}
