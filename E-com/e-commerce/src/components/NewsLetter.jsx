import React from "react";

export const NewsLetter = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-8 flex flex-col items-center gap-6 text-center">
      <div className="text-center">
        <h3 className="text-3xl font-semibold mb-2 text-gray-800">
          Subscribe now & get 20% off
        </h3>
        <p className="text-gray-500 mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center w-full gap-3"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 px-4 py-3 border border-black rounded-md focus:outline-none focus:border-black focus:ring-0"
        />

        <button className="w-full sm:w-auto bg-black text-white font-medium px-6 py-3 rounded-md hover:bg-gray-900 transition-all duration-300">
          Subscribe
        </button>
      </form>
    </div>
  );
};
