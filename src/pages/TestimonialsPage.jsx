import React from "react";
import CustomUserCard from "../components/CustomUserCard";
import userImage from "../assets/image1.png";

const TestimonialsPage = () => {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      image: userImage,
      name: "Daryl Dixon",
      position: "Biker",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 2,
      rating: 5,
      image: userImage,
      name: "Daryl Dixon",
      position: "Biker",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      rating: 5,
      image: userImage,
      name: "Daryl Dixon",
      position: "Biker",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      rating: 5,
      image: userImage,
      name: "Daryl Dixon",
      position: "Biker",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 5,
      rating: 5,
      image: userImage,
      name: "Daryl Dixon",
      position: "Biker",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <div className="min-h-screen px-5 py-10 flex flex-col items-center justify-evenly">
      <h1 className="font-karla text-5xl font-semibold">Testimonials</h1>
      <div className="flex flex-wrap gap-10 justify-around p-5  w-full rounded-2xl">
        {testimonials.map((child) => (
          <CustomUserCard
            key={child.id}
            rating={child.rating}
            image={child.image}
            name={child.name}
            position={child.position}
            description={child.description}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsPage;
