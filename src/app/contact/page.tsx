"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  Users,
  MessageSquare,
} from "lucide-react";
import { sora } from "@/lib/font";
import { handleSubmitEmail } from "@/lib/Email";
import { toast } from "sonner";
import Link from "next/link";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    const response = await handleSubmitEmail(e);

    if (response?.success) {
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
      toast(`Failed: ${response?.message}`, {
        style: {
          background: "#ef4444",
          color: "#fff",
          border: "2px solid #7f1d1d",
        },
      });
      console.error(response?.message);
    }
  }

  const contactInfo: Array<{
    icon: React.ElementType;
    title: string;
    details: Array<{ phone?: string; email?: string; href: string } | string>;
    color: string;
  }> = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: [
        "PRAVIJ Manufacturing Unit",
        "Industrial Area, Phase-2",
        "Gujarat, India - 382330",
      ],
      color: "text-[#32B44A]",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        { phone: "+91 98984 04514", href: "tel:+919898404514" },
        { phone: "+91 98984 04574", href: "tel:+919898404574" },
      ],
      color: "text-[#FECE09]",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        { email: "info@pravij.com", href: "mailto:info@pravij.com" },
        { email: "sales@pravij.com", href: "mailto:sales@pravij.com" },
        { email: "support@pravij.com", href: "mailto:support@pravij.com" },
      ],
      color: "text-orange-400",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed",
      ],
      color: "text-blue-400",
    },
  ];

  return (
    <div className="pt-24 bg-gradient-to-r from-[#11312c] to-[#1a4a42] min-h-screen">
      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-r from-[#11312c] to-[#1a4a42]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1
              className={`text-5xl ${sora.className} font-bold text-white mb-6`}
            >
              Contact <span className="text-[#FECE09]">Us</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get in touch with our team for any inquiries, technical support,
              or to discuss your earthing requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="pt-10 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="bg-black/60 border-2 border-gray-700 rounded-xl p-6 text-center hover:border-[#32B44A]/50 transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 ${info.color} bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4`}
                  >
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-300 text-sm">
                        {info.title === "Email Us" &&
                        typeof detail === "object" &&
                        "href" in detail &&
                        detail.email ? (
                          <Link
                            href={detail.href}
                            className="text-gray-300 text-sm break-words"
                          >
                            {detail.email}
                          </Link>
                        ) : info.title === "Call Us" &&
                          typeof detail === "object" &&
                          "href" in detail &&
                          detail.phone ? (
                          <Link
                            href={detail.href}
                            className="text-gray-300 text-sm break-words"
                          >
                            {detail.phone}
                          </Link>
                        ) : typeof detail === "string" ? (
                          detail
                        ) : (
                          detail.phone || detail.email || ""
                        )}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-6 md:py-16 px-4 bg-black/20 mx-2 md:mx-12 rounded-2xl sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-black/60 border-2 border-gray-700 rounded-xl p-4 sm:p-6 md:p-8 w-full box-border"
            >
              <div className="flex items-center mb-6">
                <MessageSquare className="w-8 h-8 text-[#32B44A] mr-3" />
                <h2 className="text-3xl font-bold text-white">
                  Send us a Message
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-semibold mb-2 text-white"
                    >
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
                      className="w-full p-3 rounded-lg bg-white/90 text-black outline-none border-2 border-gray-300 focus:ring-2 focus:ring-[#32B44A]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-semibold mb-2 text-white"
                    >
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
                      className="w-full p-3 rounded-lg bg-white/90 text-black outline-none border-2 border-gray-300 focus:ring-2 focus:ring-[#32B44A]"
                    />
                  </div>
                </div>

                {/* Company and Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block font-semibold mb-2 text-white"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full p-3 rounded-lg bg-white/90 text-black outline-none border-2 border-gray-300 focus:ring-2 focus:ring-[#32B44A]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block font-semibold mb-2 text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full p-3 rounded-lg bg-white/90 text-black outline-none border-2 border-gray-300 focus:ring-2 focus:ring-[#32B44A]"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block font-semibold mb-2 text-white"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please provide details about your inquiry..."
                    className="w-full p-3 rounded-lg bg-white/90 text-black outline-none border border-gray-300 focus:ring-2 focus:ring-[#32B44A] resize-y"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full bg-[#32B44A] text-white font-semibold py-4 rounded-lg hover:bg-[#2a9d3f] transition-all flex items-center justify-center gap-2 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>

            {/* Map + Quick Contact */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 w-full box-border"
            >
              {/* Map Block */}
              <div className="w-full overflow-hidden bg-black/60 border-2 border-gray-700 rounded-xl p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                  <Globe className="w-8 h-8 text-[#FECE09] mb-2 sm:mb-0 sm:mr-3" />
                  <h3 className="text-2xl font-bold text-white">Find Us</h3>
                </div>
                <div className="relative w-full overflow-hidden rounded-xl bg-gray-900 aspect-[16/9] ring-2 ring-white/10 shadow-lg">
                  {/* Optional: Soft white glow on border */}
                  <div
                    className="absolute inset-0 rounded-xl pointer-events-none z-10"
                    style={{
                      boxShadow: "inset 0 0 60px rgba(255,255,255,0.1)",
                    }}
                  ></div>

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235031.9990945257!2d72.39971843758808!3d23.009999964659784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xebdbb06950742ff%3A0x8001891236d650f5!2sPravij%20Earthing%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1753099840957!5m2!1sen!2sin"
                    style={{
                      border: 0,
                      filter: "grayscale(0.1) contrast(1.1)",
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full rounded-xl z-0"
                  ></iframe>
                </div>
              </div>

              {/* Quick Contact Block */}
              <div className="w-full overflow-hidden bg-black/60 border-2 border-gray-700 rounded-xl p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                  <Users className="w-8 h-8 text-orange-400 mb-2 sm:mb-0 sm:mr-3" />
                  <h3 className="text-2xl font-bold text-white">
                    Quick Contact
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-[#FECE09]" />
                    <div>
                      <p className="text-white font-semibold">Sales Team</p>
                      <Link
                        href="tel:+919876543210"
                        className="text-gray-300 text-sm break-words"
                      >
                        +91 98765 43210
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-[#32B44A]" />
                    <div>
                      <p className="text-white font-semibold">
                        Technical Support
                      </p>
                      <Link
                        href="tel:+919876543211"
                        className="text-gray-300 text-sm break-words"
                      >
                        +91 98765 43211
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-orange-400" />
                    <div>
                      <p className="text-white font-semibold">
                        General Inquiries
                      </p>
                      <Link
                        href="mailto:info@pravij.com"
                        className="text-gray-300 text-sm break-words"
                      >
                        info@pravij.com
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2
              className={`text-4xl md:text-5xl ${sora.className} font-bold text-white mb-6`}
            >
              Frequently Asked <span className="text-[#32B44A]">Questions</span>
            </h2>
            <p className="text-md md:text-lg text-white/60 max-w-3xl font-light mx-auto">
              Quick answers to common questions about our products and services.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question:
                  "What is the typical lead time for earthing electrode orders?",
                answer:
                  "Standard products are typically delivered within 7-10 business days. Custom orders may take 2-3 weeks depending on specifications.",
              },
              {
                question: "Do you provide installation services?",
                answer:
                  "Yes, we provide installation services through our certified partner network. We also offer technical guidance and training for self-installation.",
              },
              {
                question: "What certifications do your products have?",
                answer:
                  "All our products are certified to international standards including IEC, IS, and ASTM. We maintain ISO 9001:2015 certification for quality management.",
              },
              {
                question: "Do you offer technical support after purchase?",
                answer:
                  "Yes, we provide comprehensive technical support including installation guidance, troubleshooting, and maintenance recommendations for all our products.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-black/60 border-2 border-gray-700 rounded-xl p-6 hover:border-[#32B44A]/50 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
