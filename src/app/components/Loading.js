export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4">
      <div
        className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600 shadow-lg"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="text-blue-600 text-lg font-semibold">
        Loading, please wait...
      </p>
    </div>
  );
}
