"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight, Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils"; // Assuming this utility function exists
import { Button } from "@/components/ui/button"; // Assuming these UI components exist
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { sora } from "@/lib/font"; // Assuming your font definition exists
import { data } from "@/lib/data";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Drawer } from "@/components/ui/drawer";
import Image from "next/image";
import Link from "next/link";

// Custom Modal Component
type CustomModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const CustomModal = ({ open, onClose, children }: CustomModalProps) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-lg max-w-lg w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

// Define the Product interface
interface Product {
  id?: string;
  name?: string;
  category?: string;
  image?: string;
  description?: string;
  features?: string[];
  specifications?: { [key: string]: string | undefined };
  applications?: string[];
  price?: string;
  protectionRadius?: string | Record<string, any>;
  installationAccessories?: string | Record<string, any>; // Accept string or object, now optional
}

// Product data
const products: Product[] = data;

// Product categories for filtering, including the 'All' option
const categories = [
  { value: "All", label: "All" }, // Changed 'all' to 'All' to match default state
  { value: "Earthing Pit Cover", label: "Earthing Pit Cover" },
  { value: "RCC Chamber", label: "RCC Chamber" },
  {
    value: "Pure Copper Earth Electrode & Rod",
    label: "Pure Copper Earth Electrode & Rod",
  },
  {
    value: "Copper Bonded Solid Earth Rod",
    label: "Copper Bonded Solid Earth Rod",
  },
  { value: "Copper Plate Earthing", label: "Copper Plate Earthing" },
  {
    value: "Copper Bonded Chemical Earth Electrode",
    label: "Copper Bonded Chemical Earth Electrode",
  },
  { value: "GI-Earth Electrode", label: "GI-Earth Electrode" },
  { value: "PV Backfill Compound", label: "PV Backfill Compound   " },
  {
    value: "PV All Types of G.I. Strips",
    label: "PV All Types of G.I. Strips",
  },
  { value: "PV Copper Earthing Strip", label: "PV Copper Earthing Strip" },
  {
    value: "Copper/ Copper Bonded/ Spike lightning Arrester",
    label: "Copper/ Copper Bonded/ Spike lightning Arrester",
  },
  { value: "Lightning arrester", label: "Lightning arrester" },
  {
    value: "Digital Lightning Strike Counter",
    label: "Digital Lightning Strike Counter",
  },
  // Removed redundant/less specific categories like 'grounding', 'lightning', 'chemical', etc.
  // as the existing products use specific categories like 'Protection', 'Systems', 'Electrodes'.
  // If you have products that fit these, you can re-add them and assign to products.
];

