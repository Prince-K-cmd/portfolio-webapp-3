import { motion } from "framer-motion";
import { LANGUAGE_BADGES } from "../constants";

export function HeroSkillBadges() {
  return (
    <div className="mb-4">
      <div className="flex flex-wrap gap-2" aria-label="Professional Skills">
        {LANGUAGE_BADGES.map((badge) => (
          <motion.div
            key={badge.text}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`
              flex items-center space-x-2
              px-3 py-1.5 rounded-full
              ${
                badge.text === "Android Developer"
                  ? "bg-badge-android-background text-badge-android-text"
                  : badge.text === "Frontend Developer"
                  ? "bg-badge-frontend-background text-badge-frontend-text"
                  : "bg-badge-data-background text-badge-data-text"
              }
              transition-all
              group
              cursor-default
            `}
            role="tooltip"
            aria-label={badge.description}
          >
            <badge.icon
              className="w-4 h-4 group-hover:rotate-12 transition-transform"
              aria-hidden="true"
            />
            <span className="text-sm font-medium">{badge.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
