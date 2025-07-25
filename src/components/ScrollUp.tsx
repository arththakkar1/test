"use client";
import { ArrowUp } from "lucide-react";
import React from "react";

function ScrollUp() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex bg-gradient-to-r from-[#11312c] to-[#1a4a42] py-3 items-center justify-center  space-x-3">
        <div
          onClick={scrollToTop}
          className="flex w-fit cursor-pointer justify-center rounded-full p-4 bg-[#1c1c1c] space-x-2"
        >
          <ArrowUp className="text-white" />
        </div>
      </div>
    </div>
  );
}

export default ScrollUp;
