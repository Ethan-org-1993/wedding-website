import React from 'react'
import Hero from './components/Hero.jsx'
import Story from './components/Story.jsx'
import Details from './components/Details.jsx'
import Travel from './components/Travel.jsx'
import RSVP from './components/RSVP.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="text-ink">
      <Hero />
      <main>
        <Section><Story /></Section>
        <Section divider><Details /></Section>
        <Section><Travel /></Section>
        <Section divider><RSVP /></Section>
      </main>
      <Footer />
    </div>
  )
}

function Section({ children, divider }) {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      {divider && <hr className="border-blush/50 mb-16" />}
      {children}
    </section>
  )
}
