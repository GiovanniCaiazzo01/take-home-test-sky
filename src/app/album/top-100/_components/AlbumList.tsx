import { ListAlbumAction } from "@THTS/actions/albums.actions";
import { Text } from "@THTS/UI/components";
import { ChipStatus } from "@THTS/UI/components/Chip";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const response = await ListAlbumAction();
  if (!response.success)
    return (
      <div className="p-8 text-center text-red-600">Error loading albums</div>
    );

  const albumsEntry = response.data.feed.entry;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {albumsEntry.map((album) => {
        const coverImage = album["im:image"][album["im:image"].length - 1].label;
        const albumName = album["im:name"].label;
        const artistName = album["im:artist"].label;
        const price = album["im:price"].label;
        const genre = album.category?.attributes?.label;
        const releaseRaw = album["im:releaseDate"].label;
        // Data formattata
        const releaseDate = new Date(releaseRaw).toLocaleDateString("it-IT", {
          year: "numeric",
          month: "short",
          day: "numeric",
        });
        const albumLink = album.link?.attributes?.href;
        const albumId = album["id"].attributes["im:id"];

        return (
          <div
            key={albumId}
            className="w-full p-4 bg-white sm:bg-red-500 md:bg-green-500 lg:bg-blue-400 rounded-lg shadow-md grid grid-cols-1 gap-6 items-center"
          >
            {/* Prima cella: Cover + titolo/artista */}
            <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-4">
              <div className="relative min-w-16 max-w-16 min-h-16 max-h-16 rounded-md overflow-hidden bg-accent-200">
                <Image
                  src={coverImage}
                  alt={`${albumName} cover`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
              <Text variant="body-md" className="font-semibold text-grey-900">
                  {albumName}
              </Text>
                <Text variant="caption" className="text-grey-600">{artistName}</Text>
              <Text variant="caption" className="text-grey-700">{releaseDate}</Text>
              </div>
            </div>

            {/* Seconda cella: Genre, Release, Price + Link */}
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-end">
            <ChipStatus label={genre}  variant="info" className="w-fit" />
              <Text variant="body-md" className="font-medium text-primary-600">{price}</Text>
              <Link
                href={albumLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-1 px-3 rounded transition-colors duration-200"
              >
                Ascolta su Apple Music
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
