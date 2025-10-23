import {
  createSearchParamsCache,
  parseAsString,
  parseAsArrayOf,
} from "nuqs/server";

export const filterParsers = {
  genre: parseAsArrayOf(parseAsString).withDefault([]),
  artist: parseAsString.withDefault(""),
  year: parseAsString.withDefault(""),
  search: parseAsString.withDefault(""),
} as const;

export const searchParamsCache = createSearchParamsCache(filterParsers);

export type ParsedSearchParams = ReturnType<typeof searchParamsCache.parse>;


