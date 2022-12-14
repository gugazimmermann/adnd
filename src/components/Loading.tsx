const Loading = () => (
  <div className="fixed inset-0 bg-gray-900 bg-opacity-90 overflow-y-auto h-full w-full z-50">
    <div className="flex flex-col justify-center items-center h-full w-full">
      <div className="mb-4 text-2xl font-bold text-red-600">Loading...</div>
      <div className="animate-spin rounded-full h-32 w-32 border-b-8 border-red-600" />
    </div>
  </div>
);

export default Loading;
