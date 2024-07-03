import React from "react";
import { Link } from "react-router-dom";
import homeIcon from "../assets/home.png";
import profile from "../assets/profile.png";
import searchUser from "../assets/search-user.png";

const Header = () => {
  return (
    <>
      <div className="flex justify-between bg-white
       p-2 fixed w-full top-0">
        <Link to="/home" className="w-9 ">
          <img src={homeIcon} alt="" />
        </Link>
        <Link to="/search" className="w-9 ">
          <img  src={searchUser}  alt="" />
        </Link>
        <Link to="/settings" className="w-9 ">
          <img src={profile} alt="" />
        </Link>
      </div>
      
    </>
  );
};

export default Header;
