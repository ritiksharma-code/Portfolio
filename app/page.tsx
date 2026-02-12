import { Github, Linkedin, Mail, Phone, MapPin, ArrowRight, FileTextIcon, ExternalLinkIcon } from "lucide-react"
import Link from "next/link"
import SkillCard from "@/components/skill-card"
import ProjectCard from "@/components/project-card"
import ExperienceCard from "@/components/experience-card"
import ContactForm from "@/components/contact-form"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-brutal-light">
      {/* Navigation */}
      <header className="fixed top-0 z-40 w-full border-b-6 border-black bg-white">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="font-heading font-black text-3xl group">
            <span className="bg-brutal-blue text-white px-2 py-1 inline-block -rotate-1 group-hover:rotate-0 transition-brutal">R</span>
            <span className="mx-0.5 text-black">itik</span>
            <span className="bg-brutal-coral text-white px-2 py-1 inline-block rotate-1 group-hover:rotate-0 transition-brutal">S</span>
            <span className="text-black">harma</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#about" className="text-base font-bold text-black hover:text-brutal-blue transition-brutal relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-brutal-lime group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="#skills" className="text-base font-bold text-black hover:text-brutal-blue transition-brutal relative group">
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-brutal-lime group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="#projects" className="text-base font-bold text-black hover:text-brutal-blue transition-brutal relative group">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-brutal-lime group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="#experience" className="text-base font-bold text-black hover:text-brutal-blue transition-brutal relative group">
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-brutal-lime group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="#contact" className="text-base font-bold text-black hover:text-brutal-blue transition-brutal relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-brutal-lime group-hover:w-full transition-all duration-300" />
            </Link>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white py-24 md:py-32">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center border-4 border-black bg-brutal-blue px-4 py-2 text-base font-bold text-white rounded-sm shadow-brutal-sm">
                  Full-Stack Developer
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-heading leading-none text-black">
                  Hi, I'm{" "}
                  <span className="inline-block bg-brutal-lime px-3 py-2 -rotate-2">
                    Ritik
                  </span>
                  <br />
                  <span className="inline-block bg-brutal-coral text-white px-3 py-2 rotate-1 mt-2">
                    Sharma
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-medium max-w-md text-brutal-dark">
                  Building responsive, scalable web applications with modern technologies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="#contact"
                    className="brutal-button inline-flex h-14 items-center justify-center bg-brutal-coral hover:bg-brutal-coral/90 text-white px-8 text-base font-bold shadow-brutal-md hover:shadow-brutal-lg hover:-translate-y-1 transition-brutal"
                  >
                    Contact Me
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    href="#projects"
                    className="brutal-button inline-flex h-14 items-center justify-center bg-white hover:bg-brutal-light text-black px-8 text-base font-bold shadow-brutal-md hover:shadow-brutal-lg hover:-translate-y-1 transition-brutal"
                  >
                    View Projects
                  </Link>
                  <Link
                    href="/assets/Resume/RITIK-SHARMA_Resume.pdf"
                    target="_blank"
                    className="brutal-button inline-flex h-14 items-center justify-center bg-brutal-lime hover:bg-brutal-lime/90 text-black px-8 text-base font-bold shadow-brutal-md hover:shadow-brutal-lg hover:-translate-y-1 transition-brutal"
                  >
                    <FileTextIcon className="mr-2 h-5 w-5" />
                    Resume
                    <ExternalLinkIcon className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              
              <div className="relative group">
                {/* Background offset layer */}
                <div className="absolute inset-0 bg-brutal-blue rounded-brutal translate-x-4 translate-y-4 group-hover:translate-x-5 group-hover:translate-y-5 transition-brutal" />
                
                {/* Contact card */}
                <div className="relative bg-white border-5 border-black rounded-brutal p-8 shadow-brutal-lg hover:shadow-brutal-xl transition-brutal hover:-translate-x-1 hover:-translate-y-1">
                  <div className="space-y-5">
                    <div className="flex items-center gap-3 group">
                      <div className="w-10 h-10 bg-brutal-coral border-3 border-black rounded-brutal flex items-center justify-center group-hover:rotate-12 transition-brutal">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <Link
                        href="mailto:ritiksharma0405@gmail.com"
                        target="_blank"
                        className="hover:text-brutal-blue transition-brutal font-medium break-all text-brutal-dark"
                      >
                        ritiksharma0405@gmail.com
                      </Link>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <div className="w-10 h-10 bg-brutal-lime border-3 border-black rounded-brutal flex items-center justify-center group-hover:rotate-12 transition-brutal">
                        <Phone className="h-5 w-5 text-black" />
                      </div>
                      <span className="font-medium text-brutal-dark">+919509196189</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <div className="w-10 h-10 bg-brutal-blue border-3 border-black rounded-brutal flex items-center justify-center group-hover:rotate-12 transition-brutal">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <span className="font-medium text-brutal-dark">Udaipur, India</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <div className="w-10 h-10 bg-brutal-coral border-3 border-black rounded-brutal flex items-center justify-center group-hover:rotate-12 transition-brutal">
                        <Linkedin className="h-5 w-5 text-white" />
                      </div>
                      <Link
                        href="https://linkedin.com/in/ritiksharma-code/"
                        target="_blank"
                        className="hover:text-brutal-blue transition-brutal font-medium break-all text-brutal-dark"
                      >
                        linkedin.com/in/ritiksharma-code/
                      </Link>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <div className="w-10 h-10 bg-brutal-lime border-3 border-black rounded-brutal flex items-center justify-center group-hover:rotate-12 transition-brutal">
                        <Github className="h-5 w-5 text-black" />
                      </div>
                      <Link
                        href="https://github.com/ritiksharma-code"
                        target="_blank"
                        className="hover:text-brutal-blue transition-brutal font-medium break-all text-brutal-dark"
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
        <section id="about" className="py-20 scroll-mt-20 bg-brutal-light">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-flex items-center border-4 border-black bg-brutal-lime px-4 py-2 text-base font-bold text-black rounded-sm shadow-brutal-sm mb-6">
                About Me
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-black">
                Who <span className="bg-brutal-coral text-white px-3 py-1 inline-block -rotate-1">I Am</span>
              </h2>
            </div>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg md:text-xl mb-6 font-medium text-brutal-dark">
                I'm a Full-Stack Developer with a strong foundation in the MERN stack and background in web application
                development. Proficient in AWS and ongoing learning in DevOps, with an emphasis on deployment and
                automation pipelines.
              </p>
              <p className="text-lg md:text-xl mb-6 font-medium text-brutal-dark">
                Looking to apply technical expertise and expand knowledge in a professional environment. I'm passionate
                about creating efficient, scalable, and user-friendly applications.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <div className="bg-white border-4 border-black rounded-brutal p-6 shadow-brutal-md hover:shadow-brutal-lg hover:-translate-y-1 transition-brutal">
                  <div className="w-14 h-14 bg-brutal-lime border-3 border-black rounded-brutal flex items-center justify-center mb-4 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="black"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold font-heading mb-3 text-black">MERN Stack</h3>
                  <p className="text-base leading-relaxed text-brutal-dark">
                    Specialized in MongoDB, Express.js, React.js, and Node.js for full-stack development.
                  </p>
                </div>
                <div className="bg-white border-4 border-black rounded-brutal p-6 shadow-brutal-md hover:shadow-brutal-lg hover:-translate-y-1 transition-brutal">
                  <div className="w-14 h-14 bg-brutal-blue border-3 border-black rounded-brutal flex items-center justify-center mb-4 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 22V7c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v15" />
                      <path d="M18 22H4a2 2 0 0 1-2-2v-4h20v4a2 2 0 0 1-2 2Z" />
                      <path d="M12 7v7" />
                      <path d="m9 11 3 3 3-3" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold font-heading mb-3 text-black">Cloud & DevOps</h3>
                  <p className="text-base leading-relaxed text-brutal-dark">
                    Experience with AWS and cloud infrastructure, along with DevOps practices and tools.
                  </p>
                </div>
                <div className="bg-white border-4 border-black rounded-brutal p-6 shadow-brutal-md hover:shadow-brutal-lg hover:-translate-y-1 transition-brutal">
                  <div className="w-14 h-14 bg-brutal-coral border-3 border-black rounded-brutal flex items-center justify-center mb-4 mx-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" />
                      <path d="M12 13v8" />
                      <path d="M5 13v6a2 2 0 0 0 2 2h8" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold font-heading mb-3 text-black">Continuous Learning</h3>
                  <p className="text-base leading-relaxed text-brutal-dark">
                    Constantly expanding knowledge in new technologies and best practices in software development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 scroll-mt-20 bg-white">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-flex items-center border-4 border-black bg-brutal-coral px-4 py-2 text-base font-bold text-white rounded-sm shadow-brutal-sm mb-6">
                My Skills
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-black">
                Technical <span className="bg-brutal-blue text-white px-3 py-1 inline-block rotate-1">Expertise</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SkillCard
                title="Frontend Development"
                skills={["HTML", "CSS", "Tailwind CSS", "DaisyUI", "MaterialUI", "ReactJS"]}
                accent="blue"
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
                accent="lime"
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
                accent="blue"
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
                skills={["Git", "Docker", "Ansible", "Ninja", "Linux", "AWS", "GCP", "Jenkins", "CI/CD"]}
                accent="lime"
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
                accent="blue"
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
                accent="lime"
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
        <section id="projects" className="py-20 scroll-mt-20 bg-brutal-light">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-flex items-center border-4 border-black bg-brutal-blue px-4 py-2 text-base font-bold text-white rounded-sm shadow-brutal-sm mb-6">
                My Work
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-black">
                Featured <span className="bg-brutal-lime text-black px-3 py-1 inline-block -rotate-1">Projects</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
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
                liveUrl="https://www.pingpal.online/"
              />
              <div className="relative group">
                {/* Background offset layer */}
                <div className="absolute inset-0 bg-brutal-lime rounded-brutal translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-brutal" />
                
                {/* Main card */}
                <div className="relative bg-white border-6 border-black rounded-brutal shadow-brutal-lg hover:shadow-brutal-xl transition-brutal hover:-translate-x-1 hover:-translate-y-1 p-8 flex flex-col justify-center items-center text-center min-h-[400px] h-full">
                  <div className="w-16 h-16 bg-brutal-blue border-4 border-black rounded-brutal flex items-center justify-center mb-6 group-hover:rotate-12 transition-brutal">
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
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                      <path d="M12 18v-6" />
                      <path d="M8 18v-1" />
                      <path d="M16 18v-3" />
                    </svg>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-black">More Projects Coming Soon</h3>
                  <p className="text-lg md:text-xl leading-relaxed text-brutal-dark mb-8 max-w-md">
                    I'm constantly working on new projects. Check back soon or visit my GitHub profile for updates.
                  </p>
                  <Button
                    asChild
                    className="brutal-button bg-brutal-dark hover:bg-brutal-dark/90 text-white px-6"
                  >
                    <Link href="https://github.com/ritiksharma-code" target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Visit GitHub
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Education Section */}
        <section id="experience" className="py-20 scroll-mt-20 bg-white">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-flex items-center border-4 border-black bg-brutal-lime px-4 py-2 text-base font-bold text-black rounded-sm shadow-brutal-sm mb-6">
                My Journey
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-black">
                Experience & <span className="bg-brutal-coral text-white px-3 py-1 inline-block -rotate-1">Education</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center text-black">
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
                    accent="blue"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center text-black">
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
                    accent="lime"
                  />
                  <ExperienceCard
                    title="Senior Secondary Education"
                    company="St. Anthony's School"
                    period="May 2019 - April 2022"
                    description="Completed senior secondary education with a focus on science and mathematics."
                    location="Udaipur, Rajasthan"
                    accent="blue"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 scroll-mt-20 bg-brutal-light">
          <div className="container">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-flex items-center border-4 border-black bg-brutal-coral px-4 py-2 text-base font-bold text-white rounded-sm shadow-brutal-sm mb-6">
                Get In Touch
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading text-black">
                Contact <span className="bg-brutal-blue text-white px-3 py-1 inline-block rotate-1">Me</span>
              </h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t-6 border-black py-16 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="font-heading font-black text-3xl mb-3">
                <span className="bg-brutal-blue text-white px-2 py-1 inline-block -rotate-1">R</span>
                <span className="mx-0.5 text-black">itik</span>
                <span className="bg-brutal-coral text-white px-2 py-1 inline-block rotate-1">S</span>
                <span className="text-black">harma</span>
              </div>
              <p className="text-base font-medium text-brutal-dark">
                Full-Stack Developer specializing in MERN stack development.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-6">
                <Link
                  href="https://github.com/ritiksharma-code"
                  target="_blank"
                  className="h-12 w-12 border-4 border-black bg-brutal-dark hover:bg-brutal-lime rounded-brutal flex items-center justify-center hover:rotate-6 transition-brutal shadow-brutal-sm"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 text-white hover:text-black" />
                </Link>
                <Link
                  href="https://linkedin.com/in/ritiksharma-code/"
                  target="_blank"
                  className="h-12 w-12 border-4 border-black bg-brutal-dark hover:bg-brutal-lime rounded-brutal flex items-center justify-center hover:rotate-6 transition-brutal shadow-brutal-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-white hover:text-black" />
                </Link>
                <Link
                  href="mailto:ritiksharma0405@gmail.com"
                  className="h-12 w-12 border-4 border-black bg-brutal-dark hover:bg-brutal-lime rounded-brutal flex items-center justify-center hover:rotate-6 transition-brutal shadow-brutal-sm"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5 text-white hover:text-black" />
                </Link>
              </div>
              <p className="text-base font-medium text-brutal-dark">
                © {new Date().getFullYear()} Ritik Sharma. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
