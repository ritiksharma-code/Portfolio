import type React from "react"
import { Card } from "@/components/ui/card"

interface SkillCardProps {
  title: string
  skills: string[]
  icon: React.ReactNode
  accent?: "blue" | "lime"
}

export default function SkillCard({ title, skills, icon, accent = "blue" }: SkillCardProps) {
  // Rotate through brutal colors for variety
  const getVariant = (index: number): "lime" | "blue" | "coral" => {
    const variants: ("lime" | "blue" | "coral")[] = ["lime", "blue", "coral"]
    return variants[index % 3]
  }

  return (
    <div className="relative group">
      {/* Background offset layer */}
      <div
        className={`absolute inset-0 rounded-brutal translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-brutal ${
          accent === "lime" ? "bg-brutal-lime" : "bg-brutal-blue"
        }`}
      />
      
      {/* Main card */}
      <Card className="relative bg-white border-6 border-black rounded-brutal shadow-brutal-lg hover:shadow-brutal-xl transition-brutal hover:-translate-x-1 hover:-translate-y-1 p-6 h-[360px] flex flex-col">
        <div className="flex items-center mb-6">
          <div className="w-14 h-14 bg-brutal-lime border-4 border-black rounded-brutal flex items-center justify-center mr-4 group-hover:rotate-6 transition-brutal shrink-0">
            {icon}
          </div>
          <h3 className="text-lg font-bold font-heading text-black leading-tight">{title}</h3>
        </div>
        <div className="grid grid-cols-3 gap-2.5 flex-grow content-start">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className={`
                border-4 border-black rounded-sm px-2 py-3 text-xs font-bold uppercase tracking-wide
                transition-brutal hover:scale-105 hover:-rotate-1
                flex items-center justify-center text-center
                min-h-[60px]
                ${
                  getVariant(index) === "lime"
                    ? "bg-brutal-lime text-black"
                    : getVariant(index) === "blue"
                      ? "bg-brutal-blue text-white"
                      : "bg-brutal-coral text-white"
                }
              `}
            >
              {skill}
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
