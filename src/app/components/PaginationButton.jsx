import React from "react";

const PaginationButton = ({ number, onClick, isSelected }) => {
	const buttonStyles = isSelected
    ? "text-white border-blue-500"
    : "text-[#adb7be] border-slate-600 hover:border-white";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 tetx-xl cursor-pointer`}
      onClick={() => onClick(number)}
    >
      {number}
    </button>
  );
};

export default PaginationButton;
