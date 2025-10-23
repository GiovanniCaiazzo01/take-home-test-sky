import { Suspense } from "react";
import Hero from "./_components/Hero";
import AlbumListGridSkeleton from "./_components/albumList/AlbumListGridSkeleton";
import { Text } from "@THTS/UI/components/Text";
import AlbumFilters from "./_components/albumList/AlbumFilters";
import { ListAlbumAction } from "@THTS/actions/albums.actions";
import AlbumList from "./_components/albumList/AlbumList";


export default async function Top100Album() {

  const response = await ListAlbumAction();
  if (!response?.success) {
    return <div className="p-8 text-center text-red-600">Error loading albums</div>;
  }

  const  initialAlbums = response.data.feed.entry
  return (
    <div className="flex flex-col gap-y-5">
      <Hero />
      <section className="p-6">
        <div className="flex justify-between items-center w-full pb-4">
          <Text variant="title-lg">
            Top 100 Albums
          </Text>
          <AlbumFilters />
        </div>
        <Suspense fallback={<AlbumListGridSkeleton />}>
          <AlbumList initialAlbums={initialAlbums} />
        </Suspense>
      </section>
    </div>
  );
}
