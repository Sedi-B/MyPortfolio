import React from "react";

const Contact = () => {
  return (
    <section className="flex justify-center flex-col items-center bg-[url('')] py-8">
      <div className="top-1 text-black text-4xl mt-4 align-middle font-bold">
        Get In Touch...
      </div>

      <div className="bg-gray-200 p-8 md:w-1/2 rounded-lg">
        <h2 className="text-xl font-bold mb-4 align-middle">
          Contact Information
        </h2>
        <p className="mb-2">
          <span className="font-bold">Email:</span> phoshokorr@gmail.com
        </p>
        <p className="mb-2">
          <span className="font-bold">Phone:</span> 076-621-1705
        </p>
        <p className="mb-2">
          <span className="font-bold">Address:</span> 24 Schoeman Street,
          Polokwane
        </p>
      </div>
      <div className="bg-gray-200 p-8 md:w-1/2 rounded-lg my-2 shadow-lg">
        <h2 className="text-xl text-center font-bold mb-4 align-middle">
          Contact Form
        </h2>
        <form action="/api/Contact" method="POST" className="md:w-full">
          <label htmlFor="name" className="block mb-2">Name and Surname</label>
          <input
            id="name"
            type="text"
            className="w-full px-4 py-2 rounded-lg mb-2 bg-transparent border border-gray-500"
            placeholder="Name and Surname"
          />
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-2 rounded-lg mb-2 bg-transparent border border-gray-500"
            placeholder="Email"
          />
          <label htmlFor="contacts" className="block mb-2">Contacts</label>
          <input
            id="contacts"
            type="text"
            className="w-full px-4 py-2 rounded-lg mb-2 bg-transparent border border-gray-500"
            placeholder="Contacts"
          />
          <label htmlFor="message" className="block mb-2">Message</label>
          <textarea
            id="message"
            className="w-full px-4 py-2 rounded-lg mb-2 bg-transparent border border-gray-500"
            rows="3"
            placeholder="Send me a message"
          ></textarea>
          <button className="flex justify-center bg-teal-900 hover:bg-green-600 text-white px-4 py-2 rounded-lg items-center">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
