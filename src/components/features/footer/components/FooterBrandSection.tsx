import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, Sparkles } from "lucide-react";
import { BRAND_INFO } from "../constants";

export function FooterBrandSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4 relative z-20"
    >
      <Link
        href="#hero"
        className="flex items-center space-x-2 group inline-block"
        aria-label="Go to homepage"
      >
        <Globe
          className="
            w-8 h-8 
            text-blue-500 
            group-hover:rotate-[360deg] 
            transition-transform 
            duration-500
          "
          aria-hidden="true"
        />
        <h2
          className="
            text-2xl 
            font-bold 
            gradient-text 
            group-hover:tracking-wider 
            transition-all 
            duration-300
          "
        >
          {BRAND_INFO.name}
        </h2>
        <Sparkles
          className="
            w-5 h-5 
            text-blue-400 
            opacity-0 
            group-hover:opacity-100 
            transition-opacity 
            duration-300
          "
          aria-hidden="true"
        />
      </Link>

      <p className="text-muted-foreground max-w-md relative pl-6">
        <span
          className="
            absolute 
            left-0 
            top-1/2 
            -translate-y-1/2 
            w-2 
            h-2 
            bg-blue-500 
            rounded-full
          "
        />
        {BRAND_INFO.tagline}
      </p>
    </motion.div>
  );
}
