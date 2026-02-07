import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  liveUrl?: string
}

export default function ProjectCard({ title, description, technologies, githubUrl, liveUrl }: ProjectCardProps) {
  const getVariant = (index: number): "lime" | "blue" | "coral" => {
    const variants: ("lime" | "blue" | "coral")[] = ["lime", "blue", "coral"]
    return variants[index % 3]
  }

  return (
    <div className="relative group">
      {/* Background offset layer */}
      <div className="absolute inset-0 bg-brutal-blue rounded-brutal translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-brutal" />
      
      {/* Main card */}
      <Card className="relative bg-white border-6 border-black rounded-brutal shadow-brutal-lg hover:shadow-brutal-xl transition-brutal hover:-translate-x-1 hover:-translate-y-1 p-8 min-h-[400px] h-full flex flex-col">
        <div className="mb-6 flex-grow">
          <div className="w-16 h-16 bg-brutal-coral border-4 border-black rounded-brutal flex items-center justify-center mb-4 group-hover:rotate-12 transition-brutal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.29 7 12 12 20.71 7" />
              <line x1="12" y1="22" x2="12" y2="12" />
            </svg>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-black">{title}</h3>
          <p className="text-lg md:text-xl leading-relaxed text-brutal-dark">{description}</p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <Badge
              key={tech}
              className={`
                border-3 rounded-sm px-3 py-1.5 text-xs font-bold uppercase
                transition-brutal hover:scale-110 hover:-rotate-1
                ${
                  getVariant(index) === "lime"
                    ? "bg-brutal-lime text-black border-black"
                    : getVariant(index) === "blue"
                      ? "bg-brutal-blue text-white border-black"
                      : "bg-brutal-coral text-white border-black"
                }
              `}
            >
              {tech}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-3 mt-auto">
          <Button
            asChild
            className="brutal-button bg-white hover:bg-brutal-light text-black px-6"
          >
            <Link href={githubUrl} target="_blank">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
          {liveUrl && (
            <Button
              asChild
              className="brutal-button bg-brutal-coral hover:bg-brutal-coral/90 text-white px-6"
            >
              <Link href={liveUrl} target="_blank">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
        </div>
      </Card>
    </div>
  )
}
