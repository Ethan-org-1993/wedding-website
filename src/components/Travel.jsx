import React from 'react'

const hotels = [
  { name: 'The Stonemasons Inn', location: 'Petworth', url: 'https://www.stonemasonspetworth.co.uk/' },
  { name: 'Badgers', location: 'Petworth', url: 'https://badgerspetworth.co.uk/' },
  { name: 'The Angel Inn', location: 'Petworth', url: 'https://angelinnpetworth.co.uk/' },
  { name: 'The Welldiggers Arms', location: 'Petworth', url: 'https://butcombe.com/the-welldiggers-arms-west-sussex/' },
  { name: 'The Old Railway Station', location: 'Petworth', url: 'https://www.old-station.co.uk/' },
  { name: 'The Kings Head Inn', location: 'Billingshurst', url: 'https://thekingsheadinn.pub/' },
  { name: 'Travelodge', location: 'Billingshurst', url: 'https://www.travelodge.co.uk/hotels/13/billingshurst-five-oaks-hotel' },
  { name: 'The Swan Inn', location: 'Fittleworth', url: 'http://www.swaninnfittleworth.com/', note: '2 night minimum stay' },
  { name: 'The Sportsman Inn', location: 'Amberley', url: 'https://thesportsmansussex.co.uk/' },
  { name: 'The Labouring Man', location: 'Coldwaltham', url: 'https://www.labouringman.com/' },
]

export default function Travel() {
  return (
    <div id="travel" className="fade-in space-y-10">

      <div>
        <h2 className="font-subtitle text-3xl font-semibold mb-4">Accommodation</h2>
        <p className="text-xl text-ink/80 mb-2">
          As the wedding is taking place near the Goodwood Estate, we recommend arranging accommodation as soon as you can as the local area can get busy if there are events.
        </p>
        <p className="text-xl text-ink/80 mb-6">
          Aside from the hotels below, there are also lots of AirBnB / self-catered properties available in the local area.
        </p>
        <p className="text-xl italic text-ink/80 mb-6">
          With the exception of babes in arms, we've chosen to make our wedding an adults-only celebration. We hope you understand and can enjoy the day off with us.
        </p>
        <div className="space-y-3">
          {hotels.map((hotel) => (
            <div key={hotel.name} className="flex items-baseline gap-2">
              <a
                href={hotel.url}
                target="_blank"
                rel="noreferrer"
                className="text-xl font-medium text-ink hover:text-ink/60 underline underline-offset-2 transition-colors"
              >
                {hotel.name}
              </a>
              <span className="text-xl text-ink/60">{hotel.location}</span>
              {hotel.note && (
                <span className="text-base text-ink/50">— {hotel.note}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-subtitle text-3xl font-semibold mb-4">Travel</h2>
        <p className="text-xl text-ink/80">
          Plenty of parking is available at the Church and Architectural Plants.
        </p>
        <p className="mt-4 text-xl text-ink/60">More details coming soon…</p>
      </div>

    </div>
  )
}
