import { GraduationCap } from 'lucide-react'
import { education } from '@/lib/resume'
import { SectionHeading } from './section-heading'

export function Education() {
  return (
    <section aria-labelledby="education-title" id="education" className="mx-auto max-w-6xl scroll-mt-28 px-4 md:px-6">
      <SectionHeading
        id="education-title"
        index="05"
        label="Education"
        title={
          <>
            Foundations in <span className="text-muted-foreground">computer applications.</span>
          </>
        }
      />

      <ul className="grid gap-4 sm:grid-cols-2">
        {education.map((item, i) => (
          <li
            key={item.degree}
            className={`flex flex-col gap-6 rounded-3xl border border-border p-6 md:p-8 ${i < 2 ? 'bg-card' : 'bg-transparent'}`}
          >
            <div className="flex items-start justify-between gap-4">
              <GraduationCap className={`size-6 ${i < 2 ? 'text-primary' : 'text-muted-foreground'}`} aria-hidden="true" />
              <span className="text-3xl font-medium tracking-tight">
                {item.score}
                <span className="sr-only"> score</span>
              </span>
            </div>
            <div>
              <h3 className="text-xl font-medium tracking-tight">{item.degree}</h3>
              <p className="mt-2 text-pretty text-muted-foreground">{item.school}</p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">{item.board}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
