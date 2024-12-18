"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Project } from "../types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <motion.div
      role="listitem"
      aria-labelledby={`project-title-${project.title
        .toLowerCase()
        .replace(/\s+/g, "-")}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-background/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
      onMouseEnter={() => setHoveredProject(project.title)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      <div className="relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={400}
          className={`
            w-full h-48 object-cover 
            transition-transform duration-300 
            ${
              hoveredProject === project.title
                ? "scale-110 brightness-50"
                : "scale-100 brightness-100"
            }
          `}
        />
        {/* Gradient Overlay */}
        <div
          className={`
            absolute inset-0 
            bg-gradient-to-t 
            from-black/70
            via-black/40
            to-transparent 
            transition-opacity 
            duration-300 
            ${hoveredProject === project.title ? "opacity-100" : "opacity-0"}
          `}
        />
        <div
          className={`
            absolute inset-0 
            transition-opacity 
            duration-300 
            flex items-center justify-center gap-4
            ${hoveredProject === project.title ? "opacity-100" : "opacity-0"}
          `}
        >
          <TooltipProvider delayDuration={300}>
            {/* Demo Button */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="
                    bg-white/40 dark:bg-neutral-800/60
                    hover:bg-white/60 dark:hover:bg-neutral-700/80
                    backdrop-blur-sm 
                    transition-all duration-300 
                    transform hover:scale-110
                    shadow-md
                  "
                  asChild
                >
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                    aria-label={`View ${project.title} demo`}
                  >
                    <Eye
                      className="
                        h-5 w-5 
                        text-neutral-800 dark:text-white
                        group-hover:text-blue-600 dark:group-hover:text-blue-300
                      "
                    />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>View Demo</p>
              </TooltipContent>
            </Tooltip>

            {/* GitHub Button */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="
                    bg-white/40 dark:bg-neutral-800/60
                    hover:bg-white/60 dark:hover:bg-neutral-700/80
                    backdrop-blur-sm 
                    transition-all duration-300 
                    transform hover:scale-110
                    shadow-md
                  "
                  asChild
                >
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                    aria-label={`View ${project.title} GitHub repository`}
                  >
                    <Github
                      className="
                        h-5 w-5 
                        text-neutral-800 dark:text-white
                        group-hover:text-blue-600 dark:group-hover:text-blue-300
                      "
                    />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>GitHub Repository</p>
              </TooltipContent>
            </Tooltip>

            {/* Live Site Button */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="
                    bg-white/40 dark:bg-neutral-800/60
                    hover:bg-white/60 dark:hover:bg-neutral-700/80
                    backdrop-blur-sm 
                    transition-all duration-300 
                    transform hover:scale-110
                    shadow-md
                  "
                  asChild
                >
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                    aria-label={`Visit ${project.title} live site`}
                  >
                    <ExternalLink
                      className="
                        h-5 w-5 
                        text-neutral-800 dark:text-white
                        group-hover:text-blue-600 dark:group-hover:text-blue-300
                      "
                    />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Live Website</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <div className="p-6">
        <h3
          id={`project-title-${project.title
            .toLowerCase()
            .replace(/\s+/g, "-")}`}
          className="text-xl font-semibold mb-2"
        >
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="
                bg-blue-500/10 text-blue-400 
                hover:bg-blue-500/20
                dark:bg-blue-500/20 dark:text-blue-300 
                dark:hover:bg-blue-500/30
              "
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
