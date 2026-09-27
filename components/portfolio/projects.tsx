import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { projects, wordpressSites } from '@/lib/resume'
import { SectionHeading } from './section-heading'

export function Projects() {
  return (
    <section aria-labelledby="work-title" id="work" className="mx-auto max-w-6xl scroll-mt-28 px-4 py-24 md:px-6 md:py-32">
      <SectionHeading
        id="work-title"
        index="04"
        label="Key projects"
        title={
          <>
            Selected work <span className="text-muted-foreground">& shipped sites.</span>
          </>
        }
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.title} className="group overflow-hidden rounded-3xl border border-border bg-card">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={project.image || '/placeholder.svg'}
                alt={`${project.title} preview`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-5 top-5 rounded-full bg-background/80 px-3 py-1 font-mono text-xs backdrop-blur">
                {project.index}
              </span>
            </div>
            <div className="flex flex-col gap-4 p-6 md:p-8">
              <h3 className="text-2xl font-medium tracking-tight">{project.title}</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">{project.description}</p>
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li key={tech} className="rounded-full bg-secondary px-3 py-1 font-mono text-xs">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 rounded-3xl border border-border bg-card p-6 md:p-10">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">WordPress portfolio</p>
            <h3 className="mt-3 text-3xl font-medium tracking-tight md:text-4xl">
              {wordpressSites.length}+ live websites delivered
            </h3>
          </div>
          <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
            Custom page & theme design, email templates and functionality using HTML5, CSS3, Bootstrap, WordPress, PHP,
            MySQL and custom plugins/themes.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 border-t border-border sm:grid-cols-2 lg:grid-cols-4">
          {wordpressSites.map((site, i) => (
            <li key={site} className="border-b border-border sm:odd:border-r lg:border-r lg:[&:nth-child(4n)]:border-r-0">
              <a
                href={`https://${site}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 px-1 py-4 transition-colors hover:bg-primary hover:text-primary-foreground sm:px-4"
              >
                <span className="flex items-center gap-3">
                  <span className="font-mono text-xs text-muted-foreground group-hover:text-primary-foreground/70">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-medium">{site}</span>
                </span>
                <ArrowUpRight
                  className="size-4 shrink-0 opacity-40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
