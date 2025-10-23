import { Suspense } from "react";
import Hero from "./_components/Hero";
import AlbumListGridSkeleton from "./_components/albumList/AlbumListGridSkeleton";
import { Text } from "@THTS/UI/components/Text";
import AlbumFilters from "./_components/albumList/AlbumFilters";
import AlbumList from "./_components/albumList/AlbumList";

export default async function Top100Album() {

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
          <AlbumList/>
        </Suspense>
      </section>
    </div>
  );
}
