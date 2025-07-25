"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { sora } from "@/lib/font";
import Link from "next/link";
import { HeroCard } from "@/lib/data";

import { toast } from "sonner";

const Hero = () => {
  return (
    <section
      id="home"
      className=" relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src="/Hero_Video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="max-w-7xl mt-24 mx-auto px-4 sm:px-8 lg:px-8 py-12 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className={`text-4xl sm:text-4xl ${sora.className} lg:text-5xl font-bold text-white leading-tight`}
          >
            Advanced <span className="text-[#32B44A]">Earthing</span> Solutions
            for
            <br />
            <span className="text-[#FECE09]">Safe</span> Electrical Systems
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-md sm:text-lg font-light text-white/60 leading-relaxed max-w-3xl mx-auto mt-6"
          >
            PRAVIJ manufactures premium earthing electrodes and grounding
            technologies that ensure electrical safety, system reliability and
            protection for industrial and commercial applications worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mt-10"
          >
            <Link
              href="/products"
              className="bg-[#02841a] cursor-pointer text-white px-10 py-5 rounded-lg font-semibold hover:bg-[#2a9d3f] transition-all duration-200 flex items-center justify-center group shadow-xl text-lg"
            >
              Explore Products
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>

            <button
              onClick={() =>
                toast("Catalog downloading", {
                  style: {
                    background: "black",
                    color: "#fff",
                    border: "2px solid #32B44A",
                  },
                })
              }
              className="border-2 cursor-pointer border-gray-400 text-gray-200 px-10 py-5 rounded-lg font-semibold hover:border-[#32B44A] hover:text-[#32B44A] transition-all duration-200 bg-black/20 text-lg"
            >
              Download Catalog
            </button>
          </motion.div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="grid grid-cols-1  sm:grid-cols-3 gap-y-8 gap-x-1 pt-12 max-w-3xl mx-auto"
        >
          {HeroCard.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.2, duration: 0.8 }}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div
                className={`w-16 h-16 bg-black/60 border-2 ${item.border} rounded-lg flex items-center justify-center shadow-lg`}
              >
                {item.icon}
              </div>
              <div>
                <p className="font-semibold text-white text-lg">{item.title}</p>
                <p className="text-gray-300">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
