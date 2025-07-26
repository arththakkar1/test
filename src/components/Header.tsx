"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { sora } from "@/lib/font";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  // Hide/show on scroll
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY.current && currentY > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      lastScrollY.current = currentY;

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setShowHeader(true);
      }, 250);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed top-4 left-4 right-4 z-50"
        >
          <div className="max-w-7xl  mx-auto">
            <div className="bg-black/60 border border-gray-800/60 rounded-2xl px-6 shadow-2xl backdrop-blur-sm">
              <div className="flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2">
                  <Image
                    src="/Logo.svg"
                    alt="Logo"
                    width={100}
                    height={100}
                    className="h-[65px] w-[100px] py-1 md:h-[75px] scale-200 md:w-[200px]"
                  />
                </Link>

                {/* Desktop Nav */}
                <nav
                  className={`hidden md:flex ${sora.className} items-center space-x-8`}
                >
                  <Link
                    href="/"
                    className={`font-medium transition-colors duration-200 ${
                      isActive("/")
                        ? "text-[#FECE09]"
                        : "text-gray-200 hover:text-[#FECE09]"
                    }`}
                  >
                    Home
                  </Link>
                  <Link
                    href="/products"
                    className={`font-medium transition-colors duration-200 ${
                      isActive("/products")
                        ? "text-[#FECE09]"
                        : "text-gray-200 hover:text-[#FECE09]"
                    }`}
                  >
                    Products
                  </Link>
                  <Link
                    href="/about"
                    className={`font-medium transition-colors duration-200 ${
                      isActive("/about")
                        ? "text-[#FECE09]"
                        : "text-gray-200 hover:text-[#FECE09]"
                    }`}
                  >
                    About
                  </Link>
                  <Link
                    href="/contact"
                    className="bg-[#32B44A] text-white px-6 py-2 rounded-xl hover:bg-[#2a9d3f] transition-all duration-200 shadow-lg"
                  >
                    Contact Us
                  </Link>
                </nav>

                {/* Hamburger Button */}
                <button
                  className="md:hidden p-2 rounded-lg bg-gray-800/50"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6 text-white" />
                  ) : (
                    <Menu className="w-6 h-6 text-white" />
                  )}
                </button>
              </div>

              {/* Mobile Nav */}
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                        bounce: 0.2,
                      },
                    }}
                    exit={{
                      opacity: 0,
                      y: -20,
                      transition: { duration: 0.3, ease: "easeInOut" },
                    }}
                    className={`md:hidden ${sora.className} mt-4 pt-4 border-t border-gray-800/60`}
                  >
                    <div className="space-y-2 pb-4">
                      <Link
                        href="/"
                        onClick={() => setIsMenuOpen(false)}
                        className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                          isActive("/")
                            ? "text-[#FECE09] bg-gray-800/30"
                            : "text-gray-200 hover:text-[#FECE09] hover:bg-gray-800/30"
                        }`}
                      >
                        Home
                      </Link>
                      <Link
                        href="/products"
                        onClick={() => setIsMenuOpen(false)}
                        className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                          isActive("/products")
                            ? "text-[#FECE09] bg-gray-800/30"
                            : "text-gray-200 hover:text-[#FECE09] hover:bg-gray-800/30"
                        }`}
                      >
                        Products
                      </Link>
                      <Link
                        href="/about"
                        onClick={() => setIsMenuOpen(false)}
                        className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                          isActive("/about")
                            ? "text-[#FECE09] bg-gray-800/30"
                            : "text-gray-200 hover:text-[#FECE09] hover:bg-gray-800/30"
                        }`}
                      >
                        About
                      </Link>
                      <Link
                        href="/contact"
                        onClick={() => setIsMenuOpen(false)}
                        className="block w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium mt-2 bg-[#32B44A] text-white hover:bg-[#2a9d3f] shadow-lg"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Header;
