// data/theme.ts
import { Moon, RotateCw, Sun } from "lucide-react";

export const themeConfig = {
  light: {
    icon: Sun,
    name: "Light Mode",
    description: "Bright and clean interface",
    color: "text-yellow-500",
  },
  dark: {
    icon: Moon,
    name: "Dark Mode",
    description: "Easy on the eyes",
    color: "text-indigo-500",
  },
  system: {
    icon: RotateCw,
    name: "System Preference",
    description: "Match device settings",
    color: "text-gray-500",
  },
};
