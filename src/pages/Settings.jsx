import React from "react";
import background from "../assets/background.jpg";
import profileImg from "../assets/img.jpg";
import Header from "../components/Header";
import {
  FaDiscord,
  FaYoutube,
  FaTwitch,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
const Settings = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-100 min-h-screen flex justify-center mt-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full w-4xl p-2">
          <div className="relative">
            <img
              className="w-full rounded-xl h-36 object-cover"
              src={background}
              alt="Background"
            />
            <div className="absolute top-24 left-4">
              <img
                className="rounded-full w-32 h-32 border-4 border-white object-cover"
                src={profileImg}
                alt="Profile"
              />
            </div>
          </div>
          <form className="mt-32  grid " action="">
            <label>Name: </label>
            <input className="border" type="text" placeholder="" />
            <label>Surname: </label>
            <input className="border" type="text" placeholder="" />
            <label>Bio: </label>
            <input className="border" type="text" placeholder="" />

            <label className="flex items-center gap-2"><FaGithub/>Github: </label>
            <input className="border" type="url" placeholder="" />
            <label className="flex items-center gap-2"><FaYoutube/>YouTube: </label>
            <input className="border" type="url" placeholder="" />
            <label className="flex items-center gap-2"><FaLinkedin/>LinkedIn: </label>
            <input className="border" type="url" placeholder="" />
            <label className="flex items-center gap-2"><FaTwitch/>Twitch: </label>
            <input className="border" type="url" placeholder="" />
            <label className="flex items-center gap-2" ><FaDiscord/>Discord: </label>
            <input className="border" type="url" placeholder="" />
            
          </form>
          <button className="border p-2 px-12 flex rounded-lg ">Submit</button>
        </div>
      </div>
    </>
  );
};

export default Settings;
