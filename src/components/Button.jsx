import React, { Children } from "react";

function Button({
  children,
  type = "button",
  textColor = "text-white",
  bgColor = "bg-blue-500",
  classname = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-lg ${classname} ${textColor} ${bgColor}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
