import React from "react";

const Education = () => {
  return (
    <section className="py-12f lex-col">
      <div>
        {" "}
        <h2 className=" top-0 text-emerald-500 text-4xl font-bold  mt-4 justify-center flex">
          Education
        </h2>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className=" bg-gray-200 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              High School
            </h3>
            <p className="text-lg  font-semibold">
              Mountainview Senior Secondary School
            </p>
            <p className="text-lg">Graduation Year: 2017</p>
            <h4>
              Subjects:
              <ul>
                <li></li>
                Sepedi<li> English</li> <li>Mathematics </li>
                <li>Life Sciences </li> <li>Agriculture Physical</li>
                <li>Sciences</li>
              </ul>
            </h4>
          </div>
          <div className="bg-gray-200 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Tertiary Education
            </h3>
            <p className="text-lg font-semibold">
              Tswhane University of Technology
            </p>
            <p className="text-lg">
              Diploma in Information Technology Software Development:{" "}
            </p>
            <p className="text-lg">Year Obtained: 2022</p>
          </div>{" "}
          <div className="bg-gray-200 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Other Education Program
            </h3>
            <p className="text-lg  font-semibold">mlab CodeTribe Academy</p>
            <p className="text-lg">Software development programme.</p>
            <h6>
              {" "}
              The coding programme provides training and work experience to
              talented youth in the townships to develop – Android, iOS, and Web
              solutions. Participants are also up-skilled in cloud technologies,
              scrum agile project management, and other soft skills to drive
              employment and self-employment.
            </h6>
            <p className="text-lg">Enrolled in June to November 2023</p>
          </div>
          <div className="bg-gray-200 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Tertiary Education
            </h3>
            <p className="text-lg font-semibold">
              Tswhane University of Technology
            </p>
            <p className="text-lg">Advance Dimploma in Computer Science : </p>
            <p className="text-lg">Year Obtained: Currently Enrolling</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
