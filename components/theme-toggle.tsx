"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

//import them from data
import { themeConfig } from "@/data/theme";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  // Get current theme configuration
  const currentThemeConfig =
    themeConfig[resolvedTheme as keyof typeof themeConfig] ||
    themeConfig.system;
  const CurrentIcon = currentThemeConfig.icon;

  return (
    <TooltipProvider delayDuration={300}>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="bg-transparent hover:bg-muted dark:hover:bg-muted/50"
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-foreground" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-foreground" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {Object.entries(themeConfig).map(([theme, config]) => (
                <DropdownMenuItem
                  key={theme}
                  onClick={() => setTheme(theme)}
                  className={resolvedTheme === theme ? "bg-accent" : ""}
                >
                  <config.icon className={`mr-2 h-4 w-4 ${config.color}`} />
                  {config.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </TooltipTrigger>
        <TooltipContent
          side="bottom"
          className="
            bg-background 
            border 
            text-foreground 
            shadow-lg 
            flex 
            items-center 
            space-x-2 
            p-3
          "
        >
          <CurrentIcon className={`h-4 w-4 ${currentThemeConfig.color}`} />
          <div>
            <p className="font-semibold">{currentThemeConfig.name}</p>
            <p className="text-xs text-muted-foreground">
              {currentThemeConfig.description}
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
