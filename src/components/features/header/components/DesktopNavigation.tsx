"use client";

import Link from "next/link";
import { MENU_ITEMS } from "../constants";

interface DesktopNavigationProps {
  activeSection: string;
}

export function DesktopNavigation({ activeSection }: DesktopNavigationProps) {
  return (
    <nav
      aria-label="Main Navigation"
      className="hidden md:flex items-center justify-center space-x-8"
    >
      {MENU_ITEMS.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          aria-current={
            activeSection === item.href.slice(1) ? "page" : undefined
          }
          className={`
            text-sm
            font-semibold
            transition-colors
            hover:text-blue-400
            relative
            group
            ${
              activeSection === item.href.slice(1)
                ? item.color
                : "text-muted-foreground"
            }
          `}
        >
          {item.name}
          <span
            className={`
              absolute
              -bottom-1
              left-0
              w-full
              h-0.5
              bg-current
              scale-x-0
              group-hover:scale-x-100
              transition-transform
              duration-300
              origin-left
              ${activeSection === item.href.slice(1) ? "scale-x-100" : ""}
            `}
          />
        </Link>
      ))}
    </nav>
  );
}
