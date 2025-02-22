import React, { ElementType } from "react";

type cardPrps = {
  title: string;
  description: string;
  Icon: ElementType;
};

const ServiceCard = ({ title, description, Icon }: cardPrps) => {
  return (
    <div className="flex flex-col gap-2 bg-white p-4 shadow-md hover:bg-secondary-50">
      <Icon />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
