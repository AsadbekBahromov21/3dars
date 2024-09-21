import React, { memo } from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addcart } from "../../redux/slices/cartSlices";
const Card = ({ car }) => {
  const dispatch = useDispatch();
  return (
    <div>
      {" "}
      <div className="rounded-[15px] border mb-7 relative" key={car._id}>
        <div className="w-full h-60  rounded-lg">
          <Link to={`/products/${car._id}`}>
            <img
              onError={(e) => {
                e.target.src =
                  "https://www.shutterstock.com/image-vector/car-logo-icon-emblem-design-600nw-473088025.jpg";
              }}
              src={
                car.thumbnail ??
                "https://www.shutterstock.com/image-vector/car-logo-icon-emblem-design-600nw-473088025.jpg"
              }
              alt={car.name}
            />
          </Link>
        </div>
        <div className="flex flex-col gap-2 p-[5px_0_25px_16px] items-start justify-end">
          <p className="text-start text-[12px] text-[#ADADAD]">{car.model}</p>
          <p className="text-[16px] font-[700] text-[#253D4E] text-start">
            {car.name}
          </p>
          <div className="flex gap-6 items-baseline">
            <FaStar className="text-yellow-400" />
            <p className="text-[#B6B6B6] text-[14px] font-[400]">
              ({car.seats})
            </p>
          </div>

          <div className="absolute top-0 right-0">
            <button
              //   onClick={() =>
              //     dispatch({ type: "ADD_TO_WISHLIST", payload: product })
              //   }
              className="rounded-[0_15px] px-[10px] text-[16px] text-[#fff] py-[5px] bg-[#3BB77E]"
            >
              <FaHeart />
            </button>
          </div>
          <div>
            <div className="flex">
              <p className="text-[#B6B6B6] text-[14px]">By</p>
              <p className="text-[#3BB77E] text-[14px] font-[400]">
                {" "}
                {car.transmission}
              </p>
            </div>
            <div className="flex  gap-[20px]">
              <div className="flex gap-2 mt-2 items-center">
                <strong className="text-[18px] text-[#3BB77E] font-[700]">
                  ${car.price}
                </strong>
                <strong className="line-through text-[12px] text-[#B6B6B6] font-[700] ">
                  ${car.rent_price}
                </strong>
              </div>
              <button
                onClick={() => dispatch(addcart(car))}
                className="border bg-[#DEF9EC] py-[2px] px-[10px] text-[#fff] flex items-center rounded-[4px]"
              >
                <IoCartOutline className="text-[#3BB77E]" />{" "}
                <p className="text-[13px] text-[#3BB77E] font-[500]">Add</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Card);
