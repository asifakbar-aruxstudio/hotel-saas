import { locationData } from "../data/location";

// Get merged locations
export const getLocations = () => {
  const saved = JSON.parse(localStorage.getItem("locations")) || {};
  return { ...locationData, ...saved };
};

// Add new province/city (no duplicate)
export const addLocation = (province, city) => {
  const saved = JSON.parse(localStorage.getItem("locations")) || {};

  if (!saved[province]) {
    saved[province] = [];
  }

  if (!saved[province].includes(city)) {
    saved[province].push(city);
  }

  localStorage.setItem("locations", JSON.stringify(saved));
};


