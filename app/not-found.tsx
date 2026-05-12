import Link from "next/link";

export default function NotFound() {
  return (
    <div className="font-mono max-w-4xl mx-auto flex flex-col gap-4 py-20">
      <div className="flex mb-2">
        <span className="text-gray-500 mr-2">$</span>
        <span className="text-gray-900 dark:text-gray-100 font-semibold">cd /this-page</span>
      </div>

      <div className="pl-4 border-l-2 border-red-400 dark:border-red-600">
        <p className="text-red-600 dark:text-red-400 font-bold text-lg mb-2">
          bash: cd: /this-page: No such file or directory
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-1">
          Error code: <span className="text-gray-900 dark:text-gray-100 font-bold">404</span>
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          The path you requested does not exist in this filesystem.
        </p>
      </div>

      <div className="flex mb-2 mt-4">
        <span className="text-gray-500 mr-2">$</span>
        <span className="text-gray-900 dark:text-gray-100 font-semibold">echo &quot;Suggested commands:&quot;</span>
      </div>

      <div className="pl-4 border-l-2 border-gray-300 dark:border-gray-800">
        <Link
          href="/"
          className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
        >
          cd ~ <span className="text-gray-500 font-normal ml-4"># go back home</span>
        </Link>
      </div>

      <div className="flex mt-6 items-center">
        <span className="text-gray-500 mr-2">$</span>
        <span className="w-3 h-5 bg-gray-900 dark:bg-gray-100 inline-block animate-pulse"></span>
      </div>
    </div>
  );
}
