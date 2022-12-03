import React from "react";

const Currency = ({ setIsUsd, isUsd }) => {
  const handleChange = (e) => {
    setIsUsd(e.target.value);
    localStorage.setItem("isUsd", JSON.stringify(e.target.value));
  };

  return (
    <div>
      <select
        className="text-gray-500"
        style={{ fontSize: "0.8rem" }}
        onChange={handleChange}
      >
        <option value={true}>USD</option>
        <option value={false}>PHP</option>
      </select>
    </div>
  );
};

export default Currency;
