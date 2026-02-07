import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  description: string
  location?: string
  accent?: "blue" | "lime"
}

export default function ExperienceCard({ title, company, period, description, location, accent = "blue" }: ExperienceCardProps) {
  return (
    <div className="relative group">
      <div
        className={`absolute inset-0 rounded-brutal translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-brutal ${
          accent === "lime" ? "bg-brutal-lime" : "bg-brutal-blue"
        }`}
      />
      <Card
        className={`relative bg-white border-4 border-brutal-dark rounded-brutal shadow-brutal-sm hover:shadow-brutal-md transition-brutal hover:-translate-y-0.5 border-l-6 overflow-hidden ${
          accent === "lime" ? "border-l-brutal-lime" : "border-l-brutal-blue"
        }`}
      >
        <div className="p-6">
          <h4 className="text-xl font-bold font-heading mb-2 text-black">{title}</h4>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <p className="font-semibold text-black">{company}</p>
            <Separator orientation="vertical" className="h-4 bg-brutal-dark" />
            <Badge className="bg-brutal-lime text-black border-2 border-black rounded-sm font-bold text-xs">
              {period}
            </Badge>
            {location && (
              <>
                <Separator orientation="vertical" className="h-4 bg-brutal-dark" />
                <p className="text-sm text-brutal-dark">{location}</p>
              </>
            )}
          </div>
          <p className="text-sm leading-relaxed text-brutal-dark">{description}</p>
        </div>
      </Card>
    </div>
  )
}
