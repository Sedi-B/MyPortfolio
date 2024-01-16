import React from "react";
import frontpic from "../Photos/frontpic.jpg";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center">
      <div className="md:w-1/2 flex justify-center">
        <img className="h-80 w-80 rounded-full" src={frontpic} alt="profile" />
      </div>

      <div className="md:w-1/2 p-8">
        <div className="text-black font-bold text-3xl mb-5">
          <p className="mb-4">Hi, I'm Rabecca Phoshoko</p>
          <p className="mb-4">
            I am a junior software developer and a frontend developer for mobile
            applications and websites.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Link
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full"
            to="/Contact"
          >
            {" "}
            Hire Me Now
          </Link>

          <Link
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full"
            to="/About"
          >
            More About Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
