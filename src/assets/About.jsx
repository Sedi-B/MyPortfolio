import React from "react";
import aboutme from "../Photos/aboutme.jpg";

const About = () => {
  return (
    <div className="min-h-screen ">
      <section className="flex justify-center  flex-col items-center py-2">
        <h1 className="top-1 text-emerald-500 text-4xl font-bold  mt-4">
          ABOUT ME
        </h1>
        <p className="mt-4 font-medium text-xl">
          I'm Rabecca Phoshoko, a skilled software developer who graduated from
          Tshwane University of Technology (TUT) with a strong educational
          foundation in software development. With a passion for technology and
          a commitment to continuous learning, I have embarked on an exciting
          journey in the field of web development. I have Diploma in software
          development from TUT, where I honed my programming skills and gained a
          deep understanding of software engineering principles. My academic
          achievements have provided me with a solid foundation for a successful
          career in the tech industry.
        </p>
      </section>
      <main className="grid grid-cols-2 py-2 mt-4 md:flex-row justify-center items-center ">
        {" "}
        <div className="flex justify-center">
          <img className="h-50 w-50 rounded-full" src={aboutme} alt="profile" />
        </div>
        <div>
          <h1 className="mb-3 font-semibold text-3xl ">
            Journey through Programming Languages
          </h1>
          <p className="text-xl font-normal">
            <b>HTML and CSS :</b> i am highly confident with HTML and CSS
            skills, having a strong foundation in web development. i can create
            well-structured, visually appealing web pages, and i am comfortable
            with styling and layout using CSS(tailwindcss)
          </p>
          <br />
          <p className="text-xl">
            <b>SQL, C++ and Java Basics:</b> Adding to my web development
            skills, I also have a solid understanding of programming
            fundamentals basics through C++ and Java. While not an expert, i
            have a grasp of these languages, which provides with valuable
            insights into general software development principles.
          </p>
          <br />
          <h5 className="text-xl">
            <b> React.js, Node.js, and React Native:</b> Currently, i am deeply
            immersed in the world of web development, with a primary focus on
            three key technologies: React.js: I am now actively learning and
            working with React.js, a popular JavaScript library for building
            user interfaces. With the knowledge of HTML, CSS, and JavaScript
            foundations serves as a strong base for mastering React.js and
            creating interactive, dynamic Node.js: You are also dedicating time
            to Node.js, a runtime environment that enables server-side
            JavaScript development. Node.js is crucial for building scalable and
            efficient backend systems for web applications, We have been tasked
            to integrate out project with API's.
          </h5>
        </div>
      </main>
    </div>
  );
};

export default About;
