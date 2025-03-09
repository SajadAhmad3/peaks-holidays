import React from "react";
import Container from "../components/Container";
import Image from "next/image";

const ContactForm = () => {
  return (
    <Container className="flex flex-col justify-center items-center min-h-screen">
      <div className="relative w-full h-[200px] lg:h-[350px] ">
        <Image
          src={"/images/home/banner.jpg"}
          alt="Banner"
          className="object-cover w-full h-full brightness-50"
          layout="fill"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h2 className="text-xxl md:text-xxxl lg:text-4xl font-bold mb-4 text-white font-modicaMedium">
            Contact Us
          </h2>
        </div>
      </div>

      <div className="my-5 w-full max-w-3xl bg-black/80 shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          {/* Heading */}
          <h2 className="text-xxl font-bold text-center text-white-800">
            Get in Touch
          </h2>
          <p className="text-gray-300 text-center mb-6">
            We are actively catering to our clients. Drop us a line to start a
            conversation.
          </p>

          {/* Form */}
          <form className="text-white text-[18px] space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="border bg-transparent p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border bg-transparent p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="date"
                placeholder="Date"
                className="border bg-transparent p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition"
              />
              <input
                type="text"
                placeholder="Destination"
                className="border bg-transparent p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition"
              />
            </div>
            <div>
              <textarea
                placeholder="Special Request"
                rows={4}
                className="border bg-transparent p-4 w-full rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-secondary transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-secondary hover:bg-opacity-80 transition duration-300 text-white px-6 py-4 font-bold rounded-lg shadow-md"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default ContactForm;
