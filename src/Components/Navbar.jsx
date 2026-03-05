import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Logo.svg";

const Navbar = () => {
  return (
    <div className="sticky top-0 left-0 z-1000 flex h-fit w-screen items-center justify-between border-b bg-[#ffffffaf] px-5 py-2 backdrop-blur-2xl">
      <Link to="/" className="flex flex-row items-center justify-center gap-3">
        <img src={Logo} alt="logo" className="h-10 w-10" />
        <h1 className="text-xl font-bold text-[#347965]">Garden Atlas</h1>
      </Link>
      <div className="flex flex-row items-center justify-center gap-3">
        <Link
          to="/products"
          className="text-md flex font-light hover:text-[#347965]"
        >
          Products
        </Link>
        <Link
          to="/pricing"
          className="text-md flex font-light hover:text-[#347965]"
        >
          Pricing
        </Link>
        <Link
          to="/contact"
          className="text-md flex font-light hover:text-[#347965]"
        >
          Contact
        </Link>
        <Link
          to="/about"
          className="text-md flex font-light hover:text-[#347965]"
        >
          About
        </Link>
      </div>
      <div className="flex flex-row items-center justify-center gap-3">
        <button className="button">Get started</button>
      </div>
    </div>
  );
};

export default Navbar;
