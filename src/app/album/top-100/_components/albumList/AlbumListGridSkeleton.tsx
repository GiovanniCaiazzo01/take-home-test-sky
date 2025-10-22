const AlbumListGridSkeleton = () => {
  const placeholderItems = Array(10).fill(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {placeholderItems.map((_, index) => (
        <div
          key={index}
          className="w-full bg-white p-4 rounded-lg shadow-md animate-pulse grid grid-cols-1 gap-6"
        >
          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-4">
            <div className="min-w-16 max-w-16 min-h-16 max-h-16 rounded-md bg-gray-300" />

            <div className="flex flex-col space-y-2 flex-1">
              <div className="h-5 bg-gray-300 rounded w-3/4" />
              <div className="h-3 bg-gray-300 rounded w-1/2" />
              <div className="h-3 bg-gray-300 rounded w-1/3" />
              <div className="h-5 bg-gray-300 rounded w-1/4" />
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-end">
            <div className="h-6 w-20 bg-gray-300 rounded" />
            <div className="h-10 w-32 bg-gray-300 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlbumListGridSkeleton;
