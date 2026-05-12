export default function Loading() {
  return (
    <div className="font-mono max-w-4xl mx-auto flex flex-col gap-6 pb-20 animate-pulse">
      <div className="mb-4">
        <div className="h-8 w-48 bg-gray-300 dark:bg-gray-800 rounded mb-2" />
        <div className="h-4 w-72 bg-gray-200 dark:bg-gray-800 rounded" />
      </div>
      {[1, 2, 3].map((i) => (
        <div key={i}>
          <div className="h-4 w-40 bg-gray-200 dark:bg-gray-800 rounded mb-2" />
          <div className="pl-4 border-l-2 border-gray-300 dark:border-gray-800 space-y-2">
            <div className="h-3 w-full bg-gray-200 dark:bg-gray-800 rounded" />
            <div className="h-3 w-3/4 bg-gray-200 dark:bg-gray-800 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}
