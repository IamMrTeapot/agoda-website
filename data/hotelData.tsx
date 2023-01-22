export type HotelData = {
  hotelName: string;
  stars: string;
  location: string;
  price: string;
  tags: string[];
  rating: string;
  reviews: string;
};

export const hotelData: HotelData[] = [
  {
    hotelName: "Waldorf Astoria Lusail, Doha",
    stars: "4",
    location: "Bangkok, Thailand",
    price: "2,000",
    tags: ["Breakfast", "Dinner Included"],
    rating: "8.5",
    reviews: "101",
  },
  {
    hotelName: "Horizon Manor Hotel",
    stars: "4",
    location: "Songkla, Thailand",
    price: "3,000",
    tags: ["Breakfast", "Swimming pool"],
    rating: "8.2",
    reviews: "10",
  },
  {
    hotelName: "Malibu Residence Lusail",
    stars: "5",
    location: "Singapore, Singapore",
    price: "5,000",
    tags: ["Parking", "Free WiFi"],
    rating: "9.4",
    reviews: "28",
  },
  {
    hotelName: "Park Hyatt Doha",
    stars: "3",
    location: "Musherib, Doha - City center",
    price: "5,500",
    tags: ["Breakfast", "Dinner Included", "Free WiFi"],
    rating: "7.9",
    reviews: "9",
  },
  {
    hotelName: "Romantic arina Getaway",
    stars: "5",
    location: "ChinaTOwn, Malaysia",
    price: "7,500",
    tags: ["Gym", "Pool", "Internet"],
    rating: "8.5",
    reviews: "101",
  },
  {
    hotelName: "Axios Postman Club",
    stars: "6",
    location: "Rest API, Internet of thing",
    price: "15,000",
    tags: ["Free API", "No sponsored"],
    rating: "9.9",
    reviews: "9000+",
  },
];
