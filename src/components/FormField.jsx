import React from "react";
import { Field, ErrorMessage } from "formik";

const combineOptions = (defaultoption, options) => {
  if (defaultoption) {
    return [defaultoption, ...options];
  }
  return options;
};

const FormField = ({
  label,
  name,
  type = "text",
  placeholder = "",
  defaultoption,
  options,
  as = "input",
  ...rest
}) => {
  const combinedOptions = combineOptions(defaultoption, options);

  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <Field
        name={name}
        type={type}
        as={as}
        id={name}
        placeholder={placeholder}
        className="p-1 rounded-lg min-w-full"
        {...rest}
      >
        {Array.isArray(options) ? (
          <>
            {combinedOptions.map((option, index) => (
              <option
                key={index}
                value={option.value}
                disabled={index === 0 && !option.value} // Disable the first option
              >
                {option.label}
              </option>
            ))}
          </>
        ) : null}
      </Field>
      <ErrorMessage
        className="text-red-500 text-sm"
        name={name}
        component="div"
      />
    </div>
  );
};

export default FormField;
