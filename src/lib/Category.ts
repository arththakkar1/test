export type ProductType = {
  id: string;
  name: string;
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
  category: string;
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

export const groupByCategory = (products: ProductType[]) => {
  const grouped: { [key: string]: ProductType[] } = {};
  products.forEach((item) => {
    if (!grouped[item.category]) {
      grouped[item.category] = [];
    }
    grouped[item.category].push(item);
  });
  return grouped;
};
