import { Check } from 'lucide-react'
import { profile, strengths } from '@/lib/resume'
import { SectionHeading } from './section-heading'

export function About() {
  return (
    <section aria-labelledby="about-title" id="about" className="mx-auto max-w-6xl scroll-mt-28 px-4 md:px-6">
      <SectionHeading
        id="about-title"
        index="01"
        label="About"
        title={
          <>
            Frontend craft meets <span className="text-muted-foreground">DevOps discipline.</span>
          </>
        }
      />

      <div className="grid gap-6 md:grid-cols-12">
        <div className="flex flex-col justify-between gap-10 rounded-3xl border border-border bg-card p-8 md:col-span-7 md:p-10">
          <p className="text-pretty text-xl leading-relaxed md:text-2xl">{profile.summary}</p>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            I lead websites end-to-end for B2B and B2C brands — corporate sites, SaaS platforms, eCommerce, healthcare and
            lifestyle — handling everything from UI implementation and CMS architecture to hosting, domains, and live
            deployments.
          </p>
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">Open to roles</p>
            <ul className="flex flex-wrap gap-2">
              {profile.openTo.map((role) => (
                <li key={role} className="rounded-full border border-border px-3 py-1.5 text-sm">
                  {role}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">Remote · Hybrid · Office-based</p>
          </div>
        </div>

        <div className="rounded-3xl bg-secondary p-8 md:col-span-5 md:p-10">
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">Strengths</p>
          <ul className="flex flex-col gap-5">
            {strengths.map((s) => (
              <li key={s} className="flex gap-3 leading-relaxed">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3" aria-hidden="true" />
                </span>
                {s}
              </li>
            ))}
          </ul>
          <div className="mt-8 border-t border-border pt-6">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Languages</p>
            <p className="mt-2">{profile.languages.join(' · ')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
