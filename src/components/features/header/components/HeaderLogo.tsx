import Link from "next/link";
import { motion } from "framer-motion";
import { LOGO_DATA } from "../constants";

export function HeaderLogo() {
  return (
    <Link href="/" className="text-xl font-bold" aria-label="Home">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center space-x-2"
      >
        <span className="text-blue-400" aria-hidden="true">
          {LOGO_DATA.startBracket}
        </span>
        <span
          className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400"
          aria-label="Brand Name"
        >
          {LOGO_DATA.text}
        </span>
        <span className="text-indigo-400" aria-hidden="true">
          {LOGO_DATA.endBracket}
        </span>
      </motion.div>
    </Link>
  );
}
