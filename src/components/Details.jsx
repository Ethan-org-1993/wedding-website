import React from 'react'

export default function Details() {
  return (
    <div id="details" className="fade-in">
      <h2 className="font-subtitle text-3xl font-semibold mb-8">The Details</h2>

      <div className="space-y-12">
        {/* Ceremony - left side with right padding */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:pr-12">
          <div className="flex-shrink-0 w-full md:w-48">
            <img 
              src="/images/church.png" 
              alt="Church" 
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          <div className="flex-1 w-full">
            <Card
              title="Ceremony"
              place="Saint Anthony & Saint George, Duncton"
              time="Arrive from 13:30 • Service at 14:00"
              mapUrl="https://maps.google.com/?q=Saint+Anthony+%26+Saint+George,+Duncton"
            >
              Parking available nearby. Please be seated 10 minutes before the ceremony.
            </Card>
          </div>
        </div>

        {/* Reception - right side with left padding */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-6 md:pl-12">
          <div className="flex-shrink-0 w-full md:w-48">
            <img 
              src="/images/mirror-ball.png" 
              alt="Mirror ball" 
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
          <div className="flex-1 w-full">
            <Card
              title="Reception"
              place="Architectural Plants, Billingshurst"
              time="Drinks from 16:00 • Dinner at 18:00"
              mapUrl="https://maps.google.com/?q=Architectural+Plants,+Billingshurst"
            >
              Join us for cocktails, dinner, and dancing among the greenery.
            </Card>
          </div>
        </div>

        <div className="mt-8 text-ink/70 text-sm">
          Dress code guidance and more details will be added closer to the date.
        </div>
      </div>
    </div>
  )
}

function Card({ title, place, time, children, mapUrl }) {
  return (
    <div
      className="rounded-2xl p-6 shadow-soft text-ink"
      style={{ backgroundColor: 'rgba(196, 209, 184, 0.4)' }}
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-subtitle text-2xl font-semibold">{title}</h3>
        <a className="text-sm underline underline-offset-4" target="_blank" rel="noreferrer" href={mapUrl}>Open map</a>
      </div>
      <p className="mt-2 font-medium">{place}</p>
      <p className="mt-1 text-ink/70">{time}</p>
      <p className="mt-4 text-ink/80">{children}</p>
    </div>
  )
}
