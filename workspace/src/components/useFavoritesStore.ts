import { create } from "zustand/react";

type FavoritesStore = {
  readonly favoriteIds: string[],
  toggleFavorite(id: string): void
  resetFavorites(): void
}

export const useFavoritesStore = create<FavoritesStore>( (setState, getState) => {
  return {
    favoriteIds: ["1"],

    resetFavorites() {
      setState({favoriteIds: []})
    },

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