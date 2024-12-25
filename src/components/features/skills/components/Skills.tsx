"use client";

import { motion } from "framer-motion";
import { SKILLS } from "../constants";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-section-title"
      className="py-20 bg-gradient-to-b from-background to-blue-900/20"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          id="skills-section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Technical Skills
        </motion.h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          aria-description="A collection of technical skills across various domains"
        >
          {SKILLS.map((skill, index) => (
            <motion.article
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-blue-500/20"
              aria-labelledby={`skill-${skill.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            >
              <div className="flex items-center mb-4">
                {skill.icon && (
                  <skill.icon
                    className="w-6 h-6 text-blue-400 mr-2"
                    aria-hidden="true"
                  />
                )}
                <h3
                  id={`skill-${skill.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-xl font-semibold"
                >
                  {skill.title}
                </h3>
              </div>
              <ul className="space-y-2" role="list">
                {skill.skills.map((item) => (
                  <li key={item} className="flex items-center" role="listitem">
                    <span
                      className="w-2 h-2 bg-cyan-400 rounded-full mr-2"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
