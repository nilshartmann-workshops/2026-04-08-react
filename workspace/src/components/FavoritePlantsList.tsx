import { useSuspenseQuery } from "@tanstack/react-query";
import { PlantSchema } from "../types.ts";
import { useFavoritesStore } from "./useFavoritesStore.ts";
import PlantCardList from "./PlantCardList.tsx";
import { plantsQueryOptions } from "./plantsQueryOptions.ts";

export default function FavoritePlantsList() {

  const store = useFavoritesStore();
  const result = useSuspenseQuery(
    {
      ...plantsQueryOptions(),
      select(allPlants) {
        console.log("FavoriteIds", store.favoriteIds);
        return allPlants.filter(plant => store.favoriteIds.includes(plant.id))
    }}
  );

  const favoritePlants = result.data;


  return  <div>
    <h2>Meine Favoriten</h2>

    {favoritePlants.length === 0 ? (
      <p>Noch keine Favoriten ausgewählt.</p>
    ) : (
      <PlantCardList plants={favoritePlants} />
    )}
  </div>
}