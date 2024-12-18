import Image from "next/image";
import { motion } from "framer-motion";
import { ABOUT_METADATA } from "../constants";

export function ProfileSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background/80 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/20 mb-16 overflow-hidden relative"
    >
      {/* Blob Background */}
      <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-blue-500/20 via-cyan-500/10 to-purple-500/20 rounded-full animate-blob opacity-50 blur-3xl" />

      <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Profile Image Container */}
        <div className="relative w-64 h-64 group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-[50%_40%_60%_40%] animate-morphing-blob group-hover:rounded-[30%_60%_40%_50%] transition-all duration-500 ease-in-out" />

          <motion.div
            initial={{ y: 0 }}
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="absolute inset-4 rounded-[50%_40%_60%_40%] overflow-hidden shadow-2xl border-4 border-white/20"
          >
            <Image
              src={ABOUT_METADATA.profileImage}
              alt={`${ABOUT_METADATA.name} Profile`}
              fill
              style={{ objectFit: "cover" }}
              className="group-hover:scale-110 transition-transform duration-500 ease-in-out"
            />
          </motion.div>
        </div>

        {/* Profile Description */}
        <div className="flex-1 text-center md:text-left z-10">
          <h3 className="text-2xl font-bold mb-4 gradient-text">
            {ABOUT_METADATA.name}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {ABOUT_METADATA.longBio}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
