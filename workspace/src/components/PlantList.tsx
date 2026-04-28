import { Plant, PlantSchema } from "../types.ts";
import PlantCardList from "./PlantCardList.tsx";
import { useFavoritesStore } from "./useFavoritesStore.ts";
import { useSuspenseQuery } from "@tanstack/react-query";
import AllPlantsList from "./AllPlantsList.tsx";
import FavoritePlantsList from "./FavoritePlantsList.tsx";



export default function PlantList() {


  return (
      <div className={"PlantList"}>

        <AllPlantsList />
        <FavoritePlantsList />

      </div>
  );
}
