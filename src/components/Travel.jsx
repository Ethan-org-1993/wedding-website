import React from 'react'

export default function Travel() {
  return (
    <div id="travel" className="fade-in">
      <h2 className="font-display text-3xl font-semibold mb-8">Travel & Stay</h2>
      <div className="space-y-4 text-ink/85">
        <p>
          We’ll add suggested hotels, taxi info, and local tips here.
          If you have specific recommendations, I’ll populate them.
        </p>
        <ul className="list-disc pl-6">
          <li>Nearest airports: London Gatwick, London Heathrow</li>
          <li>Rail: London &rarr; Pulborough or Billingshurst</li>
          <li>Local taxis will be listed nearer the time</li>
        </ul>
      </div>
    </div>
  )
}
