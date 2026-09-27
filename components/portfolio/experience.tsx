import { experience } from '@/lib/resume'
import { SectionHeading } from './section-heading'

export function Experience() {
  return (
    <section aria-labelledby="experience-title" id="experience" className="mx-auto max-w-6xl scroll-mt-28 px-4 md:px-6">
      <SectionHeading
        id="experience-title"
        index="03"
        label="Experience"
        title={
          <>
            Where I build, <span className="text-muted-foreground">deploy & maintain.</span>
          </>
        }
      />

      <article className="grid gap-10 border-t border-border pt-10 md:grid-cols-12">
        <header className="md:sticky md:top-28 md:col-span-4 md:self-start">
          <p className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            {experience.period}
          </p>
          <h3 className="mt-5 text-3xl font-medium tracking-tight">{experience.role}</h3>
          <p className="mt-2 text-lg text-muted-foreground">{experience.company}</p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {experience.tags.map((tag) => (
              <li key={tag} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">
                {tag}
              </li>
            ))}
          </ul>
        </header>

        <ol className="md:col-span-8">
          {experience.highlights.map((item, i) => (
            <li
              key={item}
              className="group grid grid-cols-[3rem_1fr] gap-4 border-b border-border py-5 first:pt-0 last:border-b-0"
            >
              <span className="font-mono text-sm text-muted-foreground transition-colors group-hover:text-primary">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-pretty leading-relaxed">{item}</p>
            </li>
          ))}
        </ol>
      </article>
    </section>
  )
}
