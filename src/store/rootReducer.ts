import { combineReducers } from "@reduxjs/toolkit";
import favoritesReducer from "./features/favorites/favoritesSlice";

export const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
