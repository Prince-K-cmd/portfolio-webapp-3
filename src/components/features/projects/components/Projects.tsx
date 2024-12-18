"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { NoProjectsPlaceholder } from "./NoProjectsPlaceholder";
import { PROJECT_CATEGORIES, DEFAULT_PROJECTS } from "../constants";
import { Project } from "../types";
import { Button } from "@/components/ui/button";

export function Projects() {
  const [filter, setFilter] = useState("All");
  const [projects] = useState<Project[]>(DEFAULT_PROJECTS);

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section
      id="projects"
      aria-labelledby="projects-section-title"
      className="py-24"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          id="projects-section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Featured Projects
        </motion.h2>

        {projects.length === 0 ? (
          <NoProjectsPlaceholder />
        ) : (
          <>
            <div
              className="flex justify-center space-x-4 mb-12"
              role="group"
              aria-label="Project category filters"
            >
              {PROJECT_CATEGORIES.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  className={
                    filter === category
                      ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                      : "border-blue-400 text-blue-400 hover:bg-blue-400/10"
                  }
                  onClick={() => setFilter(category)}
                  aria-pressed={filter === category}
                >
                  {category}
                </Button>
              ))}
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              role="list"
              aria-label="List of projects"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
