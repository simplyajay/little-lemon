import React from "react";
import Bruchetta from "../assets/bruchetta.svg";
import CustomFoodCard from "../components/CustomFoodCard";

const HighlightsPage = () => {
  const specials = [
    {
      id: 1,
      image: Bruchetta,
      alt: "image img",
      title: "Bruchetta",
      price: 12,
      description:
        "This is a very delicious food. This is a very delicious food",
    },
    {
      id: 2,
      image: Bruchetta,
      alt: "image img",
      title: "Bruchetta",
      price: 12,
      description:
        "This is a very delicious food. This is a very delicious food ",
    },
    {
      id: 3,
      image: Bruchetta,
      alt: "image img",
      title: "Bruchetta",
      price: 12,
      description:
        "This is a very delicious food. This is a very delicious food",
    },
    {
      id: 4,
      image: Bruchetta,
      alt: "image img",
      title: "Bruchetta",
      price: 12,
      description:
        "This is a very delicious food. This is a very delicious food",
    },
  ];

  return (
    <div className="px-5 py-10 flex flex-col gap-5 border-b-8  border-t-8 border-solid border-blue-200 rounded-2xl shadow-lg">
      <div className="p-5 flex justify-between">
        <h1 className="text-3xl font-karla font-bold">Specials</h1>
        <button className="p-2 rounded-lg border border-solid border-gray-600 bg-customYellow ">
          View more
        </button>
      </div>
      <div className="flex flex-wrap gap-2 justify-evenly">
        {specials.map((child) => {
          return (
            <CustomFoodCard
              key={child.id}
              image={child.image}
              title={child.title}
              price={child.price}
              description={child.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HighlightsPage;
