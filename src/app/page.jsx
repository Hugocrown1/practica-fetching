import ProductCard from "@/components/ProductCard";
import { fetchInfo } from "@/libs/getProducts";

export default async function Home() {
  const data = await fetchInfo();
  return (
    <div className="grid grid-cols-2 w-full gap-x-8 gap-y-8">
      {data.products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}
