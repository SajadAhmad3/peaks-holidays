export interface Destination {
    name: string;
    image: string;
    discount: string;
  }
  
  export const destinationsData: Destination[] = [
    { name: "Gulmarg", image: "/images/home/gulmarg.jpg", discount: "30% OFF" },
    { name: "Srinagar", image: "/images/home/dal-lake.jpg", discount: "25% OFF" },
    { name: "Sonmarg", image: "/images/home/sonamarg.jpg", discount: "35% OFF" },
    { name: "Pahalgam", image: "/images/home/pahalgam.jpg", discount: "30% OFF" },
    { name: "Ladakh", image: "/images/home/ladakh-ride.jpg", discount: "20% OFF" },
  ];
  