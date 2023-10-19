"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import StarRating from "./StarRating";

const ProductCard = ({ product }) => {
  const {
    title,
    thumbnail,

    price,
    discountPercentage,
    rating,
    brand,
    category,
  } = product;
  const router = useRouter();

  return (
    <section className="flex justify-end space-x-4 rounded-lg bg-[#212529] m-2  w-full h-[85%]">
      <div className=" w-[42%]   rounded-md ">
        <img
          className="-translate-y-2 rounded-lg"
          alt="product image"
          width={300}
          height={200}
          style={{ width: 300, height: 200 }}
          src={thumbnail}
        />
      </div>

      <div className=" flex flex-col space-y-1 py-2 px-2 w-[58%]">
        <p className="text-xl text-left font-semibold  line-clamp-1">{title}</p>
        <p className="text-[#adb5bd]">
          {brand}, {category}
        </p>
        <p className="font-semibold text-lg">
          ${(price - price * (discountPercentage * 0.01)).toFixed(2)}
          <span className="line-through ml-2 text-[#adb5bd]">${price}</span>
          <span className="text-[#f72585] font-normal ml-2">
            {discountPercentage}% off
          </span>
        </p>
        <StarRating rating={rating} />

        <button
          onClick={() => router.push("/" + product.id)}
          title="Save"
          className="cursor-pointer flex items-center justify-center w-[40%] fill-purple-300 bg-purple-900 hover:bg-purple-950 active:border active:border-purple-400 rounded-md duration-100 p-2"
        >
          <span className="text-sm text-purple-300 font-bold pr-1">
            Ver más
          </span>
        </button>
      </div>
    </section>
  );
};

export default ProductCard;
