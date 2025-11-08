import React from 'react'

export default function Details() {
  return (
    <div id="details" className="fade-in">
      <h2 className="font-display text-3xl font-semibold mb-8">Ceremony & Reception</h2>

      <div className="grid gap-8 sm:grid-cols-2">
        <Card
          title="Ceremony"
          place="Saint Anthony & Saint George, Duncton"
          time="Arrive from 13:30 • Service at 14:00"
          mapUrl="https://maps.google.com/?q=Saint+Anthony+%26+Saint+George,+Duncton"
        >
          Parking available nearby. Please be seated 10 minutes before the ceremony.
        </Card>

        <Card
          title="Reception"
          place="Architectural Plants, Billingshurst"
          time="Drinks from 16:00 • Dinner at 18:00"
          mapUrl="https://maps.google.com/?q=Architectural+Plants,+Billingshurst"
        >
          Join us for cocktails, dinner, and dancing among the greenery.
        </Card>
      </div>

      <div className="mt-8 text-ink/70 text-sm">
        Dress code guidance and more details will be added closer to the date.
      </div>
    </div>
  )
}

function Card({ title, place, time, children, mapUrl }) {
  return (
    <div className="bg-white/70 rounded-2xl p-6 shadow-soft">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-2xl font-semibold">{title}</h3>
        <a className="text-sm underline underline-offset-4" target="_blank" rel="noreferrer" href={mapUrl}>Open map</a>
      </div>
      <p className="mt-2 font-medium">{place}</p>
      <p className="mt-1 text-ink/70">{time}</p>
      <p className="mt-4 text-ink/80">{children}</p>
    </div>
  )
}
