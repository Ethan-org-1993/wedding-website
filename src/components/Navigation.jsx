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
      <div className="relative max-w-6xl mx-auto px-6 py-3 flex items-center gap-4 sm:justify-between">
        {/* Monogram: in-flow on the left on mobile, absolutely centred on sm+ */}
        <button
          onClick={() => setCurrentPage('home')}
          aria-label="Home"
          className="order-first shrink-0 sm:order-none sm:absolute sm:left-1/2 sm:-translate-x-1/2"
        >
          <img
            src="/images/pe-monogram.png"
            alt="P & E"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </button>

        {/* Menu items */}
        <div className="flex items-center gap-4 sm:gap-6">
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

        {/* Spacer to balance the monogram centering on desktop (top-right kept free for a future RSVP button) */}
        <div className="hidden sm:block invisible">placeholder</div>
      </div>
    </nav>
  )
}
