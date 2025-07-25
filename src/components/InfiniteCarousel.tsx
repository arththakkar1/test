// InfiniteCarousel.tsx
"use client";

import * as React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { sora } from "@/lib/font";
import { Card, Carousel } from "./ui/carousel";
import { data as ProductData } from "@/lib/data";
import Image from "next/image";
import { groupByCategory } from "@/lib/Category";

const grouped = groupByCategory(ProductData);

const DummyContent = ({
  products,
}: {
  category: string;
  products: typeof ProductData;
}) => (
  <div className=" p-6 md:p-5 rounded-3xl mb-6">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-black/60 border-2 border-green-600/70 rounded-2xl p-4 text-white"
        >
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={300}
            className="rounded-lg object-cover mb-3"
          />
          <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
          <p className="text-neutral-300 text-sm mb-2">{product.description}</p>
          <p className="text-neutral-400 text-xs">Price: {product.price}</p>
        </div>
      ))}
    </div>
  </div>
);

const transformedData = Object.entries(grouped).map(([category, products]) => ({
  category: "Category",
  title: category,
  src: products[0]?.image, // first product image
  content: <DummyContent category={category} products={products} />,
}));

export function InfiniteCarousel() {
  // remains unchanged
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const smoothOpacity = useSpring(opacity, { damping: 20, stiffness: 150 });

  const cards = transformedData.map((card, index) => (
    <Card key={card.src + index} card={card} index={index} />
  ));

  return (
    <motion.div
      ref={ref}
      style={{ opacity: smoothOpacity }}
      className="w-full h-full mt-8 mb-5 md:mt-16 md:mb-10"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div style={{ opacity: smoothOpacity }} className="text-center">
          <h2
            className={`text-4xl md:text-5xl font-bold ${sora.className} text-white mb-6`}
          >
            Our Premium <span className="text-[#FECE09]">Product Range</span>
          </h2>
          <p className="text-xl text-white/60 max-w-4xl font-light mx-auto leading-relaxed">
            Comprehensive earthing and grounding solutions engineered for
            safety, reliability, and performance across diverse industries.
          </p>
        </motion.div>

        <motion.div style={{ opacity: smoothOpacity }} className="mt-5">
          <Carousel items={cards} />
        </motion.div>
      </div>
    </motion.div>
  );
}
