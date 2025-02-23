import React from "react";
import Image from "next/image";
import { MapPin, Calendar, Users } from "lucide-react";

interface PackageProps {
  title: string;
  image: string;
  location: string;
  duration: string;
  people: string;
  price: string;
}

const PackageCard: React.FC<PackageProps> = ({
  title,
  image,
  location,
  duration,
  people,
  price,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="hover:scale-105 transition-all duration-300 cursor-pointer"
        />
      </div>

      {/* Package Details */}
      <div className="p-4">
        {/* Location, Duration, People */}
        <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
          <div className="flex items-center gap-1">
            <MapPin size={16} className="text-green-600" />
            <span className="text-md font-semibold">{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={16} className="text-green-600" />
            <span className="text-md font-semibold">{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={16} className="text-green-600" />
            <span className="text-md font-semibold">{people}</span>
          </div>
        </div>

        {/* Price and Title */}
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-xl font-bold text-green-600 mt-1">${price}</p>

        {/* Buttons */}
        <div className="flex gap-2 mt-4">
          <button className="w-1/2 px-3 py-2 bg-gray-200 text-gray-800 font-medium rounded-md hover:bg-gray-300">
            Read More
          </button>
          <button className="w-1/2 px-3 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
