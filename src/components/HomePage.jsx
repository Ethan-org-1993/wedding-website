import React from 'react'
import Hero from './Hero.jsx'
import Details from './Details.jsx'
import Footer from './Footer.jsx'

export default function HomePage() {
  const joyUrl = "https://withjoy.com/phoebe-and-ethan"

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div>
      <Hero />
      <main>
        <section id="details-section" className="max-w-3xl mx-auto px-6 py-16">
          <Details />
        </section>
        
        {/* RSVP Button Section */}
        <section className="max-w-3xl mx-auto px-6 pb-16">
          <div className="text-center">
            <a
              href={joyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block px-6 py-3 rounded-2xl bg-ink text-white shadow-soft hover:bg-ink/90 transition-colors"
            >
              RSVP
            </a>
          </div>
        </section>

        {/* Scroll to Top Arrow */}
        <div className="max-w-3xl mx-auto px-6 pb-8 flex justify-center">
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/70 backdrop-blur shadow-soft hover:bg-white/90 transition-colors text-ink/70 hover:text-ink"
            aria-label="Scroll to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
