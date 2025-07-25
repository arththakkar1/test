interface Product {
  category: string;
  [key: string]: unknown;
}

export const groupByCategory = (products: Product[]) => {
  const grouped: { [key: string]: Product[] } = {};
  products.forEach((item) => {
    if (!grouped[item.category]) {
      grouped[item.category] = [];
    }
    grouped[item.category].push(item);
  });
  return grouped;
};
