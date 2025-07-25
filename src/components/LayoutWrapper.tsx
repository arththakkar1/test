"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        className="min-h-screen flex flex-col bg-gradient-to-r from-[#11312c] to-[#1a4a42] antialiased"
        style={{ position: "relative" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
