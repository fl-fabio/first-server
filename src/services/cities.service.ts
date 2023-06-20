import { City } from "../models/city.model";

const cities: City[] = [];

export const getCities = () => {
  return cities;
};

export const getCityById = (id: string) => {
  return cities.find((city: City) => city.id === id);
};

export const addCity = (city: City) => {
  cities.push(city);
  return city;
};

export const updateCity = (id: string, updateFields: Partial<City>) => {
  const index = cities.findIndex((city: City) => city.id === id);
  if (index !== -1) {
    cities[index] = { ...cities[index], ...updateFields };
    return cities[index];
  }
  return null;
};

export const deleteCity = (id: string) => {
  const index = cities.findIndex((city: City) => city.id === id);
  if (index !== -1) {
    const deletedCity = cities.splice(index, 1)[0];
    return deletedCity;
  }
  return null;
};
