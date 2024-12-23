"use client";

import { motion } from "framer-motion";
import { FooterBrandSection } from "./FooterBrandSection";
import { FooterQuickLinks } from "./FooterQuickLinks";
import { FooterSocialLinks } from "./FooterSocialLinks";
import { COPYRIGHT, BRAND_INFO } from "../constants";

export function Footer() {
  return (
    <footer
      className="
        relative 
        py-16 
        bg-gradient-to-br 
        from-blue-500/10 
        via-cyan-500/5 
        to-purple-500/10 
        overflow-hidden
      "
      aria-labelledby="footer-title"
    >
      {/* Neon Border Effect */}
      <div
        className="
          absolute 
          inset-0 
          pointer-events-none 
          border-[4px] 
          border-transparent 
          bg-gradient-to-br 
          from-blue-500/30 
          via-cyan-500/20 
          to-purple-500/30 
          animate-border-gradient 
          opacity-50
        "
        style={{
          backgroundClip: "content-box",
          WebkitBackgroundClip: "content-box",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          <FooterBrandSection />
          <FooterQuickLinks />
          <FooterSocialLinks />
        </div>

        {/* Animated Gradient Separator */}
        <div
          className="
            my-12 
            relative 
            h-0.5 
            overflow-hidden
          "
        >
          <div
            className="
              absolute 
              inset-0 
              bg-gradient-to-r 
              from-transparent 
              via-blue-500/50 
              to-transparent 
              animate-border-gradient
            "
          />
        </div>

        {/* Quote and Copyright Section */}
        <div className="text-center space-y-6">
          {/* Large Quote */}
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="
              text-2xl 
              italic
              md:text-3xl 
              font-bold 
              text-muted-foreground 
              max-w-4xl 
              mx-auto 
              relative 
              px-4
              before:absolute 
              before:left-0 
                            before:top-0 
              before:w-1 
              before:h-full 
              before:bg-gradient-to-b 
              before:from-blue-500 
              before:to-transparent
            "
          >
            "{BRAND_INFO.quote}"
          </motion.blockquote>

          {/* Copyright Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2 pt-8"
          >
            <p
              className="
                text-sm 
                text-muted-foreground 
                relative 
                inline-block
                pl-4
                before:absolute 
                before:left-0 
                before:top-1/2 
                before:-translate-y-1/2 
                before:w-2 
                before:h-2 
                before:bg-blue-500 
                before:rounded-full
              "
            >
              {COPYRIGHT}
            </p>
            <br />
            <p
              className="
                text-xs 
                text-muted-foreground 
                relative 
                inline-block
                pl-4
                before:absolute 
                before:left-0 
                before:top-1/2 
                before:-translate-y-1/2 
                before:w-2 
                before:h-2 
                before:bg-cyan-500 
                before:rounded-full
              "
            >
              Crafted with ❤️ using Next.js and Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>

      {/* Subtle Bottom Gradient */}
      <div
        className="
          absolute 
          bottom-0 
          left-0 
          right-0 
          h-1 
          bg-gradient-to-r 
          from-transparent 
          via-cyan-500/30 
          to-transparent 
          opacity-50
        "
      />
    </footer>
  );
}
