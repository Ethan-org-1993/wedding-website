import React, { useState } from 'react'

const YEAR = 2026
const MONTH = 11 // December (0-indexed)
const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

// Sample events — placeholder content until real plans are confirmed.
const EVENTS = [
  { date: '2026-12-05', title: 'Engagement Drinks', time: '7:00pm', location: 'The Crown, London' },
  { date: '2026-12-12', title: 'Venue Walkthrough', time: '11:00am', location: 'Wedding venue' },
  { date: '2026-12-12', title: 'Menu Tasting', time: '2:00pm', location: 'Wedding venue' },
  { date: '2026-12-19', title: 'Christmas Get-Together', time: '6:30pm', location: 'Our place' },
  { date: '2026-12-31', title: "New Year's Eve Party", time: '8:00pm', location: 'To be confirmed' },
]

function toKey(year, month, day) {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

// Returns the month as rows of 7 cells (Monday first); padding cells are null.
function buildMonthGrid(year, month) {
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const leading = (new Date(year, month, 1).getDay() + 6) % 7
  const cells = [
    ...Array(leading).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]
  while (cells.length % 7 !== 0) cells.push(null)

  const weeks = []
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7))
  return weeks
}

function groupByDate(events) {
  return events.reduce((acc, event) => {
    ;(acc[event.date] ||= []).push(event)
    return acc
  }, {})
}

export default function Events() {
  const [selected, setSelected] = useState(null)
  const weeks = buildMonthGrid(YEAR, MONTH)
  const eventsByDate = groupByDate(EVENTS)
  const monthLabel = new Date(YEAR, MONTH, 1).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })
  const visibleEvents = selected ? eventsByDate[selected] || [] : EVENTS

  return (
    <div id="events" className="fade-in">
      <h2 className="font-subtitle text-3xl font-semibold mb-2">Events</h2>
      <p className="text-ink/70 mb-8">{monthLabel}</p>

      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {WEEKDAYS.map((day) => (
          <div key={day} className="py-2 font-medium text-ink/60">{day}</div>
        ))}
        {weeks.flat().map((day, i) => {
          if (day === null) return <div key={`pad-${i}`} />
          const key = toKey(YEAR, MONTH, day)
          const hasEvents = Boolean(eventsByDate[key])
          const isSelected = selected === key
          return (
            <button
              key={key}
              type="button"
              disabled={!hasEvents}
              onClick={() => setSelected(isSelected ? null : key)}
              aria-pressed={isSelected}
              aria-label={hasEvents ? `${day} December, ${eventsByDate[key].length} event(s)` : `${day} December`}
              className={`aspect-square rounded-lg flex flex-col items-center justify-center transition-colors ${
                isSelected
                  ? 'bg-gold text-white'
                  : hasEvents
                    ? 'bg-blush/60 hover:bg-blush text-ink'
                    : 'text-ink/50 cursor-default'
              }`}
            >
              <span>{day}</span>
              {hasEvents && (
                <span className={`mt-1 h-1.5 w-1.5 rounded-full ${isSelected ? 'bg-white' : 'bg-gold'}`} />
              )}
            </button>
          )
        })}
      </div>

      <div className="mt-10">
        <div className="flex items-baseline justify-between mb-4">
          <h3 className="font-subtitle text-2xl">
            {selected
              ? new Date(`${selected}T00:00:00`).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })
              : 'All events'}
          </h3>
          {selected && (
            <button type="button" onClick={() => setSelected(null)} className="text-sm text-ink/70 hover:text-ink underline underline-offset-4">
              Show all
            </button>
          )}
        </div>
        <ul className="space-y-3">
          {visibleEvents.map((event) => (
            <li key={`${event.date}-${event.title}`} className="bg-white/70 rounded-xl p-4">
              <p className="font-medium">{event.title}</p>
              <p className="text-sm text-ink/70">
                {!selected && `${Number(event.date.slice(-2))} Dec · `}{event.time} · {event.location}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
