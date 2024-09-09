import React from "react";
import DatePicker from "react-datepicker";
import { IoCalendarOutline } from "react-icons/io5";

const CustomDatePicker = (props) => {
  return (
    <div className="relative items-center ">
      <DatePicker
        {...props}
        wrapperClassName="w-full" // this is the wrapper of the datepicker
        className={`${props.className} w-full block pr-10`}
      ></DatePicker>
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
        <IoCalendarOutline size={props.iconSize} />
      </div>
    </div>
  );
};

export default CustomDatePicker;
