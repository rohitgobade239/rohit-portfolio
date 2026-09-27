import { Asterisk } from 'lucide-react'
import { marquee } from '@/lib/resume'

export function TechMarquee() {
  const items = [...marquee, ...marquee]
  return (
    <div className="relative my-20 -rotate-1 overflow-hidden bg-primary py-5 text-primary-foreground md:my-28" aria-label="Technologies I work with">
      <ul className="flex w-max animate-marquee items-center gap-8">
        {items.map((item, i) => (
          <li key={`${item}-${i}`} className="flex items-center gap-8 text-2xl font-medium uppercase tracking-tight md:text-4xl" aria-hidden={i >= marquee.length}>
            {item}
            <Asterisk className="size-6 md:size-8" aria-hidden="true" />
          </li>
        ))}
      </ul>
    </div>
  )
}
