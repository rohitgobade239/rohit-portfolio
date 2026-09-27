export function SectionHeading({
  index,
  label,
  title,
  id,
}: {
  index: string
  label: string
  title: React.ReactNode
  id: string
}) {
  return (
    <div className="mb-12 flex flex-col gap-4 md:mb-16">
      <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        <span className="text-primary">{index}</span>
        <span className="h-px w-10 bg-border" aria-hidden="true" />
        {label}
      </p>
      <h2 id={id} className="max-w-3xl text-balance text-4xl font-medium leading-none tracking-tight md:text-6xl">
        {title}
      </h2>
    </div>
  )
}
