import { AlbumEntry } from "@THTS/types/album/albumEntry";
import { FilterParsers } from "../../_data/albumSearchParams";

type FilterAlbumProps = {
  query: FilterParsers;
  albums: AlbumEntry[];
};

export const filterAlbum = ({
  query,
  albums,
}: FilterAlbumProps): AlbumEntry[] => {
  if (!albums || albums.length === 0) {
    return [];
  }

  return albums.filter((album) => {
    if (query.search) {
      const searchLower = query.search.toLowerCase();
      const albumNameMatch = album["im:name"].label
        .toLowerCase()
        .includes(searchLower);

      if (!albumNameMatch) return false;
    }

    if (query.artist) {
      const artistLower = query.artist.toLowerCase();
      const artistMatch = album["im:artist"].label
        .toLowerCase()
        .includes(artistLower);

      if (!artistMatch) return false;
    }

    if (query.genre && query.genre.length > 0) {
      const genreMatch = query.genre.includes(album.category.attributes.label);

      if (!genreMatch) return false;
    }

    if (query.year) {
      const albumYear = new Date(album["im:releaseDate"].label)
        .getFullYear()
        .toString();

      if (albumYear !== query.year) return false;
    }

    return true;
  });
};
