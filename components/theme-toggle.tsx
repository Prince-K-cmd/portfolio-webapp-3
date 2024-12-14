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
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";

// //import them from data
// import { themeConfig } from "@/data/theme";

// export function ThemeToggle() {
//   const { setTheme, resolvedTheme } = useTheme();

//   // Get current theme configuration
//   const currentThemeConfig =
//     themeConfig[resolvedTheme as keyof typeof themeConfig] ||
//     themeConfig.system;
//   const CurrentIcon = currentThemeConfig.icon;

//   return (
//     <TooltipProvider delayDuration={300}>
//       <Tooltip>
//         <TooltipTrigger asChild>
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="bg-transparent hover:bg-muted dark:hover:bg-muted/50"
//               >
//                 <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-foreground" />
//                 <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-foreground" />
//                 <span className="sr-only">Toggle theme</span>
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               {Object.entries(themeConfig).map(([theme, config]) => (
//                 <DropdownMenuItem
//                   key={theme}
//                   onClick={() => setTheme(theme)}
//                   className={resolvedTheme === theme ? "bg-accent" : ""}
//                 >
//                   <config.icon className={`mr-2 h-4 w-4 ${config.color}`} />
//                   {config.name}
//                 </DropdownMenuItem>
//               ))}
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </TooltipTrigger>
//         <TooltipContent
//           side="bottom"
//           className="
//             bg-background
//             border
//             text-foreground
//             shadow-lg
//             flex
//             items-center
//             space-x-2
//             p-3
//           "
//         >
//           <CurrentIcon className={`h-4 w-4 ${currentThemeConfig.color}`} />
//           <div>
//             <p className="font-semibold">{currentThemeConfig.name}</p>
//             <p className="text-xs text-muted-foreground">
//               {currentThemeConfig.description}
//             </p>
//           </div>
//         </TooltipContent>
//       </Tooltip>
//     </TooltipProvider>
//   );
// }

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

"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { themeConfig } from "@/data/theme";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="p-2">
        {Object.entries(themeConfig).map(
          ([key, { icon: Icon, name, description, color }]) => (
            <DropdownMenuItem
              key={key}
              onClick={() => setTheme(key)}
              className="flex items-center space-x-2 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Icon className={`h-4 w-4 animate-fade-in ${color}`} />
              <div>
                <p className="font-semibold">{name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {description}
                </p>
              </div>
            </DropdownMenuItem>
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
