"use client";
import React from "react";
import Container from "../components/Container";
import Image from "next/image";
import { Phone, Mail, MapPin, CheckCircle, Headset } from "lucide-react";

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

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-10">
        {/* Info Cards (25% Width) */}
        <div className="col-span-1 hidden md:flex md:flex-col gap-4 order-2 md:order-1 ">
          <div className="bg-primary text-white p-5 rounded-lg shadow-md flex flex-col gap-2 max-w-[238px] md:max-w-full">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Headset /> Contact Details
            </h3>
            <div className="flex items-center gap-2">
              <Phone />
              <p className="mt-2"> +91 9596173535</p>
            </div>
            <div className="flex items-center gap-2 break-all">
              <Mail />
              <p>info@peaksholidays.com</p>
            </div>
          </div>
          <div className="bg-primary text-white p-5 rounded-lg shadow-md flex flex-col gap-2 max-w-[238px] md:max-w-full">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <CheckCircle /> Our Commitment
            </h3>
            <p className="mt-2">✅ Available 24/7 for your needs</p>
            <p>✅ Dedicated support team</p>
          </div>
          <div className="bg-primary text-white p-5 rounded-lg shadow-md flex flex-col gap-2 max-w-[238px] md:max-w-full">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <MapPin /> Office Location
            </h3>
            <p className="mt-2">
              Main Market Gulmarg, Baramulla, Jammu and Kashmir 193403
            </p>
          </div>
        </div>

        <div className="col-span-3 bg-black/80 shadow-lg rounded-lg overflow-hidden">
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
                  type="text"
                  placeholder="Choose a Date"
                  onFocus={(e) => (e.target.type = "date")}
                  onBlur={(e) => (e.target.type = "text")}
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
                className="w-full bg-primary hover:bg-opacity-80 transition duration-300 text-white px-6 py-4 font-bold rounded-lg shadow-md"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactForm;
