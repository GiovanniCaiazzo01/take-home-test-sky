import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavoritesState } from "./types";
import { AlbumEntry } from "@THTS/types/album/albumEntry";

const initialState: FavoritesState = {
  items: [],
  showFavorite: false 
};
const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleShowFavorite: (state) => {
      state.showFavorite = !state.showFavorite
    },
    toggleFavorite: (state, action: PayloadAction<AlbumEntry>) => {
      const exists = state.items.find(
        (item) =>
          item.id.attributes["im:id"] === action.payload.id.attributes["im:id"],
      );
      if (exists) {
        state.items = state.items.filter(
          (item) =>
            item.id.attributes["im:id"] !==
            action.payload.id.attributes["im:id"],
        );
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite, toggleShowFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
