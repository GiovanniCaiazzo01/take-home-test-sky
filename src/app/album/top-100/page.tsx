import { Suspense } from "react";
import Hero from "./_components/Hero";
import AlbumList from "./_components/AlbumList";

export default function Top100Album() {
  return (
    <div className="flex flex-col gap-y-5">
      <Hero />
      <Suspense fallback={<div>loading...</div>}>
        <AlbumList />
      </Suspense>
    </div>
  );
}
