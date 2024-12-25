import Link from "next/link";
import { motion } from "framer-motion";
import { HERO_CTA_BUTTONS as heroCTAButtons } from "../constants";

export function HeroCTAButtons() {
  return (
    <div className="mt-8">
      <div className="flex flex-wrap gap-4">
        {heroCTAButtons.map((button) => {
          // Ensure href is always a valid string
          const safeHref = button.href || "#";

          return (
            <motion.div
              key={button.text}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={safeHref}
                className={`
                  inline-flex items-center justify-center
                  px-5 py-2.5
                  rounded-full
                  ${button.color}
                  ${button.textColor}
                  ${
                    button.text === "View CV"
                      ? "gradient-border before:rounded-full"
                      : ""
                  }
                  hover:opacity-90
                  active:opacity-80
                  transition-all
                  shadow-md
                  text-sm
                  w-48
                `}
                target={button.text === "View CV" ? "_blank" : undefined}
                rel={
                  button.text === "View CV" ? "noopener noreferrer" : undefined
                }
                aria-label={button.ariaLabel}
              >
                {button.icon && (
                  <button.icon
                    className="w-4 h-4 mr-2 group-hover:rotate-6 transition-transform"
                    aria-hidden="true"
                  />
                )}
                <span className="font-medium">{button.text}</span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
