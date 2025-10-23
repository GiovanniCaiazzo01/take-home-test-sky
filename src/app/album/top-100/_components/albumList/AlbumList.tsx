"use server";

import AlbumListGrid from "./AlbumListGrid";
import AlbumFiltersWrapper from "./AlbumFiltersWrapper";
import { ListAlbumActionCache } from "@THTS/actions/albums.actions.cache";

const AlbumList = async () => {
  const response = await ListAlbumActionCache();
  if (!response?.success) {
    return (
      <div className="p-8 text-center text-red-600">Error loading albums</div>
    );
  }

  const initialAlbums = response.data.feed.entry;

  return (
    <>
      <AlbumFiltersWrapper />
      <AlbumListGrid initialAlbums={initialAlbums} />
    </>
  );
};

export default AlbumList;
