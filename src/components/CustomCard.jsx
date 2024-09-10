import React from "react";

const CustomCard = (props) => {
  return (
    <div className="flex flex-col rounded-lg border border-solid border-black bg-white max-w-72">
      <div className="max-h-96 max-w-full">
        <img
          className="h-full rounded-lg object-cover"
          src={props.logo}
          alt={props.alt}
        />
      </div>
      <div className="p-3 flex flex-col gap-4 max-w-full">
        <div className="flex justify-between border-b border-solid border-black">
          <h1 className="text-xl font-karla font-bold">{props.title}</h1>
          <h1 className="text-xl font-karla font-bold">{`$${props.price}`}</h1>
        </div>
        <p className="break-words">{props.description}</p>
        <button className="p-1 border border-solid border-black bg-customYellow rounded-lg">
          {props.buttontext}
        </button>
      </div>
    </div>
  );
};

export default CustomCard;
