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
        "This is a very long testimony. Another sentence of this testimony.",
    },
    {
      id: 2,
      rating: 5,
      image: userImage,
      name: "Daryl Dixon",
      position: "Biker",
      description: "This is a testimony",
    },
    {
      id: 3,
      rating: 5,
      image: userImage,
      name: "Daryl Dixon",
      position: "Biker",
      description: "This is a testimony",
    },
    {
      id: 4,
      rating: 5,
      image: userImage,
      name: "Daryl Dixon",
      position: "Biker",
      description: "This is a testimony",
    },
    {
      id: 5,
      rating: 5,
      image: userImage,
      name: "Daryl Dixon",
      position: "Biker",
      description: "This is a testimony",
    },
  ];
  return (
    <div className="px-5 py-10 flex flex-col gap-10 items-center justify-between ">
      <h1 className="font-karla text-5xl font-semibold">Testimonials</h1>
      <div className="flex flex-wrap gap-10 justify-around p-5  w-full  rounded-2xl">
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
