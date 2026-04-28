import PlantCardList from "./PlantCardList.tsx";
import { useSuspenseQuery } from "@tanstack/react-query";
import { PlantSchema } from "../types.ts";
import { plantsQueryOptions } from "./plantsQueryOptions.ts";

export default function AllPlantsList() {

  const result = useSuspenseQuery(plantsQueryOptions())
  const allPlants = result.data;

  // allPlants[600].name.toUpperCase()

  return  <div>
    <h2>Alle Pflanzen</h2>
    <PlantCardList plants={allPlants} />
  </div>
}