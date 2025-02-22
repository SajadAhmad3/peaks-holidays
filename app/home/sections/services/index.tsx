import Container from "@/app/components/Container";
import ServiceCard from "@/app/components/services/ServiceCard";
import { servicesData } from "@/app/utils/services/servicesData";
import React from "react";

const Services = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            Icon={service.Icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Services;
