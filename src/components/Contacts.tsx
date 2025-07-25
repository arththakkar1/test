"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MessageSquare, Send } from "lucide-react";
import { handleSubmitEmail } from "@/lib/Email";
import { toast } from "sonner";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await handleSubmitEmail(e);

    if (response.success) {
      toast("Catalog downloaded.", {
        style: {
          background: "black",
          color: "#fff",
          border: "2px solid #32B44A",
        },
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });
    } else {
      alert("Failed to send email.");
      console.error(response.error);
    }
  }

  // Scroll animation
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]); // Stronger fade

  const smoothOpacity = useSpring(opacity, { damping: 20, stiffness: 120 });

  return (
    <section className="py-1 min-h-full text-white px-4">
      <motion.div
        ref={ref}
        style={{ opacity: smoothOpacity }}
        className="max-w-2xl mx-auto bg-black/80 p-8 rounded-xl border-2 border-[#00a727] shadow-lg"
      >
        <div className="flex items-center mb-6">
          <MessageSquare className="w-8 h-8 text-[#32B44A] mr-3" />
          <h2 className="text-3xl font-bold text-white">Send us a Message</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1 */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <label htmlFor="name" className="block font-semibold mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full p-3 rounded-lg bg-white/90 text-black outline-none border border-gray-300 focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="block font-semibold mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full p-3 rounded-lg bg-white/90 text-black outline-none border border-gray-300 focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <label htmlFor="company" className="block font-semibold mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name"
                className="w-full p-3 rounded-lg bg-white/90 text-black outline-none border border-gray-300 focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="phone" className="block font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full p-3 rounded-lg bg-white/90 text-black outline-none border border-gray-300 focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block font-semibold mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              className="w-full p-3 rounded-lg bg-white/90 text-black outline-none border border-gray-300 focus:ring-2 focus:ring-green-500 resize-y"
            ></textarea>
          </div>

          {/* Button */}
          <motion.button
            type="submit"
            className="w-full bg-[#00a727] cursor-pointer text-black font-semibold py-4 rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-green-500/30"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
            <Send className="w-5 h-5" />
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contacts;
