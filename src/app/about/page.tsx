"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Factory,
  Globe,
  Award,
  Target,
  Eye,
  Heart,
  Shield,
  Zap,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
} from "lucide-react";
import { sora } from "@/lib/font";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Satisfied Clients",
      color: "text-blue-400",
    },
    {
      icon: Factory,
      value: "25+",
      label: "Years Experience",
      color: "text-green-400",
    },
    {
      icon: Globe,
      value: "15+",
      label: "Countries Served",
      color: "text-purple-400",
    },
    {
      icon: Award,
      value: "50+",
      label: "Certifications",
      color: "text-yellow-400",
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "Safety First",
      description:
        "We prioritize safety in every product we manufacture, ensuring the highest standards of protection for our customers.",
      color: "text-blue-400",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Continuous research and development drive our innovative solutions that meet evolving industry needs.",
      color: "text-yellow-400",
    },
    {
      icon: CheckCircle,
      title: "Quality Excellence",
      description:
        "Our commitment to quality is unwavering, with rigorous testing and certification processes for all products.",
      color: "text-green-400",
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description:
        "We build lasting relationships with our customers by understanding their needs and exceeding expectations.",
      color: "text-red-400",
    },
  ];

  const founders = [
    {
      name: "Rajesh Patel",
      position: "Founder & CEO",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "With over 30 years of experience in electrical engineering and manufacturing, Rajesh founded PRAVIJ with a vision to revolutionize earthing technology. His expertise in power systems and commitment to safety has driven the company's growth and innovation.",
      education: "B.Tech Electrical Engineering, IIT Delhi",
      experience: "Former Chief Engineer at Gujarat Electricity Board",
      linkedin: "#",
      twitter: "#",
    },
    // {
    //   name: "Priya Sharma",
    //   position: "Co-Founder & CTO",
    //   image:
    //     "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
    //   bio: "Priya brings cutting-edge technology and research expertise to PRAVIJ. Her background in materials science and electrical systems has been instrumental in developing our advanced earthing solutions and maintaining our technological edge.",
    //   education: "M.Tech Materials Science, IIT Bombay",
    //   experience: "Former R&D Head at Larsen & Toubro",
    //   linkedin: "#",
    //   twitter: "#",
    // },
  ];

  const timeline = [
    {
      year: "1998",
      event:
        "PRAVIJ founded with a vision to revolutionize earthing technology",
    },
    {
      year: "2002",
      event: "Launched first copper bonded electrode manufacturing facility",
    },
    {
      year: "2008",
      event: "Expanded to international markets, first export to Middle East",
    },
    {
      year: "2012",
      event: "Achieved ISO 9001:2008 certification for quality management",
    },
    {
      year: "2016",
      event: "Introduced chemical earthing systems and lightning protection",
    },
    {
      year: "2020",
      event: "Established state-of-the-art R&D center in Gujarat",
    },
    {
      year: "2023",
      event: "Reached milestone of 500+ satisfied customers globally",
    },
    {
      year: "2024",
      event: "Launched next-generation smart earthing monitoring systems",
    },
  ];

  return (
    <div className="pt-24 bg-gradient-to-r from-[#11312c] to-[#1a4a42] min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-[#11312c] to-[#1a4a42]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1
              className={`text-4xl md:text-5xl ${sora.className} font-bold text-white mb-6`}
            >
              About <span className="text-[#FECE09]">PRAVIJ</span>
            </h1>
            <p className="text-lg md:text-xl font-medium text-white/60 max-w-3xl mx-auto">
              Leading the future of earthing technology with innovation,
              quality, and unwavering commitment to safety since 1998.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <motion.section
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="py-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className={`text-5xl md:text-start text-center md:w-full md:text-5xl ${sora.className} font-bold text-white mb-6`}
              >
                Our <span className="text-[#32B44A]">Story</span>
              </h2>
              <div className="text-white/60 text-lg leading-relaxed mb-6">
                Founded in 1998, PRAVIJ has been at the forefront of earthing
                electrode manufacturing, providing innovative grounding
                solutions that protect lives and equipment. Our journey began
                with a simple mission: to create the safest and most reliable
                earthing systems in the industry.
              </div>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                Over the years, we have evolved from a small manufacturing unit
                to a globally recognized brand, serving customers across 15+
                countries. Our commitment to quality, innovation, and customer
                satisfaction has made us a trusted partner for electrical
                contractors, engineers, and industries worldwide.
              </p>
              <p className="text-white/60 text-lg leading-relaxed">
                Today, PRAVIJ stands as a testament to Indian engineering
                excellence, combining traditional craftsmanship with
                cutting-edge technology to deliver products that meet
                international standards and exceed customer expectations.
              </p>
            </motion.div>

            <div className="w-full px-4 sm:px-6 lg:px-8 overflow-x-hidden">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div
                      key={index}
                      className="w-full bg-black/60 border-2 border-gray-700 rounded-xl p-6 text-center hover:border-[#32B44A]/50 transition-all duration-300"
                    >
                      <div
                        className={`w-12 h-12 ${stat.color} bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-4`}
                      >
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">
                        {stat.value}
                      </div>
                      <div className="text-gray-400">{stat.label}</div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mission, Vision, Values */}
      <section className="py-4 md:py-16 mx-5 md:mx-16 rounded-2xl bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-[#32B44A]/20 to-transparent border-2 border-[#32B44A]/30 rounded-xl p-8"
            >
              <Target className="w-12 h-12 text-[#32B44A] mb-6" />
              <h3
                className={`text-2xl ${sora.className} font-bold text-white mb-4`}
              >
                Our Mission
              </h3>
              <p className="text-white/80 leading-relaxed">
                To provide world-class earthing and grounding solutions that
                ensure electrical safety, system reliability, and protection for
                industrial and commercial applications globally.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-gradient-to-br from-[#FECE09]/20 to-transparent border-2 border-[#FECE09]/30 rounded-xl p-8"
            >
              <Eye className="w-12 h-12 text-[#FECE09] mb-6" />
              <h3
                className={`text-2xl ${sora.className} font-bold text-white mb-4`}
              >
                Our Vision
              </h3>
              <p className="text-white/80 leading-relaxed">
                To be the global leader in earthing technology, setting industry
                standards through continuous innovation, quality excellence, and
                sustainable manufacturing practices.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-gradient-to-br from-orange-500/20 to-transparent border-2 border-orange-500/30 rounded-xl p-8"
            >
              <Heart className="w-12 h-12 text-orange-400 mb-6" />
              <h3
                className={`text-2xl font-bold ${sora.className} text-white mb-4`}
              >
                Our Values
              </h3>
              <p className="text-white/80 leading-relaxed">
                Safety, Quality, Innovation, and Customer Focus form the
                foundation of everything we do, driving us to deliver
                exceptional products and services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Detail */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2
              className={`text-4xl ${sora.className} font-bold text-white mb-6`}
            >
              Our Core <span className="text-[#32B44A]">Values</span>
            </h2>
            <p className="text-xl text-white/80 font-light max-w-3xl mx-auto">
              These values guide every decision we make and every product we
              create.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="bg-black/60 border-2 border-gray-700 rounded-xl p-8 hover:border-[#32B44A]/50 transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 ${value.color} bg-gray-800 rounded-lg flex items-center justify-center mb-6`}
                  >
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-7 md:py-16 mx-5 md:mx-24 rounded-xl md:rounded-3xl bg-black/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2
              className={`text-3xl md:text-4xl ${sora.className} font-bold text-white mb-6`}
            >
              Meet Our <span className="text-[#FECE09]">Founder</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Visionary leaders who built PRAVIJ from the ground up with
              expertise, passion, and commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 mx-1 md:mx-70 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`bg-black/60 w-full border-2 border-gray-700 rounded-xl overflow-hidden hover:border-[#32B44A]/50 transition-all duration-300
                  ${founders.length === 1 ? "col-span-1 lg:col-span-2" : ""}
                `}
              >
                <div className="h-64 w-full overflow-hidden">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    width={400}
                    height={256}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-[#32B44A] font-semibold mb-4">
                    {founder.position}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {founder.bio}
                  </p>

                  <div className="space-y-2 mb-4">
                    <p className="text-gray-400 text-sm">
                      <strong>Education:</strong> {founder.education}
                    </p>
                    <p className="text-gray-400 text-sm">
                      <strong>Experience:</strong> {founder.experience}
                    </p>
                  </div>

                  <div className="flex space-x-3">
                    <Link
                      href={founder.linkedin}
                      className="w-10 h-10 bg-[#0A66C2] rounded-lg flex items-center justify-center hover:bg-[#0A66C2]/80 transition-colors duration-200"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </Link>
                    <Link
                      href={founder.twitter}
                      className="w-10 h-10 bg-[#1DA1F2] rounded-lg flex items-center justify-center hover:bg-[#1DA1F2]/80 transition-colors duration-200"
                    >
                      <Twitter className="w-5 h-5 text-white" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2
              className={`text-3xl md:text-4xl ${sora.className} font-bold text-white mb-6`}
            >
              Our <span className="text-[#32B44A]">Journey</span>
            </h2>
            <p className="text-xl text-white/80 font-light max-w-3xl mx-auto">
              Key milestones that have shaped PRAVIJ into the industry leader it
              is today.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#32B44A]/30"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className={`relative flex flex-col md:flex-row items-center mb-8 ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <div
                  className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-5" : "md:pl-5"
                  }`}
                >
                  <div className="bg-black/60 border-2 border-gray-700 rounded-xl p-6 hover:border-[#32B44A]/50 transition-all duration-300">
                    <div className="text-[#FECE09] font-bold text-xl mb-2">
                      {item.year}
                    </div>
                    <p className="text-gray-300">{item.event}</p>
                  </div>
                </div>

                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#32B44A] rounded-full border-4 border-[#11312c]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="pt-8 pb-5  md:py-16 mx-3 md:mx-16 rounded-3xl bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2
              className={`text-3xl md:text-4xl ${sora.className} font-bold text-white mb-6`}
            >
              Get In <span className="text-[#FECE09]">Touch</span>
            </h2>
            <p className="text-xl text-white/80 font-light max-w-3xl mx-auto">
              Ready to discuss your earthing requirements? Our team is here to
              help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-black/60 border-2 border-gray-700 rounded-xl p-8 text-center hover:border-[#32B44A]/50 transition-all duration-300"
            >
              <MapPin className="w-12 h-12 text-[#32B44A] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">
                PRAVIJ Manufacturing Unit
                <br />
                Industrial Area, Phase-2
                <br />
                Gujarat, India - 382330
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-black/60 border-2 border-gray-700 rounded-xl p-8 text-center hover:border-[#32B44A]/50 transition-all duration-300"
            >
              <Phone className="w-12 h-12 text-[#FECE09] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">
                +91 98765 43210
                <br />
                +91 98765 43211
                <br />
                Mon-Sat: 9:00 AM - 6:00 PM
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-black/60 border-2 border-gray-700 rounded-xl p-8 text-center hover:border-[#32B44A]/50 transition-all duration-300"
            >
              <Mail className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">
                info@pravij.com
                <br />
                sales@pravij.com
                <br />
                support@pravij.com
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
