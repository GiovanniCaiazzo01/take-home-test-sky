import { AlbumEntry } from "./albumEntry";
import { Author } from "./author";
import { Label } from "./common";
import { FeedLink } from "./feedLink";

export interface AlbumFeed {
  feed: {
    author: Author;
    entry: AlbumEntry[];
    updated: Label;
    rights: Label;
    title: Label;
    icon: Label;
    link: FeedLink[];
    id: Label;
  };
}
