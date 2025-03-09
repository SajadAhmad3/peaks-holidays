import React from "react";
import Image from "next/image";

interface DestinationProps {
  image: string;
  destinationName: string;
  description: string;
  activities: string[];
  slug: string;
}

const DestinationCard: React.FC<DestinationProps> = ({
  image,
  destinationName,
  description,
  activities,
}) => {
  return (
    <div className=" bg-gray-800 p-10 mb-8 mx-20">
      <div className="flex flex-col gap-10 lg:flex-row ">
        <div className="flex-1 transform duration-700 hover:scale-105">
          <Image
            src={image}
            alt={destinationName}
            layout="fill"
            priority
            className="object-cover w-full h-full max-h-[400px] rounded-lg"
          />
        </div>
        <div className="flex flex-col flex-1 text-white justify-between">
          <div>
            <h3 className="text-[16px] text-center md:text-start md:text-[20px] font-bold">
              {destinationName}
            </h3>
            <p className="text-[14px] font-light mb-6 hidden md:block">
              {description}
            </p>
            <div className="mb-6 hidden md:block">
              <h5 className="text-[16px] font-semibold mb-2 ">
                Activity Highlights:
              </h5>
              <ul className="list-disc list-inside text-[14px]">
                {activities.map((activity, idx) => (
                  <li key={idx}>{activity}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-center ">
            <button
              className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded"
              // onClick={handleBook}
            >
              Quick Enquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
