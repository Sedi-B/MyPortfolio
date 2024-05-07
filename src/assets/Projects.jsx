import React from "react";
import cast from "../Photos/Sedicast.png";
import hotel from "../Photos/Hotel.png";
import list from "../Photos/todolist.png";
const Projects = () => {
  return (
    <div>
      <h1 className="top-1 text-black text-center text-4xl font-bold  mt-4">
        My Projects
      </h1>
      <p className=" text-center text-xl font-semibold mt-4">
        {" "}
        Below I have provided the the front view of few of the projects I have
        worked on.
      </p>
      <section className="grid grid-cols-2 mt-4z content-center">
        <div className="col-span-2 md:col-span-1 p-4">
          <div className="bg-gray-300 rounded-lg shadow-lg p-4 mb-4">
            <h3 className="  text-center items-center font-serif text-black font-bold">
              A To do list App
            </h3>
            <img className="h-90 w-90 rounded-sm" src={list} alt="project 2" />
            <p>
              Built a Todo list web App using reactjs, tailwindcss this App
              allows users to Register, Login to the system and perform CRUD
              functions such as adding tasks to do,and being able to delete
              completed tasks.
            </p>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 p-4">
          <div className="bg-gray-300 rounded-lg shadow-lg p-4 mb-4">
            <h3 className=" text-center items-center font-serif text-black font-bold">
              Weather App
            </h3>

            <img className="h-90 w-90 rounded-sm" src={cast} alt="project 1" />
            <p>
              Built a Weather web App using reactjs, tailwindcss and weather
              API, this App allows users to check on their the forecast at at
              their preffered Location(City).
            </p>
          </div>
        </div>

        <div className="col-span-2 md:col-span-1 p-4">
          <div className="bg-gray-300 rounded-lg shadow-lg p-4 mb-4">
            <h3 className=" text-center items-center font-serif text-black font-bold">
              Hotel Booking System
            </h3>
            <img className="h-90 w-90 rounded-sm" src={hotel} alt="project 2" />
            <p>
              Built a hotel-system web App using reactjs, tailwindcss and weather
              API, this App allows users to Register, Login to the system and mainly
              book accomodation, see available rooms, check on services offered.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
