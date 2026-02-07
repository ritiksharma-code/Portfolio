import { Badge } from "@/components/ui/badge"

interface SkillTagProps {
  name: string
  variant?: "lime" | "blue" | "coral"
}

export default function SkillTag({ name, variant = "lime" }: SkillTagProps) {
  const variantStyles = {
    lime: "bg-brutal-lime text-black border-black shadow-brutal-lime-sm hover:shadow-brutal-sm",
    blue: "bg-brutal-blue text-white border-black shadow-brutal-blue-sm hover:shadow-brutal-sm",
    coral: "bg-brutal-coral text-white border-black shadow-brutal-coral-sm hover:shadow-brutal-sm",
  }

  return (
    <Badge
      className={`
        border-3 rounded-sm px-3 py-1 text-xs font-bold uppercase tracking-wide
        transition-brutal hover:scale-110 hover:-rotate-1
        ${variantStyles[variant]}
      `}
    >
      {name}
    </Badge>
  )
}
