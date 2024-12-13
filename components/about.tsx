"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase, GraduationCap, Code2, Heart } from "lucide-react";
import { experience, education, interests } from "@/data/about";
import { technicalSkills } from "@/data/skills";

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
          className="bg-background/80 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/20 mb-16 overflow-hidden relative"
        >
          {/* Animated Blob Background */}
          <div
            className="
              absolute 
              -top-1/2 
              -left-1/2 
              w-[200%] 
              h-[200%] 
              bg-gradient-to-r 
              from-blue-500/20 
              via-cyan-500/10 
              to-purple-500/20 
              rounded-full 
              animate-blob 
              opacity-50 
              blur-3xl
            "
          />

          <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
            {/* Innovative Image Container */}
            <div className="relative w-64 h-64 group">
              {/* Morphing Blob Background */}
              <div
                className="
                  absolute 
                  inset-0 
                  bg-gradient-to-r 
                  from-blue-500/30 
                  to-cyan-500/30 
                  rounded-[50%_40%_60%_40%] 
                  animate-morphing-blob 
                  group-hover:rounded-[30%_60%_40%_50%] 
                  transition-all 
                  duration-500 
                  ease-in-out
                "
              />

              {/* Floating Image with Parallax Effect */}
              <motion.div
                initial={{ y: 0 }}
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="
                  absolute 
                  inset-4 
                  rounded-[50%_40%_60%_40%] 
                  overflow-hidden 
                  shadow-2xl 
                  border-4 
                  border-white/20
                "
              >
                <Image
                  src="/images/profile.jpg"
                  alt="Prince Kyeremeh"
                  fill // Use 'fill' instead of 'layout'
                  style={{
                    objectFit: "cover", // Use 'style' prop instead of 'objectFit'
                    // Optional: add additional styling if needed
                  }}
                  className="
                    group-hover:scale-110 
                    transition-transform 
                    duration-500 
                    ease-in-out
                  "
                />
              </motion.div>
            </div>

            {/* Profile Description */}
            <div className="flex-1 text-center md:text-left z-10">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Prince Kyeremeh
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                A passionate software engineer with a strong foundation in
                full-stack development. Specialized in building modern web
                applications using cutting-edge technologies. Committed to
                writing clean, efficient code and staying current with emerging
                technologies. When I&apos;m not coding, you can find me
                exploring new technologies, contributing to open-source
                projects, or sharing knowledge with the developer community.
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
              {experience.map((item) => (
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
  );
}
