import ProductCard from "@/components/ProductCard";
import { fetchInfo } from "@/libs/getProducts";

export default async function Home() {
  const data = await fetchInfo();
  return (
    <>
      <h1 className="text-center text-5xl md:text-8xl font-bold my-12">
        ¡TODO EN OFERTA!
      </h1>
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 w-full md:gap-x-8 md:gap-y-8">
        {data.products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </>
  );
}
