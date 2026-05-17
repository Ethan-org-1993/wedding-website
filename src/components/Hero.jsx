import React from 'react'

export default function Hero() {
  return (
    <header className="relative overflow-visible">
      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24 text-center">
        <div className="relative flex justify-center mb-6 fade-in">
          <img
            src="/images/wedding-gif.gif"
            alt="Wedding celebration"
            className="w-[390px] max-w-full rounded-[14px] drop-shadow-sm"
          />
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-linen shadow-soft flex items-center justify-center">
            <img src="/images/pe-monogram.png" alt="P & E" className="w-[120px] h-[120px] object-contain" />
          </div>
        </div>
        <div className="relative -mt-12 mb-0 flex justify-center fade-in">
          <svg viewBox="0 0 760 120" className="w-full max-w-[760px]">
            <defs>
              <path id="heroCurve" d="M20 40 Q380 160 740 40" />
            </defs>
            <text className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold fill-current text-ink drop-shadow-sm">
              <textPath href="#heroCurve" startOffset="50%" textAnchor="middle">
                Phoebe &amp; Ethan
              </textPath>
            </text>
          </svg>
        </div>
        <div className="inline-block mt-4 bg-linen rounded-2xl shadow-soft px-8 py-5 fade-in">
          <p className="font-display uppercase tracking-[0.3em] text-xl text-ink/70">
            12<sup className="align-super text-[0.65em] ml-[2px]">th</sup> June 2027
          </p>
          <p className="mt-3 font-display text-xl text-ink/75">
            We're so excited to celebrate with you in West Sussex.
          </p>
        </div>
      </div>
    </header>
  )
}
