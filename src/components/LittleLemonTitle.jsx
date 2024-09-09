import React from "react";

const LittleLemonTitle = (props) => {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col justify-center`}
    >
      <h1 className="text-5xl text-customYellow font-markazi">Little Lemon</h1>
      <h1 className="text-4xl text-customGray font-markazi">Chicago</h1>
    </div>
  );
};

export default LittleLemonTitle;
