import { create } from "zustand/react";

type FavoritesStore = {
  favoriteIds: string[],
  toggleFavorite(id: string): void
}

export const useFavoritesStore = create<FavoritesStore>( (setState, getState) => {
  return {
    favoriteIds: [],

    // "Action"
    toggleFavorite(id) {
      if (getState().favoriteIds.includes(id)) {
        // rausfiltern
        const newFavorites = getState().favoriteIds.filter(favId => favId !== id)
        setState({favoriteIds: newFavorites});
      } else {
        const newFavorites = getState().favoriteIds.concat(id);
        setState({favoriteIds: newFavorites});
      }
    }
  }

})