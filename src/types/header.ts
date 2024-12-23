import { LucideIcon } from "lucide-react";

// MenuItem type for navigation items
export interface MenuItem {
  name: string;
  href: string;
  color: string;
  icon?: LucideIcon;
}

// Logo data type
export interface LogoData {
  startBracket: string;
  text: string;
  endBracket: string;
}

// Resume link type
export interface ResumeLink {
  href: string;
  text: string;
}
