"use server";

import { AlbumFeed } from "@THTS/types/album/albumFeed";
import { ErrorType, SuccessType } from "@THTS/types/api/apiResponse";

const ENDPOINT = "https://itunes.apple.com/us/rss/topalbums/limit=100/json";

export const ListAlbumAction = async (): Promise<
  SuccessType<AlbumFeed> | ErrorType
> => {
  try {
    const res = await fetch(ENDPOINT, { method: "GET" });

    if (!res.ok) {
      return {
        success: false,
        error: {
          message: `HTTP error: ${res.status} ${res.statusText}`,
        },
      };
    }

    const albumFeedResponse: AlbumFeed = await res.json();

    return { success: true, data: albumFeedResponse };
  } catch (error) {
    console.error("[ListAlbumAction] server error", error);

    const errorMessage =
      error instanceof Error
        ? `[message]: ${error.message}\n[name]: ${error.name}\n[cause]: ${error?.cause}`
        : "An error occured in [ListAlbumAction] while retrieving list of album";

    return { success: false, error: { message: errorMessage } };
  }
};
