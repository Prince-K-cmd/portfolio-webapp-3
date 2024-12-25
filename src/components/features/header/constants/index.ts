import { Code2, Home, User, Briefcase, Send } from "lucide-react";

export const MENU_ITEMS = [
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

export const LOGO_DATA = {
  startBracket: "<",
  text: "KPrince-Coder",
  endBracket: "/>",
};
