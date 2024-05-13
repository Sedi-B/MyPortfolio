import React from "react";
import frontpic from "../Photos/frontpic.jpg";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";

const Home = () => {
  return (
    <div className="flex h-screen flex-col sm:flex-row items-center justify-center">
      <div className="md:w-1/2 flex justify-center">
        <img className="w-[50%] rounded-full" src={frontpic} alt="profile" />
      </div>
      <div className="md:w-1/2 p-8">
        <div className="text-center text-black mb-5">
          <h1 className="font-bold text-4xl">
            Hi,I'm Ramaesela Rabecca Phoshoko
          </h1>
          <p className="mb-4">
            I'm a junior Frontend Developer focusing on mobile and web
            applications.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl"
              to="/Contact"
            >
              Contacts
            </Link>

            <Link
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl"
              to="/About"
            >
              More About Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
