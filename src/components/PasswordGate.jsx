import React, { useState } from 'react'

const PASSWORD = 'pe-wedding'
const STORAGE_KEY = 'pe_unlocked'

export function isUnlocked() {
  return localStorage.getItem(STORAGE_KEY) === '1'
}

export default function PasswordGate({ onUnlock }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value === PASSWORD) {
      localStorage.setItem(STORAGE_KEY, '1')
      onUnlock()
    } else {
      setError(true)
      setValue('')
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{
        backgroundColor: '#FAF3EE',
        backgroundImage: "url('/images/stripe-background.png')",
        backgroundSize: '100% auto',
        backgroundRepeat: 'repeat-y',
      }}
    >
      <div className="bg-linen rounded-2xl shadow-soft p-10 w-full max-w-sm text-center">
        <img
          src="/images/pe-monogram.png"
          alt="P & E"
          className="w-32 h-32 object-contain mx-auto mb-6"
        />
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={value}
            onChange={(e) => { setValue(e.target.value); setError(false) }}
            placeholder="Enter password"
            autoFocus
            className="w-full px-4 py-3 rounded-xl border border-blush bg-white/60 text-ink font-display text-center text-lg placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-gold/50"
          />
          {error && (
            <p className="text-sm text-ink/60 font-display">Incorrect password — please try again.</p>
          )}
          <button
            type="submit"
            className="w-full px-4 py-3 rounded-xl bg-ink text-white font-display text-lg hover:bg-ink/90 transition-colors"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  )
}
