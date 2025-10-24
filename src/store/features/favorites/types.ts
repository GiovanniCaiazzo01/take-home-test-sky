import { AlbumEntry } from "../../../types/album/albumEntry";

export interface FavoritesState {
  items: AlbumEntry[];
  showFavorite: boolean;
}
