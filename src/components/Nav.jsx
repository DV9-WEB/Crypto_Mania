import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MainContext } from "./Context";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between bg-blue-500 w-full text-3xl h-16 items-center">
      <div>
        <h1 className="ml-8 text-white">Crypto Mania</h1>
      </div>
      <div className="flex mr-8 gap-7 text-xl items-center">
        <NavLink to="/">
          <div className="bg-black text-white px-2 rounded hover:bg-gray-700 cursor-pointer">
            Logout
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
