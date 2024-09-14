import React from "react";

const CustomLabel = (props) => {
  const {
    className,
    text,
    textClassName,
    textContainerClassName,
    val,
    valClassName,
  } = props;
  return (
    <div className={className}>
      <div className={textContainerClassName}>
        <p className={`font-karla font-md ${textClassName}`}>{text}</p>
      </div>
      <h1 className={`font-semibold font-karla text-lg ${valClassName}`}>
        {val}
      </h1>
    </div>
  );
};

export default CustomLabel;
