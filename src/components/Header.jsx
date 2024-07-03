import React from "react";
import { Link } from "react-router-dom";
import homeIcon from "../assets/home.png";
import profile from "../assets/profile.png";
import searchUser from "../assets/search-user.png";
import settingsLines from "../assets/setting-lines.png"
import {} from "react-icons/fa"
const Header = () => {
  return (
    <>
      <div style={{zIndex: "1"}} className="flex justify-between bg-white
       p-2 fixed w-full top-0">
        <Link to="/" className="w-8 ">
          <img className="cursor-pointer" src={homeIcon} alt="" />
        </Link>
        <Link to="/search" className="w-8 ">
          <img className="cursor-pointer"  src={searchUser}  alt="" />
        </Link>
        <Link to="/settings" className="w-8 ">
          <img className="cursor-pointer" src={settingsLines} alt="" />
        </Link>
      </div>
      
    </>
  );
};

export default Header;
