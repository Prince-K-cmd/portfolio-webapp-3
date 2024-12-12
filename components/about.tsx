"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Briefcase, GraduationCap, Code2, Heart } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { experience, education, interests } from '@/data/about'
import { technicalSkills } from '@/data/skills'

//const technicalSkills = [
//  { name: "React/Next.js", proficiency: 90 },
//  { name: "TypeScript", proficiency: 85 },
//  { name: "Node.js", proficiency: 80 },
//  { name: "Python", proficiency: 75 },
//  { name: "AWS", proficiency: 70 },
//]

//const experience = [
//  {
//    title: "Senior Software Engineer",
//    company: "Tech Company",
//    period: "2022 - Present",
//    description: "Leading development of cloud-native applications using React and Node.js.",
//  },
//  {
//    title: "Software Developer",
//    company: "Startup Name",
//    period: "2020 - 2022",
//    description: "Developed and maintained full-stack web applications.",
//  },
//]

//const education = [
//  {
//    degree: "Bachelor of Science in Computer Science",
//    school: "University Name",
//    period: "2018 - 2022",
//  },
//  {
//    degree: "AWS Certified Solutions Architect",
//    school: "Amazon Web Services",
//    period: "2023",
//  },
//]

//const interests = [
//  "Open Source",
//  "AI/ML",
//  "Game Development",
//  "Photography",
//  "Hiking",
//]

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          About Me
        </motion.h2>

        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-background/80 backdrop-blur-sm rounded-lg p-8 border border-blue-500/20 mb-16"
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 blur-lg opacity-50" />
              <Image
                src="/profile.jpg"
                alt="Prince Kyeremeh"
                width={192}
                height={192}
                className="rounded-full relative border-4 border-background object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">Prince Kyeremeh</h3>
              <p className="text-muted-foreground">
                A passionate software engineer with a strong foundation in full-stack development. Specialized
                in building modern web applications using cutting-edge technologies. Committed to writing
                clean, efficient code and staying current with emerging technologies. When I&apos;m not coding,
                you can find me exploring new technologies, contributing to open-source projects, or sharing
                knowledge with the developer community.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Technical Proficiency */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-background/80 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20"
          >
            <div className="flex items-center gap-2 mb-6">
              <Code2 className="w-5 h-5 text-blue-400" />
              <h3 className="text-xl font-semibold">Technical Proficiency</h3>
            </div>
            <div className="space-y-4">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.proficiency}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-background/80 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20"
          >
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-blue-400" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="space-y-4">
              {education.map((item) => (
                <div key={item.degree} className="border-l-2 border-blue-400 pl-4">
                  <h4 className="font-semibold">{item.degree}</h4>
                  <p className="text-muted-foreground">{item.school}</p>
                  <p className="text-sm text-muted-foreground">{item.period}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-background/80 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20"
          >
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-5 h-5 text-blue-400" />
              <h3 className="text-xl font-semibold">Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((item) => (
                <div key={item.title} className="border-l-2 border-blue-400 pl-4">
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-muted-foreground">{item.company}</p>
                  <p className="text-sm text-muted-foreground">{item.period}</p>
                  <p className="mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Interests & Hobbies */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-background/80 backdrop-blur-sm rounded-lg p-6 border border-blue-500/20"
          >
            <div className="flex items-center gap-2 mb-6">
              <Heart className="w-5 h-5 text-blue-400" />
              <h3 className="text-xl font-semibold">Interests & Hobbies</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

