import { Code2, Home, User, Briefcase, Send } from "lucide-react";
import { LogoData, MenuItem } from "../types";
import { socialLinks } from "@/src/data/socials";

export const MENU_ITEMS: MenuItem[] = [
  {
    name: "About",
    href: "#about",
    color: "text-green-500",
    icon: User,
  },
  {
    name: "Skills",
    href: "#skills",
    color: "text-blue-500",
    icon: Code2,
  },
  {
    name: "Projects",
    href: "#projects",
    color: "text-cyan-500",
    icon: Briefcase,
  },
  {
    name: "Contact",
    href: "#contact",
    color: "text-indigo-500",
    icon: Send,
  },
];

export const LOGO_DATA: LogoData[] = [
  {
    startBracket: "<",
    text: "KPrince-Coder",
    endBracket: "/>",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: socialLinks.GITHUB.icon,
    href: socialLinks.GITHUB.href,
    tooltip: socialLinks.GITHUB.tooltip,
  },
  {
    icon: socialLinks.LINKEDIN.icon,
    href: socialLinks.LINKEDIN.href,
    tooltip: socialLinks.LINKEDIN.tooltip,
  },
  {
    icon: socialLinks.EMAIL.icon,
    href: socialLinks.EMAIL.href,
    tooltip: socialLinks.EMAIL.tooltip,
  },
];
