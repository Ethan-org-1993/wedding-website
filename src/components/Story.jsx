import React from 'react'

export default function Story() {
  return (
    <div id="story" className="fade-in">
      <h2 className="font-display text-3xl font-semibold mb-8">Our Story</h2>
      <div className="space-y-8 text-ink/85">
        <p>
          A short note about how you met, a favourite memory, and the proposal —
          written in your voice. We can replace this copy later once you're ready.
        </p>
        <ul className="grid gap-6 sm:grid-cols-3">
          <li className="bg-white/70 rounded-2xl p-5 shadow-soft">
            <p className="text-xs uppercase tracking-wider text-ink/60">2019</p>
            <p className="mt-2 font-medium">Met in London</p>
          </li>
          <li className="bg-white/70 rounded-2xl p-5 shadow-soft">
            <p className="text-xs uppercase tracking-wider text-ink/60">2023</p>
            <p className="mt-2 font-medium">The proposal</p>
          </li>
          <li className="bg-white/70 rounded-2xl p-5 shadow-soft">
            <p className="text-xs uppercase tracking-wider text-ink/60">2027</p>
            <p className="mt-2 font-medium">We say “I do”</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
