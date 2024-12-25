"use client";

import { useState } from "react";
import { Download, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ThemeToggle } from "@/components/theme-toggle";
import { SocialLinks } from "./SocialLinks";

export function DesktopActions() {
  const [isAdminButtonClicked, setIsAdminButtonClicked] = useState(false);

  return (
    <div className="flex items-center space-x-4">
      <SocialLinks variant="desktop" />

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="default"
            className="
              flex 
              items-center 
              space-x-2 
              bg-gradient-to-r 
              from-blue-500 
              to-cyan-500 
              hover:from-blue-600 
              hover:to-cyan-600 
              group
            "
            aria-label="Download Resume"
          >
            <Download className="h-4 w-4 group-hover:rotate-6 transition-transform" />
            <span>Resume</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>Download Resume</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={`
              relative
              group
              admin-button
              ${isAdminButtonClicked ? "clicked" : ""}
            `}
            onClick={() => {
              console.log("Admin authentication");
              setIsAdminButtonClicked(true);
            }}
            onMouseLeave={() => setIsAdminButtonClicked(false)}
            aria-label="Admin Access"
          >
            <Lock
              className="
                h-5
                w-5
                transition-colors
                group-hover:text-blue-400
              "
            />
            <span className="sr-only">Admin</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>Admin Access</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <div className="inline-block">
            <ThemeToggle />
          </div>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Change Theme</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
