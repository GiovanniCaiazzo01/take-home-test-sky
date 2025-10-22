import { Label } from "./common";

type ImageAttributes = {
  height: string;
};

type AlbumEntryImage = {
  label: string;
  attributes: ImageAttributes;
};

type PriceAttributes = {
  amount: string;
  currency: string;
};

type AlbumEntryPrice = {
  label: string;
  attributes: PriceAttributes;
};

type ContentTypeAttributes = {
  term: string;
  label: string;
};

type AlbumEntryContentType = {
  "im:contentType": ContentTypeAttributes;
};

type LinkAttributes = {
  rel: string;
  type: string;
  href: string;
};

type AlbumEntryLink = {
  attributes: LinkAttributes;
};

type IdAttributes = {
  "im:id": string;
};

type AlbumEntryID = {
  label: string;
  attributes: IdAttributes;
};

type ArtistAttributes = {
  href: string;
};

type AlbumEntryArtist = {
  label: string;
  attributes: ArtistAttributes;
};

type CategoryAttributes = {
  "im:id": string;
  term: string;
  scheme: string;
  label: string;
};

type AlbumEntryCategory = {
  attributes: CategoryAttributes;
};

type AlbumEntryReleaseDate = {
  label: string;
  attributes: Label;
};

export type AlbumEntry = {
  "im:name": Label;
  "im:image": AlbumEntryImage[];
  "im:itemCount": Label;
  "im:price": AlbumEntryPrice;
  "im:contentType": AlbumEntryContentType;
  rights: Label;
  title: Label;
  link: AlbumEntryLink;
  id: AlbumEntryID;
  "im:artist": AlbumEntryArtist;
  category: AlbumEntryCategory;
  "im:releaseDate": AlbumEntryReleaseDate;
};
