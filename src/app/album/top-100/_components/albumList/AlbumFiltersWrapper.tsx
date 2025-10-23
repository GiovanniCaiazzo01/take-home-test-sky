import { Suspense } from "react"
import AlbumFilters from "./AlbumFilters"

const AlbumFiltersWrapper = () => {
  return <Suspense>
  <AlbumFilters />
  </Suspense>
}

export default AlbumFiltersWrapper
