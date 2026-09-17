export default async function MoviePage({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const { title } = await params;

  const movieTitle = decodeURIComponent(title);

  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">
      <a
        href="/"
        className="text-red-500 hover:text-red-400"
      >
        ← Back to Home
      </a>

      <div className="mx-auto mt-10 max-w-3xl">
        <div className="rounded-2xl bg-zinc-900 p-8 shadow-xl">
          <h1 className="text-4xl font-bold">
            {movieTitle}
          </h1>

          <p className="mt-4 text-zinc-400">
            Movie details will appear here.
          </p>

          <button className="mt-8 rounded-lg bg-red-600 px-6 py-3 font-semibold hover:bg-red-700">
            Watch Now
          </button>
        </div>
      </div>
    </main>
  );
}
