import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center flex-col items-center bg-[url('')] py-8">
      <div className="mb-4 text-4xl text-emerald-500  font-bold">
        Get In Touch with me
      </div>
      <div className="mb-4">
        <form className="md:w-1/2 ">
          <input
            className="w-80 px-5 py-3 rounded-lg mb-2"
            placeholder="Name and Surname"
          />
          <br />
          <input
            className="w-80 px-5 py-3 rounded-lg mb-2"
            placeholder="Email"
          />
          <br />
          <input
            className="w-80 px-5 py-3 rounded-lg mb-2"
            placeholder="Contacts"
          />
          <br />
          <input
            className="w-80 px-5 py-3 rounded-lg mb-2"
            placeholder="Subject"
          />
          <br />
          <textarea
            className="w-80 px-5 py-3 rounded-lg mb-2"
            rows="3"
            placeholder="Send me a message"
          ></textarea>
          <button className="bg-teal-900 hover:bg-green-600 text-white px-4 py-2 rounded-lg items-center">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
