import Container from "@/app/components/Container";
import React from "react";
import Image from "next/image";
const ContactUs = () => {
  return (
    <Container className="mb-10 ">
      <div className="relative w-full h-[100vh] overflow-hidden">
        <div className="w-full h-full overflow-hidden">
          <Image
            src="/images/home/banner.jpg"
            alt="Banner"
            fill
            priority
            className="object-cover w-full h-full brightness-50"
          />
        </div>
        <div className="absolute inset-0 z-10 grid grid-cols-1 md:grid-cols-2 items-center px-10 text-white">
          <div>
            <p>Booking</p>
            <h2>Online Booking</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptates voluptate dolore esse magnam ad et harum delectus quo
              eveniet, blanditiis, id temporibus iste.
            </p>
            <button>Read More</button>
          </div>
          <form className="border p-4 rounded-lg text-black">
            <div className="grid grid-cols-2 gap-4 mb-3">
              <input
                type="text"
                placeholder="Your Name"
                className="border bg-transparent p-2"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border bg-transparent p-2"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-3">
              <input
                type="text"
                placeholder="Date & Time"
                className="border bg-transparent p-2"
              />
              <input
                type="email"
                placeholder="Destination"
                className="border bg-transparent p-2"
              />
            </div>
            <div className="mb-3">
              <textarea
                placeholder="Special Request"
                rows={3}
                className="border bg-transparent p-2 w-full"
              ></textarea>
            </div>
            <button type="submit" className="w-full text-white">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
