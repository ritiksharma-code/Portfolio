interface ExperienceCardProps {
  title: string
  company: string
  period: string
  description: string
  location?: string
}

export default function ExperienceCard({ title, company, period, description, location }: ExperienceCardProps) {
  return (
    <div className="bg-background rounded-lg border shadow-sm p-6 hover:shadow-md transition-shadow">
      <h4 className="text-lg font-semibold mb-1">{title}</h4>
      <div className="text-sm text-muted-foreground mb-3">
        <p className="font-medium">{company}</p>
        <p>{period}</p>
        {location && <p>{location}</p>}
      </div>
      <p className="text-sm">{description}</p>
    </div>
  )
}
