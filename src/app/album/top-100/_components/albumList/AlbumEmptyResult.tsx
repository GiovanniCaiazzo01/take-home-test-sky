import { Text } from "@THTS/UI/components/Text";

type AlbumEmptyResultProps = {
  title: string;
  subTitle: string;
};

const AlbumEmptyResult = ({ title, subTitle }: AlbumEmptyResultProps) => {
  return (
    <div
      data-testid="album-empty"
      className=" border-2 border-dashed border-gray-400 space-y-3 flex flex-col items-center justify-center col-span-1 sm:col-span-2 md:col-span-4 w-full"
      style={{ height: "240px" }}
    >
      <div className="space-y-1 text-center">
        <p className="font-medium text-md text-primary-400"></p>

        <Text variant="title-md">{title}</Text>
        <Text variant="body-sm">{subTitle}</Text>
      </div>
    </div>
  );
};

export default AlbumEmptyResult;
