export const products = Array.from({ length: 70 }, (_, i) => ({
  id: i + 1,
  title: `Product ${i + 1}`,
  price: parseFloat((Math.random() * 300 + 10).toFixed(2)),
  image: `https://picsum.photos/seed/product${i + 1}/400/400`
}));