import StarRating from "@/components/StarRating";
import { getProduct } from "@/libs/getProducts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductPage = async ({ params: { id } }) => {
  const {
    title,
    thumbnail,
    description,
    price,
    stock,
    brand,
    rating,
    discountPercentage,
    category,
    images,
  } = await getProduct(id);

  return (
    <section>
      <Link href={"/"} className="bg-blue-600 p-2 rounded-md">
        Regresar
      </Link>

      <h1 className="text-5xl text-center mb-4 ">{title}</h1>

      <div className="flex flex-row space-x-4 ">
        <img className="rounded-md h-[80%] w-[80%]" src={thumbnail} />

        <div className="flex flex-col py-4 ">
          <p className="text-2xl">{description}</p>
          <p className="text-blue-500 font-medium">Marca: {brand}</p>

          <StarRating rating={rating} />

          <hr className="divide-solid border-gray-600 my-2" />
          <p className="font-semibold text-lg">
            ${(price - price * (discountPercentage * 0.01)).toFixed(2)}
            <span className="line-through ml-2 text-[#adb5bd]">${price}</span>
            <span className="text-[#f72585] font-normal ml-2">
              {discountPercentage}% off
            </span>
          </p>
          <p>Categoria: {category}</p>

          <p>{stock} en stock</p>

          <div className="flex flex-row space-x-2 items-end h-full ">
            <button className="bg-purple-500 text-white px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none">
              Comprar
            </button>
            <button className="border border-purple-500 text-white px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none">
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
