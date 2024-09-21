import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";

import { useParams } from "react-router-dom";
import { useGetSingleCategoryQuery } from "../../../redux/api/searchApi";
const SingleProducts = () => {
  const { id } = useParams();
  const { data: car } = useGetSingleCategoryQuery(id);

  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div className="container mx-auto">
      <div className="container gap-5 grid grid-cols-1  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 mb-10 px-1">
        <div className="w-full rounded-[20px] mb-4 object-contain border ">
          <img src={car?.payload.thumbnail} alt="" />
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-[4px]">
            <p className="text-[24px] leading-[50px] font-integral sm:text-[34px] md:text-[30px] lg:text-[34px] font-[700]">
              {car?.payload.model}
            </p>
            <p className="lg:text-[16px] md:text-[16px] text-[14px] text-[#00000094] font-[400]">
              {car?.payload.seats}
            </p>
            <p className="lg:text-[16px] md:text-[16px] text-[14px] text-[#00000094] font-[400]">
              {car?.payload.description}
            </p>
          </div>

          <div className="flex gap-1 items-center">
            <p className="text-[18px] lg:text-[30px] md:text-[24px] font-[700] text-[#000000]">
              ${car?.payload.price}/
            </p>
            <p className="text-[18px] lg:text-[30px] md:text-[24px] font-[700] text-[#0007] line-through">
              $ {car?.payload.rent_price}
            </p>
          </div>
          <hr />
          <p className="text-[15px] text-[#00000094]">Select Colors</p>
          <div className="flex gap-2 mb-2">
            <button className="w-[37px] h-[37px] flex items-center justify-center text-[#fff] rounded-full bg-[#4F4631]">
              <FaCheck />
            </button>
            <button className="w-[37px] h-[37px] flex items-center justify-center text-[#fff] rounded-full bg-[#314F4A]">
              <FaCheck />
            </button>
            <button className="w-[37px] h-[37px] flex items-center justify-center text-[#fff] rounded-full bg-[#31344F]">
              <FaCheck />
            </button>
          </div>
          <hr />
          <p className="text-[15px] text-[#00000094]">Choose Size</p>

          <hr />
          <div className="flex gap-2">
            <div className="flex items-center justify-between rounded-full bg-[#F0F0F0] px-[10px] py-[4px] w-[30%] lg:w-[20%]">
              <button onClick={decrement} className="text-[22px]">
                -
              </button>
              <p className="text-[18px]">{count}</p>
              <button onClick={increment} className="text-[22px]">
                +
              </button>
            </div>
            <button
              className="w-[80%] rounded-full bg-black text-white h-[52px] 
                hover:bg-gray-800 hover:text-gray-300 
                active:bg-gray-900 active:scale-95 
                focus:outline-none focus:ring-2 focus:ring-gray-500 
                transition-all duration-300 ease-in-out"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
