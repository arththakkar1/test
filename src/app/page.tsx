"use client";

import About from "@/components/About";
import Hero from "@/components/Hero";
import React from "react";
import Contact from "@/components/Contacts";
import { InfiniteCarousel } from "@/components/InfiniteCarousel";
import { Toaster } from "@/components/ui/sonner";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#11312c] to-[#1a4a42]">
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="products" className=" md:px-1">
        <InfiniteCarousel />
      </section>
      <section id="contact">
        <Toaster />
        <Contact />
      </section>
    </div>
  );
}

export default Home;
