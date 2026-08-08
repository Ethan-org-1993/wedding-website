import React, { useState } from 'react'

const PASSWORD = 'pe-wedding'
const STORAGE_KEY = 'pe_unlocked'

export function isUnlocked() {
  return localStorage.getItem(STORAGE_KEY) === '1'
}

export default function PasswordGate({ onUnlock }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const [show, setShow] = useState(false)

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
          <div className="relative">
            <input
              type={show ? 'text' : 'password'}
              value={value}
              onChange={(e) => { setValue(e.target.value); setError(false) }}
              placeholder="Enter password"
              autoFocus
              className="w-full px-4 py-3 pr-11 rounded-xl border border-blush bg-white/60 text-ink font-display text-center text-lg placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-gold/50"
            />
            <button
              type="button"
              onClick={() => setShow(s => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-ink/40 hover:text-ink/70 transition-colors"
              aria-label={show ? 'Hide password' : 'Show password'}
            >
              {show ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              )}
            </button>
          </div>
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
