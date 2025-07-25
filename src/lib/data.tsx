import { Shield, Zap, CheckCircle, Award } from "lucide-react";

export type ProductType = {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  features: string[];
  specifications: {
    [key: string]: string | undefined;
    Dimentions?: string;
    Material?: string;
    "Weight in KG"?: string;
  };
  applications: string[];
  price: string;

  // Add this 👇
  protectionRadius?: {
    [radius: string]: {
      level1: number;
      level2: number;
      level3: number;
      level4: number;
    };
  };

  installationAccessories?: {
    [key: string]: string[];
  };
};

export const data: ProductType[] = [
  {
    id: "1",
    name: "PV MICRO - 6''",
    category: "Earthing Pit Cover",
    image: "/Product/earthing_pit_covers.jpeg",
    description:
      "Earthing Pit Cover protects the grounding system and allows safe, easy inspection access.",
    features: [
      "UV Stabilized",
      "Chemical-Resistant Construction",
      "Ergonomic Design for Easy Handling & Storage",
      "Secure Installation",
      "Heavy Load Bearing Capacity",
      "Weatherproof & Maintenance-Free",
    ],
    specifications: {
      Dimentions: "155(D) x 230(H) x 240(B)",
      Material: "HDPE",
      "Weight in KG": "0.4",
    },
    applications: [
      "Electrical Substations",
      "Industrial Facilities",
      "Telecom Towers",
      "Residential & Commercial Buildings",
    ],
    price: "Contact for Quote",
  },
  {
    id: "2",
    name: "PV MINI - 7''",
    category: "Earthing Pit Cover",
    image: "/Product/earthing_pit_covers.jpeg",
    description:
      "Earthing Pit Cover protects the grounding system and allows safe, easy inspection access.",
    features: [
      "UV Stabilized",
      "Chemical-Resistant Construction",
      "Ergonomic Design for Easy Handling & Storage",
      "Secure Installation",
      "Heavy Load Bearing Capacity",
      "Weatherproof & Maintenance-Free",
    ],
    specifications: {
      Dimentions: "177(D) x 230(H) x 270(B)",
      Material: "HDPE",
      "Weight in KG": "0.7",
    },
    applications: [
      "Electrical Substations",
      "Industrial Facilities",
      "Telecom Towers",
      "Residential & Commercial Buildings",
    ],
    price: "Contact for Quote",
  },
  {
    id: "3",
    name: "PV BIG - 11''",
    category: "Earthing Pit Cover",
    image: "/Product/earthing_pit_covers.jpeg",
    description:
      "Earthing Pit Cover protects the grounding system and allows safe, easy inspection access.",
    features: [
      "UV Stabilized",
      "Chemical-Resistant Construction",
      "Ergonomic Design for Easy Handling & Storage",
      "Secure Installation",
      "Heavy Load Bearing Capacity",
      "Weatherproof & Maintenance-Free",
    ],
    specifications: {
      Dimentions: "260(D) x 265(H) x 340(B)",
      Material: "HDPE",
      "Weight in KG": "1.2",
    },
    applications: [
      "Electrical Substations",
      "Industrial Facilities",
      "Telecom Towers",
      "Residential & Commercial Buildings",
    ],
    price: "Contact for Quote",
  },
  {
    id: "4",
    name: "PV SQUARE",
    category: "Earthing Pit Cover",
    image: "/Product/earthing_pit_covers.jpeg",
    description:
      "Earthing Pit Cover protects the grounding system and allows safe, easy inspection access.",
    features: [
      "UV Stabilized",
      "Chemical-Resistant Construction",
      "Ergonomic Design for Easy Handling & Storage",
      "Secure Installation",
      "Heavy Load Bearing Capacity",
      "Weatherproof & Maintenance-Free",
    ],
    specifications: {
      Dimentions: "300(D) x 300(H) x 270(B)",
      Material: "HDPE",
      "Weight in KG": "2.2",
    },
    applications: [
      "Electrical Substations",
      "Industrial Facilities",
      "Telecom Towers",
      "Residential & Commercial Buildings",
    ],
    price: "Contact for Quote",
  },
  {
    id: "5",
    name: "PV PEP-S",
    category: "Earthing Pit Cover",
    image: "/Product/earthing_pit_covers.jpeg",
    description:
      "Earthing Pit Cover protects the grounding system and allows safe, easy inspection access.",
    features: [
      "UV Stabilized",
      "Chemical-Resistant Construction",
      "Ergonomic Design for Easy Handling & Storage",
      "Secure Installation",
      "Heavy Load Bearing Capacity",
      "Weatherproof & Maintenance-Free",
    ],
    specifications: {
      Dimentions: "245(D) x 245(H) x 195(B)",
      Material: "POLYMER",
      "Weight in KG": "2.4",
    },
    applications: [
      "Electrical Substations",
      "Industrial Facilities",
      "Telecom Towers",
      "Residential & Commercial Buildings",
    ],
    price: "Contact for Quote",
  },
  {
    id: "6",
    name: "PV PEP",
    category: "Earthing Pit Cover",
    image: "/Product/earthing_pit_covers.jpeg",
    description:
      "Earthing Pit Cover protects the grounding system and allows safe, easy inspection access.",
    features: [
      "UV Stabilized",
      "Chemical-Resistant Construction",
      "Ergonomic Design for Easy Handling & Storage",
      "Secure Installation",
      "Heavy Load Bearing Capacity",
      "Weatherproof & Maintenance-Free",
    ],
    specifications: {
      Dimentions: "308(D) x 308(H) x 215(B)",
      Material: "POLYMER",
      "Weight in KG": "2.5",
    },
    applications: [
      "Electrical Substations",
      "Industrial Facilities",
      "Telecom Towers",
      "Residential & Commercial Buildings",
    ],
    price: "Contact for Quote",
  },
  {
    id: "7",
    name: "PV PEP-B 300",
    category: "Earthing Pit Cover",
    image: "/Product/earthing_pit_covers.jpeg",
    description:
      "Earthing Pit Cover protects the grounding system and allows safe, easy inspection access.",
    features: [
      "UV Stabilized",
      "Chemical-Resistant Construction",
      "Ergonomic Design for Easy Handling & Storage",
      "Secure Installation",
      "Heavy Load Bearing Capacity",
      "Weatherproof & Maintenance-Free",
    ],
    specifications: {
      Dimentions: "500(D) x 500(H) x 315(B)",
      Material: "POLYMER",
      "Weight in KG": "5.0",
    },
    applications: [
      "Electrical Substations",
      "Industrial Facilities",
      "Telecom Towers",
      "Residential & Commercial Buildings",
    ],
    price: "Contact for Quote",
  },
  {
    id: "8",
    name: "RCC Chamber",
    category: "RCC Chamber",
    image: "/Product/rcc_chamber.jpeg",
    description:
      "An RCC Chamber protects underground utilities and provides safe, durable access for maintenance.",
    features: [
      "Customizable for heavy-duty",
      "Suitable for pedestrian",
      "Durable for outdoor installation",
      "Smooth internal surface",
    ],
    specifications: {
      "Chamber Size":
        "600x600x300, 450x450x450, 400x300x300, 300x300x300, 300x300x200",
      "RCC Cover": "300 x 300, 450 x 450, 600 x 600",
    },
    applications: [
      "Cable Housing",
      "Drainage System",
      "Telecom Access",
      "Earthing Enclosure",
    ],
    price: "Contact for Quote",
  },
  {
    id: "9",
    name: "PV-48/PCR",
    category: "Pure Copper Earth Electrode & Rod",
    image:
      "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Pure Copper Earth Rod ensures efficient, long-lasting grounding with high conductivity and corrosion resistance.",
    features: [
      "Soil PH Compatibility with 5.0 and 8.0",
      "Available in Integrated Moisture Booster Packs",
      "Sustainable & Eco-Safe product",
      "100% Pure and strong Copper Construction",
      "Efficient Fault Current Dissipation",
      "Quick, Easy and Low Maintenance Operation",
    ],
    specifications: {
      Diameter: "48 mm",
      length: "1, 2 & 3 mtr",
    },
    applications: [
      "Lightning Protection",
      "Power Distribution",
      "Telecom Grounding",
      "Industrial Earthing",
    ],
    price: "Contact for Quote",
  },
  {
    id: "10",
    name: "PV-76/PCR",
    category: "Pure Copper Earth Electrode & Rod",
    image:
      "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Pure Copper Earth Rod ensures efficient, long-lasting grounding with high conductivity and corrosion resistance.",
    features: [
      "Soil PH Compatibility with 5.0 and 8.0",
      "Available in Integrated Moisture Booster Packs",
      "Sustainable & Eco-Safe product",
      "100% Pure and strong Copper Construction",
      "Efficient Fault Current Dissipation",
      "Quick, Easy and Low Maintenance Operation",
    ],
    specifications: {
      Diameter: "76 mm",
      length: "1, 2 & 3 mtr",
    },
    applications: [
      "Lightning Protection",
      "Power Distribution",
      "Telecom Grounding",
      "Industrial Earthing",
    ],
    price: "Contact for Quote",
  },
  {
    id: "11",
    name: "PV-14.2/CBR",
    category: "Copper Bonded Solid Earth Rod",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Copper Bonded Solid Earth Rod offers durable, high-conductivity grounding with corrosion resistance.",
    features: [
      "Standard-Compliant Copper Coating",
      "Thick Copper Layer (100-250 Microns)",
      "Long Lifespan — 15+ Years",
      "High Tensile Strength & Flexibility",
      "Anti-Corrosive Performance",
      "Reliable Grounding Performance",
    ],
    specifications: {
      "ROD Diameter": "14.2 mm",
      length: "1, 2 & 3 meter",
      "Copper Bonding": "50 to 250 micron",
    },
    applications: [
      "Industrial Plants",
      "Airports",
      "Stadiums",
      "High-rise Buildings",
    ],
    price: "Contact for Quote",
  },
  {
    id: "12",
    name: "PV-17.2/CBR",
    category: "Copper Bonded Solid Earth Rod",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Copper Bonded Solid Earth Rod offers durable, high-conductivity grounding with corrosion resistance.",
    features: [
      "Standard-Compliant Copper Coating",
      "Thick Copper Layer (100-250 Microns)",
      "Long Lifespan — 15+ Years",
      "High Tensile Strength & Flexibility",
      "Anti-Corrosive Performance",
      "Reliable Grounding Performance",
    ],
    specifications: {
      "ROD Diameter": "17.2 mm",
      length: "1, 2 & 3 meter",
      "Copper Bonding": "50 to 250 micron",
    },
    applications: [
      "Industrial Plants",
      "Airports",
      "Stadiums",
      "High-rise Buildings",
    ],
    price: "Contact for Quote",
  },
  {
    id: "13",
    name: "PV-20/CBR",
    category: "Copper Bonded Solid Earth Rod",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Copper Bonded Solid Earth Rod offers durable, high-conductivity grounding with corrosion resistance.",
    features: [
      "Standard-Compliant Copper Coating",
      "Thick Copper Layer (100-250 Microns)",
      "Long Lifespan — 15+ Years",
      "High Tensile Strength & Flexibility",
      "Anti-Corrosive Performance",
      "Reliable Grounding Performance",
    ],
    specifications: {
      "ROD Diameter": "20 mm",
      length: "1, 2 & 3 meter",
      "Copper Bonding": "50 to 250 micron",
    },
    applications: [
      "Industrial Plants",
      "Airports",
      "Stadiums",
      "High-rise Buildings",
    ],

    price: "Contact for Quote",
  },
  {
    id: "14",
    name: "PV-25/CBR",
    category: "Copper Bonded Solid Earth Rod",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Copper Bonded Solid Earth Rod offers durable, high-conductivity grounding with corrosion resistance.",
    features: [
      "Standard-Compliant Copper Coating",
      "Thick Copper Layer (100-250 Microns)",
      "Long Lifespan — 15+ Years",
      "High Tensile Strength & Flexibility",
      "Anti-Corrosive Performance",
      "Reliable Grounding Performance",
    ],
    specifications: {
      "ROD Diameter": "25 mm",
      length: "1, 2 & 3 meter",
      "Copper Bonding": "50 to 250 micron",
    },
    applications: [
      "Industrial Plants",
      "Airports",
      "Stadiums",
      "High-rise Buildings",
    ],

    price: "Contact for Quote",
  },
  {
    id: "15",
    name: "PV-32/CBR",
    category: "Copper Bonded Solid Earth Rod",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Copper Bonded Solid Earth Rod offers durable, high-conductivity grounding with corrosion resistance.",
    features: [
      "Standard-Compliant Copper Coating",
      "Thick Copper Layer (100-250 Microns)",
      "Long Lifespan — 15+ Years",
      "High Tensile Strength & Flexibility",
      "Anti-Corrosive Performance",
      "Reliable Grounding Performance",
    ],
    specifications: {
      "ROD Diameter": "32 mm",
      length: "1, 2 & 3 meter",
      "Copper Bonding": "50 to 250 micron",
    },
    applications: [
      "Industrial Plants",
      "Airports",
      "Stadiums",
      "High-rise Buildings",
    ],

    price: "Contact for Quote",
  },
  {
    id: "16",
    name: "PV-38/CBR",
    category: "Copper Bonded Solid Earth Rod",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Copper Bonded Solid Earth Rod offers durable, high-conductivity grounding with corrosion resistance.",
    features: [
      "Standard-Compliant Copper Coating",
      "Thick Copper Layer (100-250 Microns)",
      "Long Lifespan — 15+ Years",
      "High Tensile Strength & Flexibility",
      "Anti-Corrosive Performance",
      "Reliable Grounding Performance",
    ],
    specifications: {
      "ROD Diameter": "38 mm",
      length: "1, 2 & 3 meter",
      "Copper Bonding": "50 to 250 micron",
    },
    applications: [
      "Industrial Plants",
      "Airports",
      "Stadiums",
      "High-rise Buildings",
    ],
    price: "Contact for Quote",
  },
  {
    id: "17",
    name: "Copper Plate Earthing",
    category: "Copper Plate Earthing",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Copper Plate Earthing ensures safe fault current dissipation with high conductivity and corrosion resistance.",
    features: [
      "High conductivity for efficient fault current dissipation",
      "Long-lasting corrosion resistance",
      "Ideal for high soil resistivity areas",
      "Complies with IS standards for safe earthing",
      "Maintenance-free operation",
      "Suitable for all types of installations",
      "Stable performance over time",
      "Environmentally safe and reliable",
    ],
    specifications: {
      "Plate Sizes":
        "150 x 150 x 3 mm, 300 x 300 x 3 mm, 450 x 450 x 3 mm, 600 x 600 x 3 mm",
    },
    applications: [
      "Industrial Plants",
      "Airports",
      "Stadiums",
      "High-rise Buildings",
    ],
    price: "Contact for Quote",
  },
  {
    id: "18",
    name: "PV-48/CBR",
    category: "Copper Bonded Chemical Earth Electrode",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Copper Bonded Chemical Earth Electrode ensures stable, low-resistance grounding in all soil conditions. It features corrosion resistance and long service life.",
    features: [
      "High-Quality Copper Coated Electrode",
      "Durable Copper Bonding",
      "Extended Service Life",
      "Corrosion Resistance",
      "Copper-Coated Inner Flat Electrode",
      "Maintenance-Free Operation",
      "Crystalline Conductive Compound Filling",
      "Environmentally Safe",
    ],
    specifications: {
      "ROD Diameter": "48 mm",
      length: "1, 2 & 3 meter",
      "Copper Bonding": "50 to 250 micron",
    },
    applications: [
      "Power Systems",
      "Data Centers",
      "Industrial Plants",
      "Telecom Infrastructure",
    ],
    price: "Contact for Quote",
  },
  {
    id: "19",
    name: "PV-76/CBR",
    category: "Copper Bonded Chemical Earth Electrode",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Copper Bonded Chemical Earth Electrode ensures stable, low-resistance grounding in all soil conditions. It features corrosion resistance and long service life.",
    features: [
      "High-Quality Copper Coated Electrode",
      "Durable Copper Bonding",
      "Extended Service Life",
      "Corrosion Resistance",
      "Copper-Coated Inner Flat Electrode",
      "Maintenance-Free Operation",
      "Crystalline Conductive Compound Filling",
      "Environmentally Safe",
    ],
    specifications: {
      "ROD Diameter": "76 mm",
      length: "1, 2 & 3 meter",
      "Copper Bonding": "50 to 250 micron",
    },
    applications: [
      "Power Systems",
      "Data Centers",
      "Industrial Plants",
      "Telecom Infrastructure",
    ],
    price: "Contact for Quote",
  },
  {
    id: "20",
    name: "PV-48/GIR",
    category: "GI-Earth Electrode",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "GI Earth Electrode provides safe and efficient grounding for electrical systems. It is cost-effective, corrosion-resistant, and easy to install.",
    features: [
      "Superior Corrosion Protection",
      "Low Earth Resistance with Moisture Booster Bags",
      "Minimal Maintenance Requirements",
      "Quick & Hassle-Free Installation with Soil Compatibility",
      "Rapid Fault Current Dissipation",
    ],
    specifications: {
      "ROD Diameter": "48 mm",
      length: "1, 2 & 3 meter",
    },
    applications: [
      "Power Plants",
      "Control Panels",
      "Industrial Buildings",
      "Residential Projects",
    ],
    price: "Contact for Quote",
  },
  {
    id: "21",
    name: "PV-76/GIR",
    category: "GI-Earth Electrode",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "GI Earth Electrode provides safe and efficient grounding for electrical systems. It is cost-effective, corrosion-resistant, and easy to install.",
    features: [
      "Superior Corrosion Protection",
      "Low Earth Resistance with Moisture Booster Bags",
      "Minimal Maintenance Requirements",
      "Quick & Hassle-Free Installation with Soil Compatibility",
      "Rapid Fault Current Dissipation",
    ],
    specifications: {
      "ROD Diameter": "76 mm",
      length: "1, 2 & 3 meter",
    },
    applications: [
      "Power Plants",
      "Control Panels",
      "Industrial Buildings",
      "Residential Projects",
    ],
    price: "Contact for Quote",
  },
  {
    id: "22",
    name: "PV Backfill Compound",
    category: "PV Backfill Compound",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "PV Backfill Compound enhances soil conductivity around earth electrodes. It ensures consistent, long-term grounding performance with minimal maintenance.",
    features: [
      "Permanent Moisture Retention",
      "Ultra-Low Resistivity",
      "Self-Sustaining Conductivity",
      "Graphite-Enriched Formula",
      "Environmentally Safe",
      "Certified Quality",
      "Advance Ground",
    ],
    specifications: {
      Size: "10 KG, 15 KG, 25 KG",
      Quantity: "1 BAG",
    },
    applications: [
      "Solar Farms",
      "Power Stations",
      "Telecom Sites",
      "Industrial Plants",
    ],
    price: "Contact for Quote",
  },
  {
    id: "23",
    name: "PV All Types of G.I. Strips",
    category: "PV All Types of G.I. Strips",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "PV G.I. Strips are used for efficient grounding and bonding in electrical systems. They offer high strength, corrosion resistance, and easy installation.",
    features: [
      "Zinc-Coated for Long-Term Protection",
      "Reliable Grounding Performance",
      "Versatile Application",
      "Cost-Effective and Low Maintenance",
      "Customized Lengths & Bundling Options",
    ],
    specifications: {
      Sizes: "25x3 mm, 25x6 mm, 50x5 mm, 50x6 mm, 75x5 mm 100x6 mm, 100x12 mm",
    },
    applications: [
      "Earthing Systems",
      "Lightning Protection",
      "Cable Trays",
      "Electrical Panels",
    ],
    price: "Contact for Quote",
  },
  {
    id: "24",
    name: "PV Copper Earthing Strip",
    category: "PV Copper Earthing Strip",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "PV Copper Earthing Strip ensures excellent conductivity and reliable grounding. It is durable, corrosion-resistant, and ideal for critical electrical systems.",
    features: [
      "Superior Electrical Conductivity",
      "Ideal for HV Earthing Systems",
      "Exceptional Corrosion Resistance",
      "Wide Range of Sizes Available",
      "Long Life with Minimal Maintenance",
      "Flexible & Easy to Install",
      "Trusted in Critical Infrastructure",
    ],
    specifications: {
      Sizes: "Custom",
    },
    applications: [
      "Power Plants",
      "Control Panels",
      "Telecom Towers",
      "Industrial Units",
    ],
    price: "Contact for Quote",
  },
  {
    id: "25",
    name: "Copper/ Copper Bonded/ Spike lightning Arrester",
    category: "Copper/ Copper Bonded/ Spike lightning Arrester",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Copper/ Copper Bonded Spike Lightning Arrester protects structures from lightning strikes by safely grounding high-voltage surges. It offers high conductivity, durability, and weather resistance.",
    features: [
      "High Conductivity",
      "Corrosion Resistant",
      "Efficient Surge Protection",
      "Weather Resistant",
      "Long Service Life",
    ],
    specifications: {
      Standard: "IEC - 62305",
      Material: "Pure Copper / Bonded Copper / Hollow Copper",
      Technology: "Conventional Type",
      Diameter: "14 mm Solid Rod, 16 mm Solid Rod, 25 mm Hallow Rod",
      length: "1 / 2 meter",
    },
    applications: [
      "Residential Buildings",
      "Industrial Plants",
      "Telecom Towers",
      "Commercial Complexes",
    ],
    price: "Contact for Quote",
  },
  {
    id: "26",
    name: "Lightning Arrester",
    category: "Lightning arrester",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "An ESE lightning arrester detects and attracts lightning within its protection range using ion emission, safely directing up to 200kA of current to the ground.",
    features: [
      "Early Detection",
      "High Conductivity",
      "Ion Emission",
      "Wide Coverage",
    ],
    specifications: {
      Weight: "4.20 kg",
      ExternalDiameter: "187 mm",
      RodLength: "63 cm",
      RodDiameter: "65.5 mm (Male)",
      BoxLength: "67 cm",
      IPCode: "IP67",
      WorkingTemperature: "-25°C to +90°C",
      TerminalType: "Electroatmospheric",
      InternalInsulation: "High Density Polyurethane Resin",
      Standard: "NFC 17-102 / 2011",
      GroundingMethod: "Wire / Tape",
      MaxDischargeEnergy: "2.2 MJ / Ω (10/350 μs)",
      AdvanceTime: "60.0 μs",
    },
    protectionRadius: {
      "2m": { level1: 31, level2: 35, level3: 39, level4: 43 },
      "3m": { level1: 47, level2: 52, level3: 58, level4: 64 },
      "5m": { level1: 79, level2: 86, level3: 97, level4: 107 },
      "10m": { level1: 79, level2: 88, level3: 99, level4: 109 },
      "20m": { level1: 80, level2: 89, level3: 102, level4: 113 },
    },
    applications: [
      "Industrial Facilities",
      "Communication Towers",
      "Commercial Buildings",
      "Power Plants",
    ],
    price: "Contact for Quote",
  },
  {
    id: "27",
    name: "Digital Lightning Strike Counter",
    category: "Digital Lightning Strike Counter",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "The digital lightning strike counter reliably logs strikes in lightning protection systems, offering durable, efficient, and continuous monitoring for enhanced safety.",
    features: [
      "Accurate Logging",
      "Digital Display",
      "Weatherproof Design",
      "Long Lifespan",
    ],
    specifications: {
      CurrentSensitivity: "500 A (8/20 μs impulse)",
      OperatingRange: "Up to 1500 A, Max. 200 kA (8/20 μs)",
      Display: "Digital, 6 or 8 digits",
      CountRange: "0–999999 strikes",
      OperatingTemperature: "< 95%",
      WorkingHumidity: "< 95%",
      WaterResistance: "IP67",
      Weight: "0.67 kg",
      Dimensions: "100 (D) x 68 (H) x 70 (W) mm",
      Type: "Waterproof Lightning Strike Counter",
    },
    installationAccessories: {
      Insulators: ["Insulator"],
      Wires: ["Stray Wire"],
      Clamps: ["U Clamp"],
      Bolts: ["U Anchor Bolt", "Anchor Bolt"],
      Mast: ["GI Mast"],
    },
    applications: [
      "Telecom Towers",
      "Power Stations",
      "Industrial Sites",
      "Commercial Buildings",
    ],
    price: "Contact for Quote",
  },
];

export const HeroCard = [
  {
    icon: <Shield className="w-8 h-8 text-[#FECE09]" />,
    title: "Safety First",
    subtitle: "Certified Protection",
    border: "border-[#FECE09]",
  },
  {
    icon: <Zap className="w-8 h-8 text-[#32B44A]" />,
    title: "High Performance",
    subtitle: "Superior Conductivity",
    border: "border-[#32B44A]",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-orange-400" />,
    title: "Reliable",
    subtitle: "Long-lasting Solutions",
    border: "border-orange-500",
  },
];

export const stats = [
  { icon: Shield, value: "ISO 9001", label: "Quality Certified" },
  { icon: Zap, value: "99.9%", label: "Reliability Rate" },
  { icon: CheckCircle, value: "24/7", label: "Technical Support" },
  { icon: Award, value: "HIGH", label: "Grade Materials" },
];
