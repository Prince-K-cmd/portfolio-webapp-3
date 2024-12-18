"use client";

import { motion } from "framer-motion";
import { Code, Lightbulb, Rocket } from "lucide-react";
import { useState } from "react";

export function NoProjectsPlaceholder() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-[500px] p-8 bg-background/80 backdrop-blur-sm rounded-lg border border-dashed border-blue-500/30"
      aria-live="polite"
      aria-label="No projects available yet"
    >
      <motion.div
        className="flex items-center justify-center mb-6"
        animate={{
          rotate: isHovered ? [0, 10, -10, 0] : 0,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Lightbulb
            className="w-24 h-24 text-blue-400 opacity-50"
            strokeWidth={1.5}
          />
          <Rocket
            className="absolute top-0 right-0 w-12 h-12 text-cyan-400 opacity-70 transform -translate-y-1/4 translate-x-1/4"
            strokeWidth={1.5}
          />
        </div>
      </motion.div>

      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-muted-foreground">
          Projects Coming Soon
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          I&apos;m currently working on exciting projects that will be showcased
          here. Stay tuned for innovative solutions and creative
          implementations!
        </p>

        <div className="flex justify-center space-x-4 mt-6">
          <motion.a
            href="#contact"
            className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Contact me about potential projects"
          >
            Get in Touch
          </motion.a>
          <motion.a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="View GitHub profile"
          >
            GitHub Profile
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
