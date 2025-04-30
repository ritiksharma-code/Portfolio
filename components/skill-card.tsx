import type React from "react"

interface SkillCardProps {
  title: string
  skills: string[]
  icon: React.ReactNode
}

export default function SkillCard({ title, skills, icon }: SkillCardProps) {
  return (
    <div className="bg-background rounded-lg border shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">{icon}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
