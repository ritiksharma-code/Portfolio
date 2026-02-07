"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export default function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <div className="relative group">
      {/* Background offset layer */}
      <div className="absolute inset-0 bg-brutal-lime rounded-brutal translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-brutal" />
      
      {/* Main form card */}
      <Card className="relative bg-white border-5 border-black rounded-brutal shadow-brutal-lg p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-bold uppercase tracking-wide text-brutal-blue">
                Name *
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="brutal-input h-11"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-bold uppercase tracking-wide text-brutal-blue">
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="brutal-input h-11"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-sm font-bold uppercase tracking-wide text-brutal-blue">
              Subject *
            </Label>
            <Input
              id="subject"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="brutal-input h-11"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-bold uppercase tracking-wide text-brutal-blue">
              Message *
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              className="brutal-input resize-none"
            />
          </div>
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-14 text-lg bg-brutal-coral hover:bg-brutal-coral/90 text-white brutal-button shadow-brutal-md hover:shadow-brutal-lg"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Card>
    </div>
  )
}
