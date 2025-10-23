"use client";

import { AlbumEntry } from "@THTS/types/album/albumEntry";
import AlbumListGrid from "./AlbumListGrid";
import { useQueryState } from "nuqs";
import { filterParsers } from "../../_data/albumSearchParams";
import { filterAlbum } from "../../utils";

type AlbumListProps = {
  initialAlbums: AlbumEntry[];
};

const AlbumList = ({ initialAlbums }: AlbumListProps) => {
  const [search] = useQueryState("search", filterParsers.search);

  const filteredAlbums = filterAlbum({
    albums: initialAlbums,
    query: { search }, 
  });

return (
    <AlbumListGrid initialAlbums={filteredAlbums} />
  );
};

export default AlbumList;
