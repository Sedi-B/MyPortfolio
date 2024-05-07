import React from "react";

const Experience = () => {
  return (
    <div>
      <h1 className="top-1 text-black text-4xl font-bold  mt-4 text-center">
        EXPERIENCE
      </h1>
      <section className="grid grid-cols-2 mt-5">
        <div className="col-span-2 md:col-span-1 p-4">
          <div className="bg-gray-300 rounded-lg shadow-lg p-4 mb-4">
            <h2 className="text-xl font-bold">
              Company: Tswhane University of Technology
            </h2>
            <p>Position: Student Assistant</p>
            <p>Contract Period: July 2021 - May 2022</p>
            <p>
              Main Responsibilities: Assist student with basic computer literacy{" "}
              <br />
              Floor walking to assist students Handle I-centre clients’ basic
              queries <br />
              Ensure safety for centre assents Perform administrative tasks{" "}
              <br />
              Liaise with TUT staff and students Perform any other given
              relevant duties
            </p>
          </div>
        </div>

        <div className="col-span-2 md:col-span-1 p-4">
          <div className="bg-gray-300 rounded-lg shadow-lg p-4 mb-4">
            <h2 className="text-xl font-bold">
              Company:Limpopo Department of Cooperative Governance, Human
              Settlements and Traditional Affairs
            </h2>
            <p>Position: Experiential Student (WIL inservice-training)</p>
            <p>Contract Period: August 2022 - January 2023</p>
            <p>
              Main Responsibilities: Perform a cost benefit analysis to produce
              outline designs of new IT systems.
              <br /> Maintain new and existing systems. Maintain ICT Desktop
              Environment.
              <br /> Maintain Server Environment. <br />
              Maintain and provide 98 % ICT network infrastructure.
              <br />
              Develop user requirements for all new systems in the department
              and municipalities.
            </p>
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 p-4">
          <div className="bg-gray-300 rounded-lg shadow-lg p-4 mb-4">
            <h2 className="text-xl font-bold">
              Company: Tswhane University of Technology
            </h2>
            <p>Position:Student Assitant(Volunteered)</p>
            <p>Contract Period: January-February 2023</p>
            <p>
              Main Responsibilities: Recruiting student for the faculty of ICT
              <br />
              Floor walking to assist new entering students with registering.
              <br />
              To cope with registering queries
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
