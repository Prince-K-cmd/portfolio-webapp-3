import Link from "next/link";
import { motion } from "framer-motion";
import { QUICK_LINKS } from "../constants";

export function FooterQuickLinks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full max-w-xs"
    >
      <h3
        className="
          text-xl 
          font-semibold 
          mb-6 
          relative 
          inline-block
          after:absolute 
          after:-bottom-1
                after:left-0 
        after:w-full 
        after:h-0.5 
        after:bg-gradient-to-r 
        after:from-blue-500 
        after:to-cyan-500
      "
      >
        Quick Links
      </h3>

      <nav className="space-y-4">
        {QUICK_LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="
              group 
              flex 
              items-center 
              space-x-2
              transition-all 
              duration-300 
              hover:pl-1
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500/50
            "
            aria-label={link.ariaLabel}
          >
            <motion.div
              whileHover={{
                scale: 1.1,
                rotate: 15,
                transition: { duration: 0.2 },
              }}
              className={`
                p-1
                rounded-full 
                ${link.color}
                transition-all 
                duration-300
              `}
            >
              <link.icon className="w-4 h-4" aria-hidden="true" />
            </motion.div>
            <span
              className="
                text-sm
                group-hover:text-blue-500 
                transition-colors 
                duration-300
              "
            >
              {link.name}
            </span>
          </Link>
        ))}
      </nav>
    </motion.div>
  );
}
