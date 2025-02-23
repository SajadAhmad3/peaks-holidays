import Container from "@/app/components/Container";
import PackageCard from "@/app/components/packages/packageCard";
import { Heading } from "@/app/elements/Heading";
import { packagesData } from "@/app/utils/packages/packagesData";
import React from "react";

const Packages = () => {
  return (
    <Container className="mb-10">
      <Heading title="PACKAGES" description="Awesome Packages" />

      {/* Grid Layout */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        {packagesData.slice(0, 6).map((pkg, index) => (
          <PackageCard key={index} {...pkg} />
        ))}
      </div>
    </Container>
  );
};

export default Packages;
