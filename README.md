---

# Sky Music — Top 100 Albums (Next.js + Redux + Styled-Components)

A small, production-ready web app that lists the **Top 100 albums** from the iTunes RSS feed, with a clean responsive UI, client-side filters, and a persistent **Favorites** feature.

> Feed: `https://itunes.apple.com/us/rss/topalbums/limit=100/json`

## Demo routes

* **Top 100 Albums:** `/album/top-100`

The app uses Next.js **App Router** with SSR/Suspense and a skeleton while loading.

---

## Tech stack

* **Framework:** Next.js **15** (App Router) + React 19 + TypeScript
* **Styling:** **styled-components v6** (design tokens/components) + Tailwind CSS v4 (layout utilities)
* **State:** **Redux Toolkit** + **redux-persist** (Favorites survive page reloads)
* **URL state:** `nuqs` (search & filters in the query string)
* **HTTP & caching:** Next.js `fetch` with `revalidate` + `unstable_cache`
* **Icons:** `lucide-react`
* **E2E & a11y testing:** **Cypress** + `@testing-library/cypress` + `cypress-axe`
* **DX:** Biome (lint) + Prettier (w/ Tailwind plugin)

---

## Features

* ✅ **Top 100 feed** rendered server-side from the iTunes RSS JSON
* ✅ **Responsive UI** with a modern hero, grid layout, and image optimization (`next/image`)
* ✅ **Client-side filters** synced to URL:

  * **Search by album** title
  * **Search by artist**
  
* ✅ **Favorites**: toggle the heart on any album, then **Show Favorites only**
  (persisted to localStorage; survives reloads)
* ✅ **Graceful states**: skeleton on first load, empty-state messaging, error banner on failures
* ✅ **Keyboard & screen reader friendly** inputs and labels

---

## “Surprise” feature

**Favorites with persistent filtering**

* Click the heart on a card to add/remove from Favorites.
* Toggle **“Show Favorites”** to quickly filter the list.
* Favorites are **persisted** with `redux-persist`, so they remain after reloads or navigation.

---

## Architecture overview

* **Data fetching:**

  * `src/actions/albums.actions.ts` uses Next.js **server actions** and `fetch` with `revalidate: 3600` (1h).
  * `src/actions/albums.actions.cache.ts` wraps the action in `unstable_cache` with a `tags: ["top-100-albums"]` for future invalidation.
* **Rendering:**

  * `/album/top-100/page.tsx` SSR page uses `<Suspense>` and a **skeleton grid** for smooth UX.
  * **Error & empty states** are handled inside the list components.
* **Filtering:**

  * `nuqs` keeps **search/artist/genre/year** in the URL so you can deep-link filtered views.
  * `filterAlbum` applies client-side filtering on the feed payload.
* **Images:**

  * `next.config.ts` allows `is1-ssl.mzstatic.com` for iTunes cover images.

---

## State management

* **Redux Toolkit** slice at `src/store/features/favorites/favoritesSlice.ts`
* **Persisted** with `redux-persist` (fallback noop storage on the server to avoid SSR crashes)
* Strongly typed hooks: `useAppDispatch`, `useAppSelector`

---

## Styling

* **styled-components** for design-system-like primitives (Buttons, Text, Chips, Switch)
* **Tailwind v4** for layout utilities & tokens (defined in `global.css` via `@theme`)
* Consistent spacing, rounded corners, soft shadows, and responsive breakpoints

---

## Accessibility

* Semantic labels (`label` + `htmlFor`, `sr-only`) for inputs
* Focus rings and visible outline on interactive elements
* 
---

## Performance

* **SSR** + **Suspense** + **skeleton** for perceived performance
* Next.js **image optimization** and domain allowlist
* **HTTP caching** via `revalidate: 3600` and `unstable_cache`
* Minimal client state; heavy lifting on the server where possible

---

## Project structure

```
src/
├─ UI/
│  ├─ components/
│  │  ├─ Button/ (styled-components)
│  │  ├─ Chip/   (styled-components)
│  │  └─ Switch/ (styled-components)
│  └─ types/
├─ actions/
│  ├─ albums.actions.ts         (server action: fetch Top 100)
│  └─ albums.actions.cache.ts   (unstable_cache wrapper)
├─ app/
│  ├─ album/top-100/
│  │  ├─ _components/
│  │  │  ├─ Hero.tsx
│  │  │  └─ albumList/
│  │  │     ├─ AlbumFilters.tsx
│  │  │     ├─ AlbumListGrid.tsx
│  │  │     ├─ AlbumEmptyResult.tsx
│  │  │     └─ utils.ts
│  │  ├─ _data/albumSearchParams.ts
│  │  └─ page.tsx
│  ├─ global.css
│  ├─ layout.tsx
│  └─ providers.tsx             (Redux + Persist + nuqs adapter)
├─ store/
│  ├─ features/favorites/
│  │  ├─ favoritesSlice.ts
│  │  └─ types.ts
│  ├─ hooks.ts
│  ├─ index.ts
│  └─ rootReducer.ts
└─ types/
   └─ album/… (typed iTunes RSS entities)
```

And E2E tests:

```
cypress/
├─ e2e/
│  └─ top100.spec.ts
├─ fixtures/
│  ├─ itunes-top100.json
│  └─ itunes-empty.json
└─ support/
   └─ e2e.ts (adds checkA11yPage via cypress-axe)
```

---

## Getting started

### Prerequisites

* **Node.js 20+** (recommended)
* **npm** (or pnpm/yarn/bun)

### Install

```bash
npm install
```

### Run dev server

```bash
npm run dev
# open http://localhost:3000/album/top-100
```

### Build & start

```bash
npm run build
npm start
```

> No environment variables are needed for this challenge.

---

## Testing (Cypress)

Open Cypress in dev (starts Next.js and opens the runner):

```bash
npm run e2e:dev
```

Headless run (build/start + run tests):

```bash
npm run e2e:run
```

---

## Linting & formatting

```bash
npm run lint     # biome check
npm run format   # prettier + tailwind plugin
```

---

**Author:** Giovanni Caiazzo
**Challenge:** Sky Germany — Take-home coding assignment

---

