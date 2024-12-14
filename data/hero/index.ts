// data/hero/index.ts
import {
  Smartphone,
  Code2,
  Database,
  MessageCircle,
  Download,
} from "lucide-react";
import { resumeLink } from "@/data/header";

export const languageBadges = [
  {
    text: "Android Developer",
    icon: Smartphone,
    description:
      "Crafting innovative mobile experiences with Kotlin and Jetpack Compose",
  },
  {
    text: "Frontend Developer",
    icon: Code2,
    description: "Building responsive and interactive web applications",
  },
  {
    text: "Data Engineer",
    icon: Database,
    description:
      "Designing scalable data solutions and machine learning pipelines",
  },
];

export const heroCTAButtons = [
  {
    text: "Contact Me",
    color: "bg-gradient-to-r from-blue-500 to-cyan-500",
    textColor: "text-white",
    href: "#contact",
    icon: MessageCircle,
    ariaLabel: "Open contact section to get in touch",
  },
  {
    text: "View CV",
    color: "bg-muted/20 border border-muted-foreground/30",
    textColor: "text-foreground",
    href: resumeLink.href,
    icon: Download,
    ariaLabel: "Download professional resume PDF",
  },
];
