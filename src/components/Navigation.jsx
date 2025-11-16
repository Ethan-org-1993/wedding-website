import React from 'react'

export default function Navigation({ currentPage, setCurrentPage }) {
  const menuItems = [
    { id: 'details', label: 'The Details', scroll: true },
    { id: 'travel', label: 'Travel', scroll: false },
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

  const handleRSVPClick = () => {
    const joyUrl = "https://withjoy.com/phoebe-and-ethan"
    window.open(joyUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-blush/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left side menu buttons */}
        <div className="flex items-center gap-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleMenuClick(item)}
              className={`text-sm font-medium transition-colors ${
                currentPage === item.id || (item.scroll && currentPage === 'home')
                  ? 'text-ink underline underline-offset-4'
                  : 'text-ink/70 hover:text-ink'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right side RSVP button */}
        <button
          onClick={handleRSVPClick}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-ink text-white hover:bg-ink/90 transition-colors"
          aria-label="RSVP"
        >
          <img 
            src="/images/love-letter.png" 
            alt="RSVP" 
            className="h-5 w-5 object-contain brightness-0 invert"
          />
          <span className="text-sm font-medium">RSVP</span>
        </button>
      </div>
    </nav>
  )
}
