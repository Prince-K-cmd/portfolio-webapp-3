"use client"

import { motion } from "framer-motion"
import { Code, Server, Smartphone, Cloud, Database, Shield } from 'lucide-react'

const skills = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: ["React/Next.js", "TypeScript", "Tailwind CSS", "Redux/Context"],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Express", "PostgreSQL", "REST APIs"],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: ["Kotlin", "Jetpack Compose", "Android SDK", "Material Design"],
  },
  {
    title: "Cloud Services",
    icon: Cloud,
    skills: ["AWS", "Google Cloud", "Docker", "Kubernetes"],
  },
  {
    title: "Database Management",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Database Design"],
  },
  {
    title: "Security",
    icon: Shield,
    skills: ["OAuth 2.0", "JWT", "HTTPS", "Data Encryption"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-blue-900/20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 relative"
        >
          Technical Skills
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-blue-500/20"
            >
              <div className="flex items-center mb-4">
                <skill.icon className="w-6 h-6 text-blue-400 mr-2" />
                <h3 className="text-xl font-semibold">{skill.title}</h3>
              </div>
              <ul className="space-y-2">
                {skill.skills.map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

