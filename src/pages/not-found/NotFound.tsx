const NotFound = () => (
  <div className="container bg-white mx-auto">
    <main className="flex flex-col h-screen justify-center items-center">
      <img src="./icon-192x192.png" alt="logo" width={192} height={192} />
      <h1 className="mt-4 text-xl text-red-600 font-bold">
        Sorry, Page Not Found.
      </h1>
    </main>
  </div>
);

export default NotFound;
