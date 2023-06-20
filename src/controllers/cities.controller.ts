import { Request, Response } from "express";
import { v4 as uuidV4 } from "uuid";
import {
  getCities,
  getCityById,
  addCity,
  updateCity,
  deleteCity,
} from "../services/cities.service";

import { ValidateRequest } from "../middleware/bodyParser";
import { get } from "http";

export const getCitiesHandler = (req: Request, res: Response) => {
  try {
    const cities = getCities();
    res.json(cities);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getCitiesByIdHandler = (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const city = getCityById(id);
    if (city) {
      res.json(city);
    } else {
      res.status(404).json({ error: "City not found" });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const addCityHandler = [
  ValidateRequest,
  (req: Request, res: Response) => {
    try {
      const newCity = {
        id: uuidV4(),
        ...req.body,
      };
      const addedCity = addCity(newCity);
      res.json(addedCity);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },
];

export const updateCityHandler = [
  (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const updatedCity = updateCity(id, req.body);
      if (updatedCity) {
        res.json(updatedCity);
      } else {
        res.status(404).json({ error: "City not found" });
      }
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  },
];

export const deleteCityHandler = (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const deletedCity = deleteCity(id);
    if (deletedCity) {
      res.json(deletedCity);
    } else {
      res.status(404).json({ error: "City not found" });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};