import { Github, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import SkillCard from "@/components/skill-card"
import ProjectCard from "@/components/project-card"
import ExperienceCard from "@/components/experience-card"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            <span className="text-primary">R</span>itik <span className="text-primary">S</span>harma
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 dark:from-background dark:to-background/90">
          <div className="container py-24 md:py-32">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary">
                  <span>Full-Stack Developer</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  Hi, I'm <span className="text-primary">Ritik Sharma</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-md">
                  Building responsive, scalable web applications with modern technologies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="#contact"
                    className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                  >
                    Contact Me
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <Link
                    href="#projects"
                    className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    View Projects
                  </Link>
                  <Link
                    href="/assets/Resume/RITIK-SHARMA_Resume.pdf"
                    target="_blank"
                    className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    Resume
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl opacity-30"></div>
                <div className="relative bg-background/50 backdrop-blur-sm border rounded-3xl p-8 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <span>ritiksharma0405@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <span>+919509196189</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>Udaipur, India</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Linkedin className="h-5 w-5 text-primary" />
                      <Link
                        href="https://linkedin.com/in/ritiksharma-code/"
                        target="_blank"
                        className="hover:text-primary transition-colors"
                      >
                        linkedin.com/in/ritiksharma-code/
                      </Link>
                    </div>
                    <div className="flex items-center gap-3">
                      <Github className="h-5 w-5 text-primary" />
                      <Link
                        href="https://github.com/ritiksharma-code"
                        target="_blank"
                        className="hover:text-primary transition-colors"
                      >
                        github.com/ritiksharma-code
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 scroll-mt-20 bg-muted/50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                <span>About Me</span>
              </div>
              <h2 className="text-3xl font-bold">Who I Am</h2>
            </div>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg mb-6">
                I'm a Full-Stack Developer with a strong foundation in the MERN stack and background in web application
                development. Proficient in AWS and ongoing learning in DevOps, with an emphasis on deployment and
                automation pipelines.
              </p>
              <p className="text-lg mb-6">
                Looking to apply technical expertise and expand knowledge in a professional environment. I'm passionate
                about creating efficient, scalable, and user-friendly applications.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-background rounded-lg p-6 shadow-sm border">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">MERN Stack</h3>
                  <p className="text-muted-foreground">
                    Specialized in MongoDB, Express.js, React.js, and Node.js for full-stack development.
                  </p>
                </div>
                <div className="bg-background rounded-lg p-6 shadow-sm border">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M2 22V7c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v15" />
                      <path d="M18 22H4a2 2 0 0 1-2-2v-4h20v4a2 2 0 0 1-2 2Z" />
                      <path d="M12 7v7" />
                      <path d="m9 11 3 3 3-3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Cloud & DevOps</h3>
                  <p className="text-muted-foreground">
                    Experience with AWS and cloud infrastructure, along with DevOps practices and tools.
                  </p>
                </div>
                <div className="bg-background rounded-lg p-6 shadow-sm border">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
                      <path d="M12 13v8" />
                      <path d="M5 13v6a2 2 0 0 0 2 2h8" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
                  <p className="text-muted-foreground">
                    Constantly expanding knowledge in new technologies and best practices in software development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 scroll-mt-20">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                <span>My Skills</span>
              </div>
              <h2 className="text-3xl font-bold">Technical Expertise</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SkillCard
                title="Frontend Development"
                skills={["HTML", "CSS", "Tailwind CSS", "DaisyUI", "MaterialUI", "ReactJS"]}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M7 7h10" />
                    <path d="M7 12h10" />
                    <path d="M7 17h10" />
                  </svg>
                }
              />
              <SkillCard
                title="Backend Development"
                skills={["Node.js", "Express.js", "Zustand", "Socket.IO", "JWT"]}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                  </svg>
                }
              />
              <SkillCard
                title="Database Management"
                skills={["MongoDB", "MySQL", "MariaDB"]}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
                  </svg>
                }
              />
              <SkillCard
                title="DevOps & Cloud"
                skills={["Git", "Docker", "Ansible", "Jinja", "Linux", "AWS", "GCP", "Jenkins", "CI/CD"]}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M13 22H5a2 2 0 0 1-2-2V9.5a2 2 0 0 1 .59-1.42L10.59 1A2 2 0 0 1 12 .41a2 2 0 0 1 1.41.59l7 7A2 2 0 0 1 21 9.5V20a2 2 0 0 1-2 2h-3" />
                    <path d="M13 22V9.5a2 2 0 0 0-2-2h-7" />
                    <path d="m16 19-3-3" />
                    <path d="m19 16-3 3" />
                  </svg>
                }
              />
              <SkillCard
                title="Programming Languages"
                skills={["C++", "Python", "JavaScript"]}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="m18 16 4-4-4-4" />
                    <path d="m6 8-4 4 4 4" />
                    <path d="m14.5 4-5 16" />
                  </svg>
                }
              />
              <SkillCard
                title="Soft Skills"
                skills={["Interactive", "Adaptability", "Teamwork", "Time Management"]}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                }
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 scroll-mt-20 bg-muted/50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                <span>My Work</span>
              </div>
              <h2 className="text-3xl font-bold">Featured Projects</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <ProjectCard
                title="Realtime Chat Application"
                description="A full-stack real-time chat application using the MERN stack with Socket.IO for instant messaging, JWT authentication, and Cloudinary for media storage."
                technologies={[
                  "MongoDB",
                  "Express.js",
                  "React.js",
                  "Node.js",
                  "Socket.IO",
                  "JWT",
                  "Tailwind CSS",
                  "DaisyUI",
                ]}
                githubUrl="https://github.com/ritiksharma-code/Realtime-Chat-App"
                liveUrl="https://www.pingpal.site"
              />
              <div className="bg-background rounded-lg border shadow-sm p-8 flex flex-col justify-center items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="M12 18v-6" />
                    <path d="M8 18v-1" />
                    <path d="M16 18v-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">More Projects Coming Soon</h3>
                <p className="text-muted-foreground mb-6">
                  I'm constantly working on new projects. Check back soon or visit my GitHub profile for updates.
                </p>
                <Link
                  href="https://github.com/ritiksharma-code"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Visit GitHub
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Education Section */}
        <section id="experience" className="py-20 scroll-mt-20">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                <span>My Journey</span>
              </div>
              <h2 className="text-3xl font-bold">Experience & Education</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 text-primary"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                  Work Experience
                </h3>
                <div className="space-y-6">
                  <ExperienceCard
                    title="Student Intern"
                    company="Nasscom Foundation"
                    period="Jan 2023 - Aug 2023"
                    description="Learned about different Machine Learning and Large Language Models. Learned the uses of APIs, and learned about the implementation of APIs."
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 text-primary"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 2 1 3 3 3h6c2 0 3-1 3-3v-5" />
                  </svg>
                  Education
                </h3>
                <div className="space-y-6">
                  <ExperienceCard
                    title="B. Tech in Computer Science"
                    company="Techno India NJR Institute of Technology"
                    period="Sep 2022 – June 2026"
                    description="Currently pursuing a Bachelor's degree in Computer Science."
                    location="Udaipur, Rajasthan"
                  />
                  <ExperienceCard
                    title="Senior Secondary Education"
                    company="St. Anthony's School"
                    period="May 2019 - April 2022"
                    description="Completed senior secondary education with a focus on science and mathematics."
                    location="Udaipur, Rajasthan"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 scroll-mt-20 bg-muted/50">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl font-bold">Contact Me</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="bg-background rounded-lg border shadow-sm p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 bg-background">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="font-bold text-xl mb-2">
                <span className="text-primary">R</span>itik <span className="text-primary">S</span>harma
              </div>
              <p className="text-sm text-muted-foreground">
                Full-Stack Developer specializing in MERN stack development.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-4">
                <Link
                  href="https://github.com/ritiksharma-code"
                  target="_blank"
                  className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://linkedin.com/in/ritiksharma-code/"
                  target="_blank"
                  className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="mailto:ritiksharma0405@gmail.com"
                  className="h-10 w-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Ritik Sharma. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
