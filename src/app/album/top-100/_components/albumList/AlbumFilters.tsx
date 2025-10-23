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

  return (
    <section
      className="flex max-w-[480px] flex-col animate-fade-in-up"
      data-pending={isPending ? "" : undefined}
    >
      <div className="relative flex items-center h-12">
        <span
          className="absolute left-4 text-grey-400 pointer-events-none"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
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
        </span>

        <label htmlFor="album-search" className="sr-only">
          Cerca album
        </label>
        <input
          id="album-search"
          type="search"
          placeholder="Search…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-full bg-grey-100 py-3 pl-12 pr-12 text-lg text-grey-700 outline-none ring-1 ring-grey-300 focus:ring-2 focus:ring-primary-400 transition duration-200"
          autoComplete="off"
          inputMode="search"
          enterKeyHint="search"
          aria-busy={isPending}
        />

        {search && (
          <button
            type="button"
            onClick={() => setSearch("")}
            className="absolute right-3 px-2 text-grey-500 hover:text-grey-700"
            aria-label="Pulisci ricerca"
          >
            ×
          </button>
        )}
      </div>
    </section>
  );
}
