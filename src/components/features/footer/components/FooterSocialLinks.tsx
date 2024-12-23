import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "../constants";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function FooterSocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <h3
        className="
          text-xl 
          font-semibold 
          mb-6 
          relative 
          inline-block
          after:absolute 
          after:-bottom-1 
          after:left-0 
          after:w-full 
          after:h-0.5 
          after:bg-gradient-to-r 
          after:from-blue-500 
          after:to-cyan-500
        "
      >
        Let's Connect
      </h3>

      <TooltipProvider delayDuration={300}>
        <div className="flex space-x-4">
          {SOCIAL_LINKS.map((social) => (
            <Tooltip key={social.href}>
              <TooltipTrigger asChild>
                <motion.a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    y: -10,
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }}
                  className={`
                    p-3 
                    rounded-full 
                    transition-all 
                    duration-300 
                    ${social.color}
                    ${social.glow}
                    hover:bg-background/10 
                    dark:hover:bg-white/10 
                    group 
                    relative 
                    overflow-hidden 
                    cursor-pointer
                  `}
                  aria-label={social.tooltip}
                >
                  <social.icon
                    className="
                      w-6 
                      h-6 
                      relative 
                      z-10 
                      transition-transform 
                      group-hover:rotate-12
                    "
                    aria-hidden="true"
                  />
                  <span
                    className="
                      absolute 
                      inset-0 
                      bg-gradient-to-r 
                      from-transparent 
                      via-white/20 
                      to-transparent 
                      opacity-0 
                      group-hover:opacity-100 
                      transition-opacity 
                      duration-300 
                      pointer-events-none 
                      animate-pulse-slow
                    "
                  />
                </motion.a>
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                className="
                  bg-foreground/90 
                  text-background 
                  dark:bg-background/90 
                  dark:text-foreground 
                  rounded-md 
                  px-3 
                  py-1 
                  text-xs
                  shadow-lg
                  border
                  border-blue-500/20
                "
              >
                {social.tooltip}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </motion.div>
  );
}
