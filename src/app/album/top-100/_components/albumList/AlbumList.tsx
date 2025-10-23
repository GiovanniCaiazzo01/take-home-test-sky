"use server"

import { ListAlbumAction } from "@THTS/actions/albums.actions";
import AlbumListGrid from "./AlbumListGrid";
import { cacheTag, cacheLife } from "next/cache";

const AlbumList = async () => {
"use cache"
cacheTag("top-100-albums")
cacheLife("seconds")

const response = await ListAlbumAction();
  if (!response?.success) {
    return <div className="p-8 text-center text-red-600">Error loading albums</div>;
  }

  const initialAlbums = response.data.feed.entry

  return (
    <AlbumListGrid initialAlbums={initialAlbums} />
  );
};

export default AlbumList;

