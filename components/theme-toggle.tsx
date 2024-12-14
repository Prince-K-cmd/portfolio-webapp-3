"use client";

import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { themeConfig } from "@/data/theme";
import { Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentThemeConfig =
    themeConfig[resolvedTheme as keyof typeof themeConfig] ||
    themeConfig.system;
  const CurrentIcon = currentThemeConfig.icon;

  const themeVariants = {
    initial: {
      rotate: 0,
      scale: 1,
      opacity: 0.7,
    },
    hover: {
      rotate: 360,
      scale: 1.1,
      opacity: 1,
    },
    tap: {
      scale: 0.9,
    },
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="
                outline-none
                focus:outline-none
                focus-visible:ring-0
                focus-visible:ring-transparent
                focus-visible:ring-offset-0
              "
      >
        <motion.div
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="relative"
        >
          <Button
            variant="ghost"
            size="icon"
            className="
                    relative
                    overflow-hidden
                    bg-transparent
                    hover:bg-accent/10
                    group
                    outline-none
                    focus:outline-none
                    focus:ring-0
                  "
          >
            <motion.span
              variants={{
                initial: { opacity: 0, scale: 0.8 },
                hover: { opacity: 0.2, scale: 1.2 },
              }}
              className="
                      absolute
                      inset-0
                      bg-gradient-to-r
                      from-blue-500/20
                      to-cyan-500/20
                      rounded-full
                      blur-lg
                      group-hover:opacity-100
                      transition-opacity
                    "
            />
            <motion.div variants={themeVariants} className="relative z-10">
              <CurrentIcon
                className={`
                        w-5 h-5
                        ${currentThemeConfig.color}
                        transition-all
                        group-hover:rotate-12
                      `}
              />
              <Sparkles
                className="
                        absolute
                        -top-2
                        -right-2
                        w-3 h-3
                        text-blue-400
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                      "
              />
            </motion.div>
          </Button>
        </motion.div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="
                p-2
                bg-background
                border
                rounded-lg
                shadow-lg
                outline-none
                focus:outline-none
                focus-visible:ring-0
              "
      >
        {Object.entries(themeConfig).map(
          ([key, { icon: Icon, name, description, color }]) => (
            <DropdownMenuItem
              key={key}
              onClick={() => setTheme(key)}
              className={`
                    flex
                    items-center
                    space-x-3
                    p-2
                    rounded-md
                    cursor-pointer
                    hover:bg-accent/10
                    outline-none
                    focus:outline-none
                    focus-visible:ring-0
                    ${resolvedTheme === key ? "bg-accent/20" : ""}
                  `}
            >
              <Icon className={`w-5 h-5 ${color}`} />
              <div>
                <p className="font-semibold">{name}</p>
                <p className="text-xs text-muted-foreground">{description}</p>
              </div>
            </DropdownMenuItem>
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

// "use client";

// import * as React from "react";
// import { Moon, Sun } from "lucide-react";
// import { useTheme } from "next-themes";

// import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// export function ThemeToggle() {
//   const { setTheme } = useTheme();

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="outline" size="icon">
//           <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//           <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//           <span className="sr-only">Toggle theme</span>
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent align="end">
//         <DropdownMenuItem onClick={() => setTheme("light")}>
//           Light
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("dark")}>
//           Dark
//         </DropdownMenuItem>
//         <DropdownMenuItem onClick={() => setTheme("system")}>
//           System
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }
