// // data/hero/index.ts
// import {
//   Smartphone,
//   Code2,
//   Database,
//   MessageCircle,
//   Download,
// } from "lucide-react";
// import { resumeLink } from "../header";

// export const languageBadges = [
//   {
//     text: "Android Developer",
//     color: "bg-blue-500/10 text-blue-400",
//     icon: Smartphone,
//   },
//   {
//     text: "Frontend Developer",
//     color: "bg-cyan-500/10 text-cyan-400",
//     icon: Code2,
//   },
//   {
//     text: "Data Engineer",
//     color: "bg-green-500/10 text-green-400",
//     icon: Database,
//   },
// ];

// export const heroCTAButtons = [
//   {
//     text: "Contact Me",
//     color: "bg-gradient-to-r from-blue-500 to-cyan-500",
//     textColor: "text-white",
//     href: "#contact",
//     icon: MessageCircle,
//   },
//   {
//     text: "View CV",
//     color: "bg-muted/20 border border-muted-foreground/30",
//     textColor: "text-foreground",
//     href: resumeLink.href,
//     icon: Download,
//   },
// ];

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
    color: "bg-blue-500/10 text-blue-400",
    icon: Smartphone,
    description:
      "Crafting innovative mobile experiences with Kotlin and Jetpack Compose",
  },
  {
    text: "Frontend Developer",
    color: "bg-cyan-500/10 text-cyan-400",
    icon: Code2,
    description: "Building responsive and interactive web applications",
  },
  {
    text: "Data Engineer",
    color: "bg-green-500/10 text-green-400",
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
