"use client";

import { useState, useEffect, useCallback } from "react";
import { CODE_SNIPPETS } from "../constants";
import { useAnalytics } from "@/hooks/use-analytics";
import { useAccessibility } from "@/hooks/use-accessibility";

export function useCodeSnippets() {
  const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const analytics = useAnalytics();
  const { announceChange } = useAccessibility();

  // Improved snippet rotation with analytics and accessibility
  const rotateSnippet = useCallback(() => {
    const nextIndex = (currentSnippetIndex + 1) % CODE_SNIPPETS.length;
    setCurrentSnippetIndex(nextIndex);

    // Track snippet change
    analytics.track({
      action: "code_snippet_rotated",
      category: CODE_SNIPPETS[nextIndex].category,
      label: CODE_SNIPPETS[nextIndex].language,
    });

    // Announce change for screen readers
    announceChange(`Displaying ${CODE_SNIPPETS[nextIndex].title} code snippet`);
  }, [currentSnippetIndex, analytics, announceChange]);

  // Auto-rotate snippets with improved accessibility
  useEffect(() => {
    const interval = setInterval(rotateSnippet, 7000);
    return () => clearInterval(interval);
  }, [rotateSnippet]);

  // Responsive check with performance optimization
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    const debouncedCheck = debounce(checkMobile, 200);
    window.addEventListener("resize", debouncedCheck);
    return () => window.removeEventListener("resize", debouncedCheck);
  }, []);

  return {
    currentSnippet: CODE_SNIPPETS[currentSnippetIndex],
    currentSnippetIndex,
    setCurrentSnippetIndex,
    isMobile,
    rotateSnippet,
  };
}

// Utility debounce function
function debounce(func: Function, wait: number) {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
