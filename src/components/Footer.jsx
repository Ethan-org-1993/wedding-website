import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-24 mb-10 text-center text-sm text-ink/60">
      <p>© {new Date().getFullYear()} Phoebe &amp; Ethan</p>
      <p className="mt-2">Made with love • 12 June 2027</p>
    </footer>
  )
}
