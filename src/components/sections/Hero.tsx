"use client";

import { codeSnippets } from "@/src/data/code-snippets";
import { AnimatePresence, motion } from "framer-motion";
import { Code2, Database, Layers, RotateCw, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";
import { CodeBlock } from "../code-block";
import { BubblesBackground } from "../bubbles-background";
import { heroCTAButtons, languageBadges } from "@/src/data/hero";

export function Hero() {
  const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);

  // Responsive check
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-rotate snippets
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSnippetIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const currentSnippet = codeSnippets[currentSnippetIndex];

  // Mobile Code Exploration Modal
  const CodeExplorationModal = () => {
    return (
      <AnimatePresence>
        {isCodeModalOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          >
            <div className="w-[90%] max-w-2xl bg-background/90 rounded-2xl p-6 relative">
              <button
                onClick={() => setIsCodeModalOpen(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              >
                Close
              </button>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="rounded-full bg-blue-500/10 p-3">
                    {currentSnippet.category === "Frontend" ? (
                      <Code2 className="text-blue-500" />
                    ) : currentSnippet.category === "Android" ? (
                      <Smartphone className="text-green-500" />
                    ) : (
                      <Database className="text-purple-500" />
                    )}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">
                      {currentSnippet.title}
                    </h2>
                    <p className="text-muted-foreground">
                      {currentSnippet.category} | {currentSnippet.language}
                    </p>
                  </div>
                </div>

                <CodeBlock
                  code={currentSnippet.code}
                  language={currentSnippet.language}
                />

                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() =>
                      setCurrentSnippetIndex(
                        (prev) => (prev + 1) % codeSnippets.length
                      )
                    }
                    className="flex items-center space-x-2 text-muted-foreground hover:text-foreground"
                  >
                    <RotateCw className="w-4 h-4" />
                    <span>Next Snippet</span>
                  </button>

                  <div className="flex space-x-2">
                    {codeSnippets.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${
                          index === currentSnippetIndex
                            ? "bg-blue-500"
                            : "bg-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  // Conditional Rendering
  const renderHeroContent = () => {
    if (!isMobile) {
      // Desktop View: Full Code Snippet
      return (
        <motion.div
          key={currentSnippetIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
          className="group neon-glow relative"
        >
          <div className="bg-background/80 backdrop-blur-sm rounded-xl border border-blue-500/20 p-6 shadow-lg relative z-10">
            <div className="flex items-center mb-4">
              <span className="mr-2 text-sm font-medium text-muted-foreground">
                {currentSnippet.category} | {currentSnippet.language}
              </span>
              <div className="flex-grow border-t border-dashed border-blue-500/30 mx-4"></div>
              <span className="text-xs text-muted-foreground">
                {currentSnippet.title}
              </span>
            </div>
            <CodeBlock
              code={currentSnippet.code}
              language={currentSnippet.language}
            />
          </div>
        </motion.div>
      );
    } else {
      // Mobile View: Code Exploration Button
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center"
        >
          <button
            onClick={() => setIsCodeModalOpen(true)}
            className="
              flex items-center space-x-4
              bg-background/80 backdrop-blur-sm
              rounded-xl border border-blue-500/20
              p-4 shadow-lg
              hover:bg-blue-500/10
              transition-all duration-300
            "
          >
            <Layers className="w-6 h-6 text-blue-500" />
            <span className="text-lg font-medium">Explore Code Snippets</span>
          </button>
        </motion.div>
      );
    }
  };

  return (
    <section
      id="hero"
      data-section="hero"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <BubblesBackground />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Hero Title Section */}
            <div className="mb-4">
              <h1 id="hero-title" className="text-4xl md:text-6xl font-bold">
                <span className="text-muted-foreground text-2xl block mb-2">
                  Hi, I&apos;m
                </span>
                <span className="gradient-text">Prince Kyeremeh</span>
              </h1>
            </div>
            <p className="text-xl text-muted-foreground mb-8">
              A passionate developer specializing in Android development,
              frontend engineering, and data engineering. I create elegant
              solutions to complex problems.
            </p>

            {/* Professional Skills Badges */}
            <div className="mb-4">
              <div
                className="flex flex-wrap gap-2"
                aria-label="Professional Skills"
              >
                {languageBadges.map((badge) => (
                  <div
                    key={badge.text}
                    className={`
                    flex items-center space-x-2
                    px-3 py-1.5 rounded-full
                    ${
                      badge.text === "Android Developer"
                        ? "bg-badge-android-background text-badge-android-text"
                        : badge.text === "Frontend Developer"
                        ? "bg-badge-frontend-background text-badge-frontend-text"
                        : "bg-badge-data-background text-badge-data-text"
                    }
                    transition-all
                    group
                    hover:scale-105
                    active:scale-95
                    cursor-default
                  `}
                    role="tooltip"
                    aria-label={badge.description}
                  >
                    <badge.icon
                      className="w-4 h-4
                      group-hover:rotate-12
                      transition-transform"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="mt-8">
              <div className="flex flex-wrap gap-4">
                {heroCTAButtons.map((button) => (
                  <a
                    key={button.text}
                    href={button.href}
                    className={`
                                  inline-flex items-center justify-center
                                  px-5 py-2.5
                                  rounded-full
                                  ${button.color}
                                  ${button.textColor}
                                    ${
                                      button.text === "View CV"
                                        ? "gradient-border before:rounded-full"
                                        : ""
                                    }

                                  hover:opacity-90
                                  active:opacity-80
                                  transition-all
                                  shadow-md
                                  group
                                  transform
                                  hover:scale-105
                                  active:scale-95
                                  focus:outline-none
                                  focus:ring-2
                                  focus:ring-offset-2
                                  focus:ring-blue-500
                                  text-sm
                                  w-48 sm-36 // Fixed width for both buttons

                                `}
                    target={button.text === "View CV" ? "_blank" : undefined}
                    rel={
                      button.text === "View CV"
                        ? "noopener nor referrer"
                        : undefined
                    }
                    aria-label={button.ariaLabel}
                  >
                    <button.icon
                      className="
                                    w-4 h-4
                                    mr-2
                                    group-hover:rotate-6
                                    group-active:rotate-12
                                    transition-transform
                                  "
                      aria-hidden="true"
                    />
                    <span className="font-medium">{button.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Code Snippet Section */}
          {renderHeroContent()}
        </div>
      </div>

      {/* Mobile Code Exploration Modal */}
      <CodeExplorationModal />
    </section>
  );
}
