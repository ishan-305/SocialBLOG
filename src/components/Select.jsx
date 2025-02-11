import React, { useId } from "react";

function Select({ option = ["Select"], label, classname, ...props }, ref) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="">
          {label}
        </label>
      )}
      <select
        id={id}
        {...props}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${classname}`}
      >
        {option?.map((item) => {
          <option key={item} value={item}>
            {item}
          </option>;
        })}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
