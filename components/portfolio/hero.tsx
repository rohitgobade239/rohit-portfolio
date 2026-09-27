import { ArrowDownRight, MapPin } from 'lucide-react'
import { profile, stats } from '@/lib/resume'
import { LocalTime } from './local-time'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40">
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-primary">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Open to work
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="size-3.5" aria-hidden="true" />
            {profile.location}
          </span>
          <LocalTime />
        </div>

        <h1 className="mt-8 text-[18vw] font-medium uppercase leading-[0.82] tracking-tighter md:text-[11rem]">
          <span className="block">Rohit</span>
          <span className="text-outline block">Gobade</span>
        </h1>

        <div className="mt-10 grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="text-pretty text-2xl leading-snug md:text-3xl">
              {profile.role} crafting fast, responsive websites with{' '}
              <span className="text-primary">WordPress</span>, <span className="text-primary">React.js</span> &{' '}
              <span className="text-primary">Next.js</span> — from pixel to production server.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="group flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                View my work
                <ArrowDownRight className="size-4 transition-transform group-hover:rotate-[-45deg]" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
              >
                {profile.email}
              </a>
            </div>
          </div>

          <TerminalCard />
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px border-y border-border bg-border md:mt-24 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2 bg-background px-4 py-8 md:px-6">
              <dt className="order-2 text-sm text-muted-foreground">{stat.label}</dt>
              <dd className="order-1 text-4xl font-medium tracking-tight md:text-5xl">
                {stat.value}
                <span className="text-primary">{stat.suffix}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function TerminalCard() {
  return (
    <div className="rounded-2xl border border-border bg-card font-mono text-sm shadow-2xl shadow-primary/5 md:col-span-5">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="size-2.5 rounded-full bg-muted-foreground/40" />
        <span className="size-2.5 rounded-full bg-muted-foreground/40" />
        <span className="size-2.5 rounded-full bg-primary" />
        <span className="ml-2 text-xs text-muted-foreground">~/rohit/whoami.ts</span>
      </div>
      <pre className="overflow-x-auto p-5 leading-relaxed">
        <code>
          <span className="text-accent">const</span> dev = {'{'}
          {'\n'}  name: <span className="text-primary">{"'Rohit Gobade'"}</span>,
          {'\n'}  experience: <span className="text-primary">{"'~4 years'"}</span>,
          {'\n'}  stack: [<span className="text-primary">{"'WP'"}</span>, <span className="text-primary">{"'React'"}</span>, <span className="text-primary">{"'Next'"}</span>],
          {'\n'}  devops: <span className="text-accent">true</span>,
          {'\n'}  coffee: <span className="text-accent">Infinity</span>,
          {'\n'}{'}'}
          {'\n'}
          {'\n'}<span className="text-muted-foreground">$</span> deploy --prod
          <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-primary" aria-hidden="true" />
        </code>
      </pre>
    </div>
  )
}
