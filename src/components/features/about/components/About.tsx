// src/features/about/components/About.tsx
"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code2, Heart } from "lucide-react";

import { ProfileSection } from "./ProfileSection";
import { technicalSkills } from "@/src/data/skills";
import { EXPERIENCE, EDUCATION, INTERESTS } from "../constants";

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

        <ProfileSection />

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
              {EDUCATION.map((item) => (
                <div
                  key={item.degree}
                  className="border-l-2 border-blue-400 pl-4"
                >
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
              {EXPERIENCE.map((item) => (
                <div
                  key={item.title}
                  className="border-l-2 border-blue-400 pl-4"
                >
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
              {INTERESTS.map((interest) => (
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
  );
}
