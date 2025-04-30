interface TimelineItemProps {
  title: string
  organization: string
  period: string
  description: string
  location?: string
}

export default function TimelineItem({ title, organization, period, description, location }: TimelineItemProps) {
  return (
    <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-border">
      <div className="absolute left-0 top-0 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-background bg-primary"></div>
      <div className="space-y-2">
        <h4 className="font-semibold">{title}</h4>
        <div className="text-sm text-muted-foreground">
          <p>{organization}</p>
          <p>{period}</p>
          {location && <p>{location}</p>}
        </div>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  )
}
