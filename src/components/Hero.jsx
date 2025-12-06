import React from 'react'

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg className="absolute -top-10 -right-10 opacity-25" width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="160" cy="160" r="160" fill="#E9D8D2"/>
        </svg>
        <svg className="absolute -bottom-16 -left-16 opacity-30" width="380" height="380" viewBox="0 0 380 380" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="190" cy="190" r="190" fill="#DCE5E1"/>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-24 text-center">
        <div className="flex justify-center mb-6 fade-in">
          <img 
            src="/images/wedding-gif.gif" 
            alt="Wedding celebration" 
            className="w-[390px] max-w-full drop-shadow-sm" 
          />
        </div>
        <h1 className="relative -mt-12 inline-block font-display text-6xl sm:text-7xl md:text-8xl font-semibold fade-in">
          Phoebe <span className="text-ink/40">&</span> Ethan
        </h1>
        <p className="mt-3 uppercase tracking-[0.3em] text-sm text-ink/70 fade-in">12 June 2027</p>
        <p className="mt-6 text-ink/75 fade-in">
          We're so excited to celebrate with you in West Sussex.
        </p>
      </div>
    </header>
  )
}
