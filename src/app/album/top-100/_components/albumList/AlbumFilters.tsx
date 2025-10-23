"use client";

import { useTransition } from "react";
import { useQueryState } from "nuqs";
import { filterParsers } from "../../_data/albumSearchParams";

export default function AlbumFilters() {
  const [isPending, startTransition] = useTransition();

  const [search, setSearch] = useQueryState(
    "search",
    filterParsers.search.withOptions({
      startTransition,
      clearOnDefault: true,
      throttleMs: 250,
      history: "replace",
    }),
  );

  const [artist, setArtist] = useQueryState(
    "artist",
    filterParsers.artist.withOptions({
      startTransition,
      clearOnDefault: true,
      throttleMs: 250,
      history: "replace",
    }),
  );

  const searchIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );

  const artistIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 10h-2m0 0H9m3 0a3 3 0 11-6 0 3 3 0 016 0zM9 19c-3.314 0-6 1.343-6 3v1h12v-1c0-1.657-2.686-3-6-3z"
      />
    </svg>
  );

  return (
    <section
      className="flex flex-col md:flex-row gap-1 md:gap-4"
      data-pending={isPending ? "" : undefined}
    >
      <div className="relative flex items-center h-12">
        <span
          className="absolute left-4 text-grey-400 pointer-events-none"
          aria-hidden="true"
        >
          {searchIcon}
        </span>

        <label htmlFor="album-search" className="sr-only">
          Search album
        </label>
        <input
          id="album-search"
          type="search"
          placeholder="Search album…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-full bg-grey-100 py-1 pl-12 pr-12 text-lg text-grey-700 outline-none ring-1 ring-grey-300 focus:ring-2 focus:ring-primary-400 transition duration-200"
          autoComplete="off"
          inputMode="search"
          enterKeyHint="search"
          aria-busy={isPending}
        />
      </div>

      <div className="relative flex items-center h-12">
        <span
          className="absolute left-4 text-grey-400 pointer-events-none"
          aria-hidden="true"
        >
          {artistIcon}
        </span>

        <label htmlFor="album-search" className="sr-only">
          Search artist
        </label>
        <input
          id="artist-search"
          type="search"
          placeholder="Search artist…"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          className="w-full rounded-full bg-grey-100 py-1 pl-12 pr-12 text-lg text-grey-700 outline-none ring-1 ring-grey-300 focus:ring-2 focus:ring-primary-400 transition duration-200"
          autoComplete="off"
          inputMode="search"
          enterKeyHint="search"
          aria-busy={isPending}
        />
      </div>
    </section>
  );
}
