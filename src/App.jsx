import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./assets/About";
import Education from "./assets/Education";
import Experience from "./assets/Experience";
import Contact from "./assets/Contact";
import Home from "./assets/Home";
import {
  MdPerson,
  MdSchool,
  MdContacts,
  MdWorkHistory,
  MdSchema,
} from "react-icons/md";
import Projects from "./assets/Projects";

const App = () => {
  return (
    <div className="bg-gray-300 min-h-screen">
      <header className="text-stone-900 font-medium text-base space-x-3 top-0 flex justify-between items-center p-3">
        <Link className="font-bold text-white px-4 py-2 rounded-full" to="/">
          SEDI
        </Link>
        <section className="hover:bg-text-gray-500 cursor-pointer py-3 space-x-3 font-bold text-slate-100 top-0 flex justify-between">
          <Link
            className=" bg-green-500 hover:bg-green-600 text-white px-4 text-sm font-normal  py-2 rounded-3xl"
            to="/About"
          >
            <span className="hidden sm:block"> About</span>
            <MdPerson className="sm:hidden" />
          </Link>
          <Link
            className="bg-green-500 hover:bg-green-600 text-white px-4 text-sm font-normal   py-2 rounded-3xl"
            to="/Eductaion"
          >
            <span className="hidden sm:block"> Education</span>
            <MdSchool className="sm:hidden" />
          </Link>
          <Link
            className=" bg-green-500 hover:bg-green-600 text-white px-4 text-sm font-normal  py-2 rounded-3xl"
            to="/Experience"
          >
            <span className="hidden sm:block"> Experience</span>
            <MdWorkHistory className="sm:hidden" />
          </Link>
          <Link
            className="bg-green-500 hover:bg-green-600 text-white px-4 text-sm font-normal   py-2 rounded-3xl"
            to="/Contact"
          >
            <span className="hidden sm:block"> Contacts</span>
            <MdContacts className="sm:hidden" />
          </Link>
          <Link
            className="bg-green-500 hover:bg-green-600 text-white px-4 text-sm font-normal   py-2 rounded-3xl"
            to="/Projects"
          >
            <span className="hidden sm:block"> Projects</span>
            <MdSchema className="sm:hidden" />
          </Link>
        </section>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Eductaion" element={<Education />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>

      <footer className=" bg-green-500 text-center text-lg font-bold  bottom-7">
        @phoshokorr.RR(2024)
      </footer>
    </div>
  );
};

export default App;
