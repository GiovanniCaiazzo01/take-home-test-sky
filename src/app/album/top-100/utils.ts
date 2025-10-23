import { AlbumEntry } from "@THTS/types/album/albumEntry"


type filterAlbumProps = {
  query: {
    search: string
    genre: string[] 
    artist: string
    year: string 
  }
  albums: AlbumEntry[] 
}

export const filterAlbum =  ({query, albums}: filterAlbumProps): AlbumEntry[] => { 
  if(!query) {
    return albums 
  }
  const filteredAlbums = albums.filter( album => album["im:name"].label.toLowerCase().includes(query.search.toLowerCase()))
  return filteredAlbums 
}
