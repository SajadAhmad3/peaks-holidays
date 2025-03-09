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
  {
    name: "Ladakh",
    image: "/images/home/ladakh-ride.jpg",
    discount: "20% OFF",
  },
];

export const destinations = [
  {
    slug: "gulmarg",
    destinationName: "Gulmarg",
    image: "/images/home/gulmarg.jpg",
    description: "A paradise for skiing and adventure lovers.",
    activities: ["Skiing", "Gondola Ride", "Trekking", "Snowboarding"],
  },
  {
    slug: "pahalgam",
    destinationName: "Pahalgam",
    image: "/images/home/pahalgam.jpg",
    description: "A beautiful valley with lush green meadows and rivers.",
    activities: ["River Rafting", "Trekking", "Fishing", "Camping"],
  },
  {
    slug: "sonamarg",
    destinationName: "Sonamarg",
    image: "/images/home/sonamarg.jpg",
    description: "Known as the 'Meadow of Gold', offering stunning views.",
    activities: [
      "Thajiwas Glacier Visit",
      "Camping",
      "Horse Riding",
      "Fishing",
    ],
  },
  {
    slug: "ladakh",
    destinationName: "Ladakh",
    image: "/images/home/ladakh-ride.jpg",
    description: "Known as the 'Meadow of Gold', offering stunning views.",
    activities: [
      "Thajiwas Glacier Visit",
      "Camping",
      "Horse Riding",
      "Fishing",
    ],
  },
];
