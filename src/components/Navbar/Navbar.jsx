import React from "react";
import navImg from "../../assets/logo.png";
import dollorImg from "../../assets/dollor.png";
const Navbar = ({avialAbleBlance}) => {
  return (
      <div className="navbar w-full py-6">
        <div className="flex-1">
          <img className="w-14 h-14" src={navImg} alt="" />
        </div>

        <div className="flex items-center">
          <button className="btn border-2 border-blue-100 flex items-center">
            <span className="mr-1">{avialAbleBlance}</span>
            <span className="mr-2">Coin</span>
            <img className="w-6 h-6" src={dollorImg} alt="" />
          </button>
        </div>
      </div>
  );
};

export default Navbar;
