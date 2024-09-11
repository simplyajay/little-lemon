import React from "react";
import Bruchetta from "../assets/bruchetta.svg";
import CustomCard from "../components/CustomCard";

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
        "This is a very delicious food. This is a very delicious food",
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
    {
      id: 5,
      image: Bruchetta,
      alt: "image img",
      title: "Bruchetta",
      price: 12,
      description:
        "This is a very delicious food. This is a very delicious food",
    },
    {
      id: 6,
      image: Bruchetta,
      alt: "image img",
      title: "Bruchetta",
      price: 12,
      description:
        "This is a very delicious food. This is a very delicious food",
    },
    {
      id: 7,
      image: Bruchetta,
      alt: "image img",
      title: "Bruchetta",
      price: 12,
      description:
        "This is a very delicious food. This is a very delicious food",
    },
  ];

  return (
    <div className="p-5 flex flex-col gap-5">
      <div className="p-5 flex justify-between">
        <h1 className="text-3xl font-karla font-bold">Specials</h1>
        <button className="p-2 rounded-lg border border-solid border-gray-600 bg-customYellow ">
          View more
        </button>
      </div>
      <div className="flex flex-wrap gap-2 justify-evenly">
        {specials.map((child) => {
          return (
            <CustomCard
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
