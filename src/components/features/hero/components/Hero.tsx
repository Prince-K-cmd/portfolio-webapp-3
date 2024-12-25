"use client";

import { motion } from "framer-motion";
import { BubblesBackground } from "@/src/components/bubbles-background";
import { HeroTitle } from "./HeroTitle";
import { HeroDescription } from "./HeroDescription";
import { HeroSkillBadges } from "./HeroSkillBadges";
import { HeroCTAButtons } from "./HeroCTAButtons";
import { HeroCodeSnippet } from "./HeroCodeSnippet";
import { useDeviceType } from "../hooks/use-device-types";

export function Hero() {
  const { isMobile } = useDeviceType();

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="min-h-screen flex items-center pt-16 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <BubblesBackground />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <HeroTitle />
            <HeroDescription />
            <HeroSkillBadges />
            <HeroCTAButtons />
          </motion.div>

          {/* Code Snippet Column */}
          <HeroCodeSnippet />
        </div>
      </div>
    </section>
  );
}
