"use client";

import { AlbumEntry } from "@THTS/types/album/albumEntry";
import Button from "@THTS/UI/components/Button/Button";
import ChipStatus from "@THTS/UI/components/Chip/Chip";
import { Text } from "@THTS/UI/components/Text";
import Image from "next/image";
import Link from "next/link";
import { useQueryState } from "nuqs";
import { filterParsers } from "../../_data/albumSearchParams";
import { filterAlbum } from "./utils";
import { useAppDispatch, useAppSelector } from "@THTS/store/hooks";
import { toggleFavorite } from "@THTS/store/features/favorites/favoritesSlice";
import { Heart } from "lucide-react";
import cx from "classnames";

type AlbumListGridProps = {
  initialAlbums: AlbumEntry[];
};

const AlbumListGrid = ({ initialAlbums }: AlbumListGridProps) => {
  const [search] = useQueryState("search", filterParsers.search);
  const [genre] = useQueryState("genre", filterParsers.genre);
  const [year] = useQueryState("year", filterParsers.year);
  const [artist] = useQueryState("artist", filterParsers.artist);

  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites.items);

  const isFavorites = (album: AlbumEntry) =>
    favorites.some(
      (item) => item.id.attributes["im:id"] === album.id.attributes["im:id"],
    );

  const showFavorite = useAppSelector(
    (state) => state.favorites.showFavorite
  );

  const filteredAlbums = filterAlbum({
    albums:  showFavorite ? favorites : initialAlbums,
    query: { search, genre, year, artist },
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {filteredAlbums.map((album) => {
        const favorited = isFavorites(album);
        const albumImageLen = album["im:image"].length - 1;
        const coverImage = album["im:image"][albumImageLen].label;
        const albumName = album["im:name"].label;
        const artistName = album["im:artist"].label;
        const price = album["im:price"].label;
        const genre = album.category?.attributes?.label;
        const releaseRaw = album["im:releaseDate"].label;

        const releaseDate = new Date(releaseRaw).toLocaleDateString("it-IT", {
          year: "numeric",
          month: "short",
          day: "numeric",
        });
        const albumLink = album.link?.attributes?.href;
        const albumId = album.id.attributes["im:id"];

        return (
          <div
            key={albumId}
            className="w-full bg-white p-4 rounded-lg shadow-md grid grid-cols-1 gap-6 items-center bg-linear-to-r from-primary-100 to-warning-100 "
          >
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4">
              <div className="relative sm:min-w-28 sm:min-h-28 sm:max-w-28 sm:max-h-28 rounded-md overflow-hidden"> 
              <Image
                  src={coverImage}
                  alt={`${albumName} cover`}
                  height={112}
                  width={112}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <Text variant="body-md" className="font-semibold text-grey-900">
                  {albumName}
                </Text>
                <Text variant="caption" className="text-grey-600">
                  {artistName}{" "}
                </Text>
                <Text variant="caption" className="text-grey-700">
                  {releaseDate}
                </Text>
                <Text
                  variant="body-md"
                  className="font-medium text-primary-600"
                >
                  {price}
                </Text>
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-end">
              <ChipStatus label={genre} variant="info" className="w-fit" />
              <Button>
                <Link
                  href={albumLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ascolta su Apple Music
                </Link>
              </Button>

              <Heart
                onClick={() => dispatch(toggleFavorite(album))}
                aria-label={
                   favorited ? "Remove from favorite" : "Add to favorite"
                }
                className={cx("stroke-primary-500 cursor-pointer transition-all hover:scale-110", {
                  "fill-primary-300": favorited,
                })}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AlbumListGrid;
