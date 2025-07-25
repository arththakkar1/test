"use client";

import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Shield, Zap, CheckCircle, Award } from "lucide-react";
import { sora } from "@/lib/font";
import { stats } from "@/lib/data";

const About = () => {
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const smoothOpacity = useSpring(opacity, { damping: 20, stiffness: 150 });

  return (
    <section
      id="about"
      ref={ref}
      className="md:py-16 mt-10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          style={{ opacity: smoothOpacity }}
          className="text-center relative"
        >
          <div className="space-y-8">
            <motion.div className="relative mb-12">
              <h2
                className={`text-4xl md:text-5xl ${sora.className} font-bold text-white mb-10 relative z-10`}
              >
                Leading <span className="text-[#32B44A]">Earthing</span>{" "}
                Technology Manufacturer
              </h2>
              <p className="text-lg text-white/80 leading-relaxed font-light mb-6 max-w-4xl mx-auto relative z-10">
                PRAVIJ manufactures advanced earthing electrodes and grounding
                solutions, trusted by industries and contractors worldwide for
                safety, reliability, and innovation.
              </p>
            </motion.div>

            <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto relative z-10">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    style={{
                      y: useSpring(
                        useTransform(scrollYProgress, [0, 1], [40, 0]),
                        {
                          damping: 20,
                          stiffness: 120,
                        }
                      ),
                      opacity: useSpring(
                        useTransform(scrollYProgress, [0, 0.3], [0, 1]),
                        {
                          damping: 20,
                          stiffness: 150,
                        }
                      ),
                    }}
                    className="text-center md:flex flex-col justify-between p-6 bg-gray-900/70 rounded-lg border-2 border-gray-700/40 hover:border-[#32B44A]/50 transition-all duration-300"
                  >
                    <div>
                      <div className="w-12 h-12 bg-[#32B44A] rounded-lg flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">
                        {stat.value}
                      </div>
                    </div>

                    <div className="text-gray-400 ">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
