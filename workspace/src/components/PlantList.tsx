import { Plant, PlantSchema } from "../types.ts";
import PlantCardList from "./PlantCardList.tsx";
import { useFavoritesStore } from "./useFavoritesStore.ts";
import { useSuspenseQuery } from "@tanstack/react-query";



export default function PlantList() {

  const result = useSuspenseQuery({
    queryKey: ["plants"],
    async queryFn() {
      const response = await fetch("http://localhost:7200/api/plants");
      const allPlants = await response.json();
      return PlantSchema.array().parse(allPlants);
    }
  })

  const allPlants = result.data;


  const store = useFavoritesStore();

  const favoritePlants = allPlants.filter(plant => store.favoriteIds.includes(plant.id));


  return (
      <div className={"PlantList"}>
        <div>
          <h2>Alle Pflanzen</h2>
          <PlantCardList plants={allPlants} />
        </div>

        <div>
          <h2>Meine Favoriten</h2>

          {favoritePlants.length === 0 ? (
            <p>Noch keine Favoriten ausgewählt.</p>
          ) : (
            <PlantCardList plants={favoritePlants} />
          )}
        </div>

      </div>
  );
}
