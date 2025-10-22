import { ListAlbumAction } from "@THTS/actions/albums.actions";
import AlbumListGrid from "./AlbumListGrid";

const AlbumList = async () => {
  const response = await ListAlbumAction();

  if (!response.success)
    return (
      <div className="p-8 text-center text-red-600">Error loading albums</div>
    );

  const albumsEntry = response.data.feed.entry;
  return <AlbumListGrid albums={albumsEntry} />;
};

export default AlbumList;
