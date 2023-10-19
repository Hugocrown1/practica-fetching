import React from "react";

const StarRating = ({ rating }) => {
  return (
    <div className="flex flex-row items-center text-sm">
      <p className="mr-1 text-[#adb5bd]">({rating})</p>
      <label
        className={`text-2xl ${
          rating > 1 ? "text-yellow-300" : "text-[#adb5bd]"
        }`}
        htmlFor=""
      >
        ★
      </label>
      <label
        className={`text-2xl ${
          rating > 2 ? "text-yellow-300" : "text-[#adb5bd]"
        }`}
        htmlFor=""
      >
        ★
      </label>
      <label
        className={`text-2xl ${
          rating > 3 ? "text-yellow-300" : "text-[#adb5bd]"
        }`}
        htmlFor=""
      >
        ★
      </label>
      <label
        className={`text-2xl ${
          rating > 4 ? "text-yellow-300" : "text-[#adb5bd]"
        }`}
        htmlFor=""
      >
        ★
      </label>
      <label
        className={`text-2xl ${
          rating > 4.5 ? "text-yellow-300" : "text-[#adb5bd]"
        }`}
        htmlFor=""
      >
        ★
      </label>
    </div>
  );
};

export default StarRating;
