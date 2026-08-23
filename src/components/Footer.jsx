import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-24 mb-10 text-center text-sm text-ink/60">
      <p className="mb-2">
        Contact us:{' '}
        <a
          href="mailto:wedding@phoebeandethan.com"
          className="underline underline-offset-2 hover:text-ink/80 transition-colors"
        >
          wedding@phoebeandethan.com
        </a>
      </p>
      <p>© {new Date().getFullYear()} Phoebe &amp; Ethan</p>
    </footer>
  )
}
