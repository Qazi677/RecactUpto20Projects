import React from "react";

export default function Tittle({ tex1, text2 }) {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      {/* Text part */}
      <p className="text-gray-500">
        {tex1} <span className="text-gray-700 font-medium ">{text2 }</span>
      </p>

      {/* Line after text */}
      <p className="w-8 h-[2px] bg-gray-400"></p>
    </div>
  );
}