const ProductsPage = () => {
  // State for the mobile category dropdown (Popover/Command)
  const [open, setOpen] = useState(false);
  // State to hold the value selected in the mobile dropdown (matches category.value)
  const [value, setValue] = useState("All"); // Initialize to "All"

  // State for the currently selected product category (used for filtering)
  const [selectedCategory, setSelectedCategory] = useState("All"); // Initialize to "All"

  // State for the search term
  const [searchTerm, setSearchTerm] = useState("");

  // State for holding the product selected for detailed view in the modal
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Ref for the button to scroll into view
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Filtered products based on selected category and search term
  const filteredProducts = products.filter((product) => {
    // Check if the product's category matches the selected category
    // "All" category matches all products
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    // Check if the product's name or description includes the search term (case-insensitive)
    const matchesSearch =
      product.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description?.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });
  const itemsPerPage = 8; // or 6/12 depending on your layout
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const scrollRef = useRef(0);

  // Handler for mobile dropdown category selection
  const handleMobileCategorySelect = (currentValue: string) => {
    setValue(currentValue); // Update the internal value of the combobox
    setSelectedCategory(currentValue); // Update the main category filter state
    setOpen(false); // Close the popover
  };

  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    cardsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [currentPage]);

  return (
    <>
      {/* Product Detail Modal */}
      <Dialog
        open={!!selectedProduct}
        onOpenChange={(open) => {
          if (open) {
            scrollRef.current = window.scrollY;
          } else {
            setSelectedProduct(null);
          }
        }}
      >
        <DialogContent className="sm:max-w-4xl max-w-[400px] bg-[#11312c] text-white border-2 border-black/60 rounded-2xl p-0 overflow-hidden max-h-[90vh] flex flex-col">
          {selectedProduct && (
            <>
              {/* Header */}
              <div className="px-6 pt-6 shrink-0">
                <DialogHeader>
                  <DialogTitle className="text-[#FECE09] text-3xl">
                    {selectedProduct.name}
                  </DialogTitle>
                  <DialogDescription className="text-white/70">
                    Description
                  </DialogDescription>
                </DialogHeader>
              </div>

              {/* Scrollable content */}
              <div
                className="overflow-y-auto px-6 py-4 space-y-6 scrollbar-thin scrollbar-thumb-[#32B44A]/70 scrollbar-track-transparent"
                style={{ maxHeight: "calc(90vh - 200px)" }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <Image
                      src={selectedProduct.image ?? "/placeholder.png"}
                      alt={selectedProduct.name ?? "Product image"}
                      width={400}
                      height={256}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <p className="text-gray-300">
                      {selectedProduct.description}
                    </p>
                    {selectedProduct.name ===
                      "Digital Lightning Strike Counter" &&
                      selectedProduct.installationAccessories && (
                        <div className="px-2">
                          <div className="flex flex-col border-2 border-white/40 rounded-xl px-4 sm:px-6 py-4 sm:py-6 justify-between mt-4">
                            <h1 className="font-semibold text-xl sm:text-2xl text-white/80 mb-3">
                              ESE Installation Accessories
                            </h1>

                            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base text-white/70">
                              {typeof selectedProduct.installationAccessories ===
                              "string" ? (
                                <li>
                                  {selectedProduct.installationAccessories}
                                </li>
                              ) : (
                                Object.entries(
                                  selectedProduct.installationAccessories
                                ).map(([key, value]) => (
                                  <li key={key}>
                                    <span className="font-medium">{key}</span>:{" "}
                                    {value}
                                  </li>
                                ))
                              )}
                            </ul>
                          </div>
                        </div>
                      )}

                    <div>
                      {selectedProduct.name === "Lightning Arrester" &&
                        selectedProduct.protectionRadius && (
                          <>
                            <h1 className="font-semibold text-2xl text-white/80 my-4 text-center">
                              Protection Level
                            </h1>
                            <div className=" border border-green-600 overflow-x-auto [&_*]:border-green-600">
                              <table
                                border={0}
                                className="w-full  text-sm border-1"
                              >
                                <thead className="">
                                  <tr>
                                    <th className="border px-3 py-2 text-left">
                                      Distance
                                    </th>
                                    <th className="border px-3 py-2 text-left">
                                      Level 1
                                    </th>
                                    <th className="border px-3 py-2 text-left">
                                      Level 2
                                    </th>
                                    <th className="border px-3 py-2 text-left">
                                      Level 3
                                    </th>
                                    <th className="border px-3 py-2 text-left">
                                      Level 4
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {Object.entries(
                                    selectedProduct.protectionRadius
                                  ).map(([distance, levels]) => (
                                    <tr key={distance} className="border-t">
                                      <td className="border px-3 py-2">
                                        {distance}
                                      </td>
                                      <td className="border px-3 py-2">
                                        {levels.level1}
                                      </td>
                                      <td className="border px-3 py-2">
                                        {levels.level2}
                                      </td>
                                      <td className="border px-3 py-2">
                                        {levels.level3}
                                      </td>
                                      <td className="border px-3 py-2">
                                        {levels.level4}
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </>
                        )}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Features
                      </h3>
                      <ul className="space-y-2">
                        {selectedProduct.features?.map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-gray-300 flex items-center"
                          >
                            <div className="w-2 h-2 bg-[#32B44A] rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Specifications
                      </h3>
                      <div className="space-y-2">
                        {Object.entries(
                          selectedProduct.specifications || {}
                        ).map(([key, value]) => (
                          <div
                            key={key}
                            className="flex justify-between border-b border-gray-700 pb-1"
                          >
                            {selectedProduct.name === "RCC Chamber" ? (
                              <span className="text-gray-400  w-[100%]">
                                {key}
                              </span>
                            ) : (
                              <span className="text-gray-400  w-[50%]">
                                {key}
                              </span>
                            )}

                            <span className="text-white">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Applications
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.applications?.map((app, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-800 text-gray-300 px-3 py-1 rounded-lg text-sm"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-white/10 px-6 py-4 flex justify-end gap-2 bg-[#11312c] shrink-0">
                <DialogClose
                  onClick={() => {
                    setSelectedProduct(null);
                  }}
                  asChild
                >
                  <Button
                    className="text-black cursor-pointer"
                    variant="outline"
                  >
                    Close
                  </Button>
                </DialogClose>
                <Link href={"/contact"}>
                  <Button
                    className="text-black bg-green-600 border-none hover:bg-green-700 cursor-pointer"
                    variant="outline"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
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
                Our <span className="text-[#FECE09]">Product</span> Range
              </h1>
              <p className="text-lg md:text-xl font-medium text-white/60 max-w-3xl mx-auto">
                Comprehensive earthing and grounding solutions engineered for
                safety, reliability, and performance across diverse
                applications.
              </p>
            </motion.div>
          </div>
        </section>
        {/* Search and Filter Section */}
        <section className="py-8 mx-4 md:mx-24 rounded-2xl bg-black/20">
          <div className="max-w-full flex flex-col mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 items-center justify-between">
              {/* Search Input */}
              <div className="relative w-full flex-1 max-w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border-2 border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#32B44A]"
                />
              </div>

              {/* Category Filter Buttons (Desktop) */}
              <div className="hidden md:flex justify-center flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`px-4 py-2 rounded-lg cursor-pointer font-medium transition-all duration-200 ${
                      selectedCategory === category.value
                        ? "bg-[#32B44A] text-white"
                        : "bg-white/10 text-gray-300 hover:bg-white/20"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>

              {/* Category Filter Dropdown (Mobile) */}
              <div className="md:hidden w-full">
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-full justify-between border-2 border-gray-700 bg-neutral-900 text-white hover:bg-neutral-800"
                    >
                      {selectedCategory
                        ? categories.find(
                            (cat) => cat.value === selectedCategory
                          )?.label
                        : "Select category"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0 border-2 border-gray-700 bg-neutral-900 text-white">
                    <Command className="bg-neutral-900 text-white">
                      <CommandInput
                        placeholder="Search categories..."
                        className="placeholder:text-gray-400 bg-neutral-900 text-white"
                      />
                      <CommandList>
                        <CommandEmpty>No category found.</CommandEmpty>
                        <CommandGroup>
                          {categories.map((cat) => (
                            <CommandItem
                              key={cat.value}
                              value={cat.value}
                              className={cn(
                                "cursor-pointer text-white hover:bg-neutral-800",
                                selectedCategory === cat.value
                                  ? "bg-neutral-800 text-white" // Keep selected item styled as selected
                                  : ""
                              )}
                              onSelect={() =>
                                handleMobileCategorySelect(cat.value)
                              }
                            >
                              {cat.label}
                              <Check
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  selectedCategory === cat.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </section>
        {/* Products Grid */}
        <section className="py-16" ref={cardsRef}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-4 gap-8">
              {/* Display message if no products found after filtering */}
              {filteredProducts.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="col-span-full text-center text-gray-400 text-lg py-12"
                >
                  No products found matching your criteria.
                </motion.div>
              )}

              {paginatedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-black/60  border-gray-700 rounded-xl overflow-hidden hover:border-[#32B44A]/100 border-2 transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={product.image ?? "/placeholder.png"}
                      width={400}
                      height={256}
                      alt={product.name ?? "Product image"}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#32B44A] md:text-xl text-sm font-medium">
                        {product.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#FECE09] mb-3">
                      {product.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {product.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features?.slice(0, 2).map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-[#32B44A]/20 text-[#32B44A] px-2 py-1 rounded-md text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="w-full bg-[#00e32a]/70 text-white cursor-pointer py-3 rounded-lg font-semibold hover:bg-[#2a9d3f] transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
              {totalPages > 1 && (
                <div className="col-span-full flex justify-center mt-8 space-x-2">
                  <Button
                    variant="outline"
                    className={`bg-black  hover:bg-black/80 hover:text-white/60 text-white border-none cursor-pointer`}
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>

                  {[...Array(totalPages)].map((_, index) => (
                    <Button
                      key={index}
                      variant={
                        currentPage === index + 1 ? "default" : "outline"
                      }
                      className={
                        currentPage === index + 1
                          ? "bg-black/80 text-white  cursor-pointer border-2 border-green-600/90 hover:bg-black/60 hover:text-white/60"
                          : "bg-black text-white cursor-pointer hover:bg-black/80 border-none hover:text-white/60"
                      }
                      onClick={() => setCurrentPage(index + 1)}
                    >
                      {index + 1}
                    </Button>
                  ))}

                  <Button
                    variant="outline"
                    className={`bg-black  text-white hover:bg-black/80 hover:text-white/60 border-none cursor-pointer`}
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductsPage;
