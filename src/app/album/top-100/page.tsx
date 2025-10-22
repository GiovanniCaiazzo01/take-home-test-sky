import { Suspense } from "react";
import Hero from "./_components/Hero";
import AlbumList from "./_components/albumList/AlbumList";
import AlbumListGridSkeleton from "./_components/albumList/AlbumListGridSkeleton";
import { Text } from "@THTS/UI/components/Text";

export default function Top100Album() {
  return (
    <div className="flex flex-col gap-y-5">
    <Hero />
    <section className="p-6">
    <Text variant="title-lg" className="mb-4">
    Top 100 Albums
    </Text>


    <Suspense fallback={<AlbumListGridSkeleton />}>

    <AlbumList />
    </Suspense>
    </section>
    </div>
  );
}
