import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onMouseEnter={handleToggle}
        onMouseLeave={handleToggle}
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring focus:border-blue-300"
      >
        Options
      </button>

      {isOpen && (
        <div
          className="absolute mt-2 right-0 bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          onMouseEnter={handleToggle}
          onMouseLeave={handleToggle}
        >
          {/* Dropdown items */}
          <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Option 1
          </div>
          <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <a href="#" className="block">
              Submenu 1
            </a>
          </div>
          <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <a href="#" className="block">
              Submenu 2
            </a>
          </div>
          <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            <a href="#" className="block">
              Submenu 3
            </a>
          </div>
          <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Option 2
          </div>
          {/* Add more options as needed */}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
