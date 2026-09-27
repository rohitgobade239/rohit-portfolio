'use client'

import { useSyncExternalStore } from 'react'

const formatter = new Intl.DateTimeFormat('en-IN', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
  timeZone: 'Asia/Kolkata',
})

function subscribe(callback: () => void) {
  const id = setInterval(callback, 30_000)
  return () => clearInterval(id)
}

export function LocalTime() {
  const time = useSyncExternalStore(
    subscribe,
    () => formatter.format(new Date()),
    () => null,
  )

  return <span suppressHydrationWarning>{time ? `${time} IST` : 'IST'}</span>
}
