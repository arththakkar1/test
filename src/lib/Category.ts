// utils.ts
export const groupByCategory = (products: any[]) => {
  const grouped: { [key: string]: any[] } = {};
  products.forEach((item) => {
    if (!grouped[item.category]) {
      grouped[item.category] = [];
    }
    grouped[item.category].push(item);
  });
  return grouped;
};
