import { Mountain, Compass, Plane, Camera, Map, TreePalm, Ship, Tent } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  Icon: React.ElementType;
}

export const servicesData: Service[] = [
  { title: "Mountain Treks", description: "Explore the majestic mountains.", Icon: Mountain },
  { title: "Guided Tours", description: "Expert guides for your journey.", Icon: Compass },
  { title: "Flight Booking", description: "Hassle-free flight arrangements.", Icon: Plane },
  { title: "Photography", description: "Capture memories with professionals.", Icon: Camera },
  { title: "Route Planning", description: "Custom travel itineraries.", Icon: Map },
  { title: "Beach Tours", description: "Relax by the serene beaches.", Icon: TreePalm },
  { title: "Cruise Trips", description: "Luxury cruise experiences.", Icon: Ship },
  { title: "Camping", description: "Adventure camping in nature.", Icon: Tent },
];
