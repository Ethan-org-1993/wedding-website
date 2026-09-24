import React, { useState } from 'react'

const faqs = [
  {
    question: 'What should I wear?',
    answer: 'Placeholder — dress code details to follow.',
  },
  {
    question: 'Can I bring a plus one?',
    answer: 'Placeholder — plus one guidance to follow.',
  },
  {
    question: 'Are children welcome?',
    answer: 'Placeholder — children policy to follow.',
  },
  {
    question: 'Will there be transport between the church and reception?',
    answer: 'Placeholder — transport details to follow.',
  },
  {
    question: 'What time does the evening end?',
    answer: 'Placeholder — timings to follow.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <div id="faq" className="fade-in space-y-6">
      <h2 className="font-subtitle text-3xl font-semibold mb-4">FAQ</h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-ink/10 pb-3">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between text-left gap-4"
            >
              <span className="text-xl font-medium text-ink">{faq.question}</span>
              <span className="text-ink/40 text-xl flex-shrink-0">{open === i ? '−' : '+'}</span>
            </button>
            {open === i && (
              <p className="mt-3 text-xl text-ink/80">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
