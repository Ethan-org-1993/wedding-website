import React, { useState } from 'react'
import Navigation from './components/Navigation.jsx'
import HomePage from './components/HomePage.jsx'
import Travel from './components/Travel.jsx'

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />
      case 'travel':
        return (
          <main className="pt-24">
            <Section><Travel /></Section>
          </main>
        )
      default:
        return <HomePage />
    }
  }

  return (
    <div className="text-ink">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  )
}

function Section({ children }) {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <div className="bg-linen rounded-2xl shadow-soft p-8">
        {children}
      </div>
    </section>
  )
}
