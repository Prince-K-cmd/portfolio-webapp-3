"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Code2, Database, Layers, RotateCw, Smartphone } from "lucide-react";

import { CODE_SNIPPETS } from "../constants";
import { CodeBlock } from "./CodeBlock";
import { useDeviceType } from "../hooks/use-device-types";

export function HeroCodeSnippet() {
  const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0);
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
  const { isMobile } = useDeviceType();

  // Auto-rotate snippets
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSnippetIndex((prev) => (prev + 1) % CODE_SNIPPETS.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const currentSnippet = CODE_SNIPPETS[currentSnippetIndex];

  // Category Icon Mapping
  const getCategoryIcon = () => {
    switch (currentSnippet.category) {
      case "Frontend Development":
        return <Code2 className="text-blue-500" />;
      case "Android Development":
        return <Smartphone className="text-green-500" />;
      case "Data Engineering":
        return <Database className="text-purple-500" />;
      default:
        return <Layers className="text-gray-500" />;
    }
  };

  // Mobile Code Exploration Modal
  const CodeExplorationModal = () => {
    if (!isCodeModalOpen) return null;

    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="code-snippet-title"
        >
          <div className="w-[90%] max-w-2xl bg-background/90 rounded-2xl p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setIsCodeModalOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              aria-label="Close code snippet modal"
            >
              Close
            </button>

            {/* Snippet Header */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="rounded-full bg-blue-500/10 p-3">
                {getCategoryIcon()}
              </div>
              <div>
                <h2 id="code-snippet-title" className="text-2xl font-bold">
                  {currentSnippet.title}
                </h2>
                <p className="text-muted-foreground">
                  {currentSnippet.category} | {currentSnippet.language}
                </p>
              </div>
            </div>

            {/* Code Block */}
            <CodeBlock
              code={currentSnippet.code}
              language={currentSnippet.language}
              aria-label={`Code snippet for ${currentSnippet.title}`}
            />

            {/* Navigation and Indicators */}
            <div className="flex justify-between items-center mt-4">
              {/* Next Snippet Button */}
              <button
                onClick={() =>
                  setCurrentSnippetIndex(
                    (prev) => (prev + 1) % CODE_SNIPPETS.length
                  )
                }
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground"
                aria-label="Next code snippet"
              >
                <RotateCw className="w-4 h-4" />
                <span>Next Snippet</span>
              </button>

              {/* Snippet Indicators */}
              <div
                className="flex space-x-2"
                role="tablist"
                aria-label="Code snippet navigation"
              >
                {CODE_SNIPPETS.map((_, index) => (
                  <button
                    key={index}
                    role="tab"
                    aria-selected={index === currentSnippetIndex}
                    className={`
                      w-2 h-2 rounded-full 
                      ${
                        index === currentSnippetIndex
                          ? "bg-blue-500"
                          : "bg-muted-foreground/30"
                      }
                    `}
                    onClick={() => setCurrentSnippetIndex(index)}
                    aria-label={`Go to snippet ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  };

  // Conditional Rendering for Code Snippets
  const renderHeroCodeSection = () => {
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
          aria-label="Code snippet showcase"
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
            aria-label="Explore code snippets"
          >
            <Layers className="w-6 h-6 text-blue-500" />
            <span className="text-lg font-medium">Explore Code Snippets</span>
          </button>
        </motion.div>
      );
    }
  };

  return (
    <>
      {renderHeroCodeSection()}
      <CodeExplorationModal />
    </>
  );
}
