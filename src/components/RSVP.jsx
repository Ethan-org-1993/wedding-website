import React from 'react'

export default function RSVP() {
  const joyUrl = "https://withjoy.com/phoebe-and-ethan"; // TODO: replace with your actual WithJoy URL when ready

  return (
    <div id="rsvp" className="fade-in text-center">
      <h2 className="font-display text-3xl font-semibold mb-4">RSVP</h2>
      <p className="text-ink/80">
        We’ll be collecting RSVPs on WithJoy.
      </p>
      <a
        href={joyUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-6 px-6 py-3 rounded-2xl bg-ink text-white shadow-soft"
      >
        Open RSVP (coming soon)
      </a>
      <p className="mt-3 text-sm text-ink/60">Link will activate once our WithJoy page is live.</p>
    </div>
  )
}
