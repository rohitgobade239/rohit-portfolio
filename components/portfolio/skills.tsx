import { Blocks, Cloud, Code2, Database, LayoutTemplate, Rocket, Sparkles, type LucideIcon } from 'lucide-react'
import { skillGroups } from '@/lib/resume'
import { SectionHeading } from './section-heading'

const icons: Record<string, LucideIcon> = {
  '01': Code2,
  '02': LayoutTemplate,
  '03': Blocks,
  '04': Cloud,
  '05': Rocket,
  '06': Database,
  '07': Sparkles,
}

export function Skills() {
  return (
    <section aria-labelledby="skills-title" id="skills" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-24 md:px-6 md:py-32">
      <SectionHeading
        id="skills-title"
        index="02"
        label="Technical skills"
        title={
          <>
            A full-stack toolkit, <span className="text-muted-foreground">shipped daily.</span>
          </>
        }
      />

      <div className="grid gap-4 md:grid-cols-6">
        {skillGroups.map((group) => {
          const Icon = icons[group.id]
          const highlight = group.id === '01'
          return (
            <article
              key={group.id}
              className={`group flex flex-col gap-8 rounded-3xl border p-6 transition-colors md:p-8 ${group.span} ${
                highlight
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-card hover:border-primary/50'
              }`}
            >
              <div className="flex items-start justify-between">
                <span
                  className={`flex size-11 items-center justify-center rounded-2xl ${
                    highlight ? 'bg-primary-foreground text-primary' : 'bg-secondary text-primary'
                  }`}
                >
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span className={`font-mono text-xs ${highlight ? 'opacity-70' : 'text-muted-foreground'}`}>
                  {group.id}/07
                </span>
              </div>
              <div className="mt-auto">
                <h3 className="mb-4 text-xl font-medium tracking-tight">{group.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className={`rounded-full px-3 py-1 font-mono text-xs ${
                        highlight ? 'bg-primary-foreground/10' : 'bg-secondary text-secondary-foreground'
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
