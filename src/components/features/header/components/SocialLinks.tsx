"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, SprayCanIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SOCIAL_LINKS } from "../constants";

interface SocialLinksProps {
  variant?: "desktop" | "mobile";
}

export function SocialLinks({ variant = "desktop" }: SocialLinksProps) {
  const containerClasses = {
    desktop: "flex space-x-2",
    mobile: "flex items-center space-x-4 pt-4 border-t",
  };

  return (
    <div className={containerClasses[variant]}>
      {SOCIAL_LINKS.map((social) => (
        <Tooltip key={social.href}>
          <TooltipTrigger asChild>
            <motion.a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.tooltip}
              initial={{ opacity: 0.8 }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              className="
                p-2
                rounded-full
                hover:bg-background/10
                dark:hover:bg-white/10
                transition-all
                duration-200
              "
            >
              <social.icon
                className="
                  w-5 
                  h-5 
                  text-muted-foreground 
                  hover:text-blue-500
                  transition-colors
                "
              />
            </motion.a>
          </TooltipTrigger>
          <TooltipContent>{social.tooltip}</TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
