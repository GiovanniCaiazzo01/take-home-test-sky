import { Suspense } from "react";
import Hero from "./_components/Hero";
import AlbumListGridSkeleton from "./_components/albumList/AlbumListGridSkeleton";
import { Text } from "@THTS/UI/components/Text";
import AlbumList from "./_components/albumList/AlbumList";

export default async function Top100Album() {
  return (
    <div className="flex flex-col gap-y-5">
      <Hero />
        <div className="flex justify-between items-center w-full pb-4">
          <Text variant="title-lg">Top 100 Albums</Text>
        </div>
        <Suspense fallback={<AlbumListGridSkeleton />}>
          <AlbumList />
        </Suspense>
    </div>
  );
}
