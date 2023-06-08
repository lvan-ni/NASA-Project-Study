import { planets } from "../../models/planets.model";
import { planetsRouter } from "./planets.router";

const getAllPlanets = (req, res) => {
  return res.status(200).json(planets);

}

export { getAllPlanets };