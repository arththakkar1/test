"use client";

import React from "react";
import {
  Zap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin as LinkedIn,
  Instagram,
} from "lucide-react";
import Image from "next/image";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import Link from "next/link";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#11312c] text-white border-t border-gray-700/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Side - Social Media Icons */}
          <div className="flex justify-center lg:justify-start">
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com/pravij"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800/70 hover:bg-[#1877F2] rounded-lg flex items-center justify-center transition-all duration-300 border border-gray-600/40 hover:border-[#1877F2] group"
              >
                <Facebook className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
              </Link>
              <Link
                href="https://twitter.com/pravij"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800/70 hover:bg-[#1DA1F2] rounded-lg flex items-center justify-center transition-all duration-300 border border-gray-600/40 hover:border-[#1DA1F2] group"
              >
                <Twitter className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
              </Link>
              <Link
                href="https://linkedin.com/company/pravij"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800/70 hover:bg-[#0A66C2] rounded-lg flex items-center justify-center transition-all duration-300 border border-gray-600/40 hover:border-[#0A66C2] group"
              >
                <LinkedIn className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
              </Link>
              <Link
                href="https://instagram.com/pravij"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800/70 hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] rounded-lg flex items-center justify-center transition-all duration-300 border border-gray-600/40 hover:border-transparent group"
              >
                <Instagram className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
              </Link>
            </div>
          </div>

          {/* Center - Company Logo */}
          <div className="flex justify-center">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-3 group cursor-pointer"
            >
              <Image
                src="/logo.svg"
                alt="Logo"
                width={100}
                height={100}
                className="h-[80px] scale-200 w-[200px]"
              />
            </button>
          </div>

          {/* Right Side - Contact Information */}
          <div className="flex justify-center lg:justify-end">
            <div className="space-y-3 text-right lg:text-left">
              <div className="flex items-center justify-center lg:justify-end space-x-3">
                <Phone className="w-4 h-4 text-[#FECE09] flex-shrink-0" />
                <Link
                  href="tel:+919898404514"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  +91 98984 04514
                </Link>
              </div>
              <div className="flex items-center justify-center lg:justify-end space-x-3">
                <Phone className="w-4 h-4 text-[#FECE09] flex-shrink-0" />
                <Link
                  href="tel:+919898404574"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  +91 98984 04574
                </Link>
              </div>
              <div className="flex items-center justify-center lg:justify-end space-x-3">
                <Mail className="w-4 h-4 text-[#32B44A] flex-shrink-0" />
                <Link
                  href="mailto:info@pravij.com"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  info@pravij.com
                </Link>
              </div>
              <div className="flex items-center justify-center lg:justify-end space-x-3">
                <MapPin className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Gujarat, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Developer Credit and Copyright */}
        <div className=" border-gray-700/40 pt-6">
          <div className="text-center space-y-3">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-400">
              <p>© 2025 PRAVIJ. All rights reserved.</p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="hover:text-[#32B44A] transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="hover:text-[#32B44A] transition-colors duration-200"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="hover:text-[#32B44A] transition-colors duration-200"
                >
                  ISO 9001:2015
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* Arrow Up Floating Button */}
          <Link
            href="https://wa.me/919898404514"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 flex font-bold gap-x-2 right-8 z-[1000%] bg-[#21b93d] hover:bg-[#2a9d3f] text-black p-3 px-3 md:px-5 rounded-full shadow-lg transition-all duration-300 animate-bounce"
            style={{ animationIterationCount: "infinite" }}
          >
            <p className="md:block hidden"> Chat with us</p>
            <IconBrandWhatsapp className="text-lg font-bold" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
