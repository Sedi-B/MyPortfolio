import React from "react";
import aboutme from "../Photos/aboutme.jpg";

const About = () => {
  return (
    <div className="min-h-screen ">
      <section className="flex justify-center  flex-col items-center py-2">
        <h1 className="top-1 text-black text-4xl font-bold  mt-4">ABOUT ME</h1>
        <p className="mt-4 font-medium text-xl mx-3 ">
          Hello! I'm Ramaesela Rabecca Phoshoko, a passionate software developer
          with a Diploma in Information Technology from Tshwane University of
          Technology. My programming journey began during my studies, where i
          honed coding skills and gained a deep understanding of software
          engineering principles. My academic achievements have provided me with
          a solid foundation for a successful career in the tech industry. Eager
          to use my programming experience to work as systems frontend developer
          and to help in innovating solutions in the Tech Industry .
        </p>
      </section>
      <main className="grid grid-cols-2 py-2 md:flex-row justify-center items-center ">
        {" "}
        <div className="flex justify-center">
          <img className="h-85 w-85 rounded-full" src={aboutme} alt="profile" />
        </div>
        <div className="  grid grid-cols-2 mx-4">
          <div>
            <h1 className=" top-0 mb-3 font-semibold text-xl ">
              My Programming/Coding Journey
            </h1>
            <p>
              During my time as a software developer trainee at MLab, I honed my
              skills in web development and gained practical experience in
              building dynamic and user-friendly applications. This experience
              further fueled my enthusiasm for programming and encouraged me to
              continue learning and exploring new technologies.
            </p>
           <br/>
              <p>
                I am currently enrolled in LIMPOPO DIGITAL INNOVATION LAB, where
                I  am developing a keen interest and cultivating my passion for
                technology and gaining a valuable experience in bringing to life
                innovative solutions through Technology.
            
            </p>
          </div>
          <div>
            <h1 className="mb-3 font-semibold text-xl ">
              Skills That I have accquired...
            </h1>
            <ul className="list-disc ml-5">
              <li>
                <b>Programming Languages:</b> I have expertise in languages such
                as C++,Python, Java, JavaScript, HTML, and CSS, allowing me to
                develop robust and interactive web applications.
              </li>
              <li>
                <b> Frameworks:</b> I am proficient in using frameworks like
                React.js and ReactNative to enhance the functionality and design
                of my projects.
              </li>
              <li>
                <b>Database Management:</b> I have experience working with SQL
                databases, including MySQL and Firebase enabling me to manage
                and manipulate data effectively.
              </li>
              <li>
                <b> Version Control:</b> I am familiar with Git, which I use to
                track changes in my projects and collaborate with other
                developers.
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
