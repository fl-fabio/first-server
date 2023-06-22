import { City } from "../models/city.model";
import { PaginatedResponse } from "../types/paginatedResponse.interface";
import { getAll } from "../utils/common.functions";

const cities: City[] = [
  {
    id: "123",
    name: "Biancavilla",
    province: "Catania",
    center: "Una via a caso"
  }, {
    id: "124",
    name: "Brighton",
    province: "London",
    center: "Califfo Street"
  }
];

/* export const getCities = () => {
  return cities;
}; */

export const getInitialCities = () => {
  return cities;
}
export const getCities = (query: {[key:string]:string}):PaginatedResponse<City>  => {
  return getAll<City>(cities, ['name'], query);
}

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
