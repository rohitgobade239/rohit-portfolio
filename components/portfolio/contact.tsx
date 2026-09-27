import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '@/lib/resume'

export function Contact() {
  const year = 2026
  return (
    <footer id="contact" className="scroll-mt-28 px-4 pb-6 pt-24 md:px-6 md:pt-32">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-primary p-8 text-primary-foreground md:p-16">
        <p className="font-mono text-xs uppercase tracking-widest opacity-70">06 — Contact</p>
        <h2 className="mt-6 text-balance text-5xl font-medium uppercase leading-[0.9] tracking-tighter md:text-8xl">
          {"Have a project? Let's build it."}
        </h2>

        <a
          href={`mailto:${profile.email}`}
          className="group mt-12 inline-flex items-center gap-3 rounded-full bg-primary-foreground px-6 py-4 text-base font-medium text-primary transition-transform hover:scale-[1.02] md:text-lg"
        >
          <Mail className="size-5" aria-hidden="true" />
          {profile.email}
          <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </a>

        <dl className="mt-12 grid gap-6 border-t border-primary-foreground/20 pt-8 sm:grid-cols-3">
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest opacity-70">Phone</dt>
            <dd className="mt-2">
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 text-lg font-medium hover:underline">
                <Phone className="size-4" aria-hidden="true" />
                {profile.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest opacity-70">Based in</dt>
            <dd className="mt-2 inline-flex items-center gap-2 text-lg font-medium">
              <MapPin className="size-4" aria-hidden="true" />
              {profile.location}
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-widest opacity-70">Work mode</dt>
            <dd className="mt-2 text-lg font-medium">Remote · Hybrid · Office</dd>
          </div>
        </dl>
      </div>

      <div className="mx-auto mt-6 flex max-w-6xl flex-col items-center justify-between gap-2 px-2 font-mono text-xs text-muted-foreground sm:flex-row">
        <p>
          {'© '}
          {year} {profile.name}.
        </p>
        <a href="#top" className="hover:text-foreground">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
