import React from 'react'

export default function Navigation({ currentPage, setCurrentPage }) {
  const menuItems = [
    { id: 'details', label: 'The Details', scroll: true },
    { id: 'travel', label: 'Travel & Stay', scroll: false },
  ]

  const handleMenuClick = (item) => {
    if (item.scroll) {
      // Scroll to details section on home page
      setCurrentPage('home')
      setTimeout(() => {
        const detailsSection = document.getElementById('details-section')
        if (detailsSection) {
          detailsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    } else {
      setCurrentPage(item.id)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-blush/20">
      <div className="relative max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left: menu items */}
        <div className="flex items-center gap-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item)}
              className={`text-base font-medium transition-colors ${
                currentPage === item.id || (item.scroll && currentPage === 'home')
                  ? 'text-ink underline underline-offset-4'
                  : 'text-ink/70 hover:text-ink'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Centre: monogram — absolutely centred so it doesn't affect flex spacing */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <button onClick={() => setCurrentPage('home')} aria-label="Home">
            <img
              src="/images/pe-monogram.png"
              alt="P & E"
              className="h-12 w-auto object-contain"
            />
          </button>
        </div>

        {/* Spacer to balance the monogram centering */}
        <div className="invisible">placeholder</div>
      </div>
    </nav>
  )
}
