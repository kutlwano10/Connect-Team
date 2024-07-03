import React from "react";
import background from "../assets/background.jpg";
import profileImg from "../assets/img.jpg";
import Header from "./Header";
import { Link } from "react-router-dom";
import {
  FaDiscord,
  FaYoutube,
  FaTwitch,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const ProfileInfo = () => {
  return (
    <>
      <Header />

      <div className="bg-gray-100 min-h-screen w-screen p-3 ">
        <div></div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full w-4xl px-2 mt-12 ">
          <div className="relative">
            <img
              className="w-full rounded-lg h-36 object-cover"
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
          <div className="pt-20 px-4 pb-20">
            <h1 className="text-l font-bold">Keabetswe Mosupi</h1>
            <p className="text-gray-600 text-sm">
              Software Dev | Content Creator
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-8 md:grid-cols-2 gap-4 ">
          <a
            href="https://github.com/kutlwano10"
            className="flex items-center justify-center  bg-gray-200 p-4 rounded-2xl shadow-md hover:bg-gray-300"
          >
            <FaGithub className="mr-4" />
            My Github Profile
          </a>
          <a
            href="https://github.com/kutlwano10"
            className="flex items-center justify-center bg-gray-200 p-4 rounded-2xl shadow-md hover:bg-gray-300"
          >
            <FaYoutube className="mr-4" />
            My Github Profile
          </a>
          <a
            href="https://github.com/kutlwano10"
            className="flex items-center justify-center bg-gray-200 p-4 rounded-2xl shadow-md hover:bg-gray-300"
          >
            <FaTwitch className="mr-4" />
            My Github Profile
          </a>
          <a
            href="https://github.com/kutlwano10"
            className="flex items-center justify-center bg-gray-200 p-4 rounded-2xl shadow-md hover:bg-gray-300"
          >
            <FaDiscord className="mr-4" />
            My Github Profile
          </a>
          <a
            href="https://github.com/kutlwano10"
            className="flex items-center justify-center bg-gray-200 p-4 rounded-2xl shadow-md hover:bg-gray-300"
          >
            <FaLinkedin className="mr-4" />
            My Github Profile
          </a>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
