"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center">
      <div className="flex flex-col items-center gap-12">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <img
            src="/1-1.png"
            alt="MC Technology Logo"
            className="h-16 w-auto object-contain"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a574] to-transparent"
          />
        </motion.div>

        {/* Elegant loading indicator */}
        <div className="flex items-center gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                opacity: { duration: 1.5, repeat: Infinity, delay: i * 0.2 },
              }}
              className="w-1 h-1 bg-[#d4a574] rounded-full"
            />
          ))}
        </div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-white/30 text-xs tracking-[0.3em] uppercase"
        >
          Loading
        </motion.p>
      </div>
    </div>
  );
}
