import React from "react";

const CustomCard = (props) => {
  return (
    <div className="flex flex-col rounded-lg border border-solid border-black bg-white max-w-[15rem]">
      <div className="">
        <img
          className="rounded-lg object-cover"
          src={props.image}
          alt={props.alt}
        />

        <div className="p-3 flex flex-col gap-4 max-w-full ">
          <div className="flex justify-between border-b border-solid border-black select-none">
            <h1 className="text-xl font-karla font-bold">
              {props.title ? props.title : "Title"}
            </h1>
            <h1 className="text-xl font-karla font-bold">{`$${props.price ? props.price : "0"}`}</h1>
          </div>
          <p className="break-words select-none">{props.description}</p>
        </div>
      </div>

      <div className="flex flex-col p-3">
        <button className="p-1 border border-solid border-black bg-customYellow rounded-lg font-semibold">
          {props.buttonText ? props.buttontext : "Order for delivery"}
        </button>
      </div>
    </div>
  );
};

export default CustomCard;
