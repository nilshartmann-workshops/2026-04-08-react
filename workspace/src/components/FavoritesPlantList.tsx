import { useFavoritesStore } from "./useFavoritesStore.ts";
import { Plant } from "../types.ts";
import PlantCardList from "./PlantCardList.tsx";

type FavoritesPlantListProps = {
  allPlants: Plant[]
}
export default function FavoritesPlantList({allPlants}: FavoritesPlantListProps) {
  const store = useFavoritesStore();

  const favoritePlants = allPlants.filter(plant => store.favoriteIds.includes(plant.id));

  return <div>
  <h2>Meine Favoriten</h2>

  {favoritePlants.length === 0 ? (
    <p>Noch keine Favoriten ausgewählt.</p>
  ) : (
    <PlantCardList plants={favoritePlants} />
  )}
  </div>
}