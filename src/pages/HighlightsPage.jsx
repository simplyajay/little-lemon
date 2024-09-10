import React from "react";
import Bruchetta from "../assets/bruchetta.svg";
import CustomCard from "../components/CustomCard";
import CustomSlider from "../components/CustomSlider";

const HighlightsPage = () => {
  const specials = [
    {
      id: 1,
      logo: Bruchetta,
      alt: "image img",
      title: "Bruchetta",
      price: 12,
      description:
        "This is a very delicious food. This is a very delicious food",
    },
    {
      id: 2,
      logo: Bruchetta,
      alt: "image img",
      title: "Bruchetta",
      price: 12,
      description:
        "This is a very delicious food. This is a very delicious food",
    },
    {
      id: 3,
      logo: Bruchetta,
      alt: "image img",
      title: "Bruchetta",
      price: 12,
      description:
        "This is a very delicious food. This is a very delicious food",
    },
    {
      id: 4,
      logo: Bruchetta,
      alt: "image img",
      title: "Bruchetta",
      price: 12,
      description:
        "This is a very delicious food. This is a very delicious food",
    },
    {
      id: 5,
      logo: Bruchetta,
      alt: "image img",
      title: "Bruchetta",
      price: 12,
      description:
        "This is a very delicious food. This is a very delicious food",
    },
    {
      id: 6,
      logo: Bruchetta,
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
      <div className="p-1">
        <CustomSlider cardsPerSlide={4}>
          {specials.map((child) => (
            <CustomCard
              key={child.id}
              logo={child.logo}
              alt={child.alt}
              title={`${child.title} ${child.id}`}
              price={child.price}
              description={child.description}
              buttontext="Order for delivery"
            />
          ))}
        </CustomSlider>
      </div>
    </div>
  );
};

export default HighlightsPage;
