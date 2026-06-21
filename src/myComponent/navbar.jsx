import React from "react";
import Cart from './cart'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-2 bg-gray-900 fixed top-0 w-full z-199">
      <div className="text-white text-sm sm:text-base md:text-lg lg:text-xl mx-4">FreeLoot</div>
      <div>
         <Cart />
      </div>
    </div>
  );
};

export default Navbar;
