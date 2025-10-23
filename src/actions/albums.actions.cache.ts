"use server";

import { unstable_cache } from "next/cache";
import { ListAlbumAction } from "./albums.actions";

export const ListAlbumActionCache = unstable_cache(
  ListAlbumAction,
  ["top-100-albums-list"],
  {
    revalidate: 3600,
    tags: ["top-100-albums"],
  },
);
