import React from "react";
import aboutme from "../Photos/aboutme.jpg";

const About = () => {
  return (
    <div className="min-h-screen ">
      <section className="flex justify-center  flex-col items-center py-2">
        <h1 className="top-1 text-emerald-500 text-4xl font-bold  mt-4">
          ABOUT ME
        </h1>
        <p className="mt-4 font-medium text-xl mx-3 ">
          I'm Rabecca Phoshoko, a skilled software developer who graduated from
          Tshwane University of Technology (TUT) with a robust educational
          foundation in software development. With a passion for technology and
          a commitment to continuous learning, I have embarked on an exciting
          journey in the field of web development. I hold a diploma in software
          development from TUT, where I honed my programming skills and gained a
          deep understanding of software engineering principles. My academic
          achievements have provided me with a solid foundation for a successful
          career in the tech industry.
        </p>
      </section>
      <main className="grid grid-cols-2 py-2 mt-4 md:flex-row justify-center items-center ">
        {" "}
        <div className="flex justify-center">
          <img
            className="h-50 w-'40%' rounded-full "
            src={aboutme}
            alt="profile"
          />
        </div>
        <div className="mx-3">
          <h1 className="mb-3 font-semibold text-3xl ">
            Journey through Programming Languages
          </h1>
          <p className="text-l font-normal">
            <b>HTML and CSS:</b> I am highly confident in my HTML and CSS
            skills, possessing a strong foundation in web development. I can
            create well-structured, visually appealing web pages, and I am
            comfortable with styling and layout using CSS (specifically Tailwind
            CSS).
          </p>
          <br />
          <p className="text-l">
            <b>SQL, C++, and Java Basics:</b> In addition to my web development
            skills, I have a solid understanding of programming fundamentals
            through C++ and Java. While not an expert, I have a grasp of these
            languages, providing valuable insights into general software
            development principles.
          </p>
          <br />
          <h5 className="text-l">
            <b>React.js, Node.js, and React Native:</b> Currently, I am deeply
            immersed in the world of web development, with a primary focus on
            three key technologies: <br />
            React.js: I am actively learning and working with React.js, a
            popular JavaScript library for building user interfaces. My
            knowledge of HTML, CSS, and JavaScript foundations serves as a
            strong base for mastering React.js and creating interactive, dynamic
            interfaces.
            <br /> Node.js: I am also dedicating time to Node.js, a runtime
            environment that enables server-side JavaScript development. Node.js
            is crucial for building scalable and efficient backend systems for
            web applications. We have been tasked with integrating our project
            with APIs.
            <br /> React Native: Building upon my expertise in web development,
            I am extending my skills into mobile application development with
            React Native. This framework allows me to leverage my knowledge of
            React.js and JavaScript to create native mobile apps for both iOS
            and Android platforms.
          </h5>
        </div>
      </main>
    </div>
  );
};

export default About;
