type FiltersData = {
  filterName: string;
  filterSubtopics: string[];
};

export const filters: FiltersData[] = [
  {
    filterName: "Popular filters fro Doha",
    filterSubtopics: [
      "50% discount or more",
      "Breakfast included",
      "Old Doha City",
      "Free cancellation",
      "Pay at the hotel",
    ],
  },
  {
    filterName: "Property type",
    filterSubtopics: [
      "Entire apartment (101)",
      "Serviced apartment (7)",
      "Hotel (49)",
      "Resort (3)",
      "Hostel (1)",
      "Resort villa (1)",
      "Entire house (12)",
      "Entire villa (4)",
    ],
  },
  {
    filterName: "Sustainability",
    filterSubtopics: ["Travel sustainable property"],
  },
  {
    filterName: "Distance to center",
    filterSubtopics: [
      "Inside city center (14)",
      "<2 km to center (21)",
      "2-5 km to center (21)",
      "5-10 km to center (77)",
      ">10 km to center (42)",
    ],
  },
];
