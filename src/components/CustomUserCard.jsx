import React from "react";

const CustomUserCard = (props) => {
  const { rating, image, name, position, description } = props;
  return (
    <div className="flex flex-col p-5 justify-start gap-5 select-none rounded-lg shadow-lg max-w-56 min-w-48 border-gray-400 border-[2px] bg-white">
      <h1 className="font-karla font-semibold text-md">
        {rating ? `Rating: ${rating}` : "Rating: 0"}
      </h1>
      <div className="flex gap-4 justify-evenly">
        <div className="flex items-center ">
          <img
            className="max-w-20 max-h-20 rounded-full border border-solid border-black object-fill"
            src={image}
            alt="User image"
          />
        </div>

        <div className="flex flex-col justify-evenly ">
          <h1 className="font-karla font-semibold text-2xl">
            {name ? name : "Name"}
          </h1>
          <h1 className="font-karla font-semibold italic">
            {position ? position : "Position"}
          </h1>
        </div>
      </div>
      <p className="font-karla font-normal break-words">
        {description ? description : "description"}
      </p>
    </div>
  );
};

export default CustomUserCard;
