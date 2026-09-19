const movies: Record<string, {
  year: string;
  genre: string;
  rating: string;
  duration: string;
  language: string;
  poster: string;
  description: string;
}> = {
  "Avengers: Endgame": {
    year: "2019",
    genre: "Action, Adventure, Sci-Fi",
    rating: "8.4/10",
    duration: "3h 1m",
    language: "English",
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    description: "After the devastating events of Avengers: Infinity War, the remaining Avengers must come together to undo Thanos' actions and save the universe."
  },
  "Interstellar": {
    year: "2014",
    genre: "Adventure, Drama, Sci-Fi",
    rating: "8.7/10",
    duration: "2h 49m",
    language: "English",
    poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    description: "A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival."
  },
  "Inception": {
    year: "2010",
    genre: "Action, Sci-Fi, Thriller",
    rating: "8.8/10",
    duration: "2h 28m",
    language: "English",
    poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    description: "A skilled thief who steals secrets through dreams is given a chance to erase his past by planting an idea in someone's mind."
  },
  "Spider-Man": {
    year: "2002",
    genre: "Action, Fantasy, Sci-Fi",
    rating: "7.4/10",
    duration: "2h 1m",
    language: "English",
    poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    description: "After being bitten by a genetically modified spider, a teenager gains incredible powers and becomes a superhero."
  },
  "The Batman": {
    year: "2022",
    genre: "Crime, Mystery, Thriller",
    rating: "7.8/10",
    duration: "2h 56m",
    language: "English",
    poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    description: "Batman investigates a series of crimes that reveal corruption and a dangerous mystery within Gotham City."
  },
  "Avatar": {
    year: "2009",
    genre: "Action, Adventure, Fantasy",
    rating: "7.9/10",
    duration: "2h 42m",
    language: "English",
    poster: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
    description: "A former Marine becomes part of the world of Pandora and must choose between following orders and protecting its people."
  }
};

export default async function MoviePage({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const { title } = await params;
  const movieTitle = decodeURIComponent(title);
  const movie = movies[movieTitle];

  return (
    <main className="min-h-screen bg-black px-5 py-8 text-white">
      <a href="/" className="text-red-500 hover:text-red-400">
        ← Back to Home
      </a>

      <div className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-2xl bg-zinc-900 shadow-xl">
        <div className="grid gap-6 p-6 md:grid-cols-2">
          <img
            src={movie?.poster}
            alt={movieTitle}
            className="mx-auto w-full max-w-sm rounded-xl object-cover"
          />

          <div>
            <h1 className="text-3xl font-bold md:text-4xl">
              {movieTitle}
            </h1>

            {movie ? (
              <>
                <div className="mt-5 space-y-2 text-zinc-300">
                  <p>📅 Year: {movie.year}</p>
                  <p>🎭 Genre: {movie.genre}</p>
                  <p>⭐ Rating: {movie.rating}</p>
                  <p>⏱️ Duration: {movie.duration}</p>
                  <p>🌐 Language: {movie.language}</p>
                </div>

                <h2 className="mt-6 text-xl font-bold">Story</h2>
                <p className="mt-2 leading-7 text-zinc-400">
                  {movie.description}
                </p>
            <div className="mt-6">
  <h2 className="text-xl font-bold mb-3">
    🎬 Available Qualities
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
    {["480p", "720p", "1080p"].map((quality) => (
      <div
        key={quality}
        className="rounded-xl border border-zinc-700 bg-zinc-900 p-4 text-center"
      >
        <h3 className="text-lg font-bold text-blue-400">
          {quality}
        </h3>

        <p className="mt-1 text-sm text-zinc-400">
          Coming Soon
        </p>

        <button
          disabled
          className="mt-3 w-full rounded-lg bg-zinc-700 px-3 py-2 text-sm text-zinc-400"
        >
          Not Available
        </button>
      </div>
    ))}
  </div>
</div>  </>
            ) : (
             <div className="mt-6">
  <h2 className="text-xl font-bold mb-3">
    🎬 Available Qualities
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
    {["480p", "720p", "1080p"].map((quality) => (
      <div
        key={quality}
        className="rounded-xl border border-zinc-700 bg-zinc-900 p-4 text-center"
      >
        <h3 className="text-lg font-bold text-blue-400">
          {quality}
        </h3>

        <p className="mt-1 text-sm text-zinc-400">
          Coming Soon
        </p>

        <button
          disabled
          className="mt-3 w-full rounded-lg bg-zinc-700 px-3 py-2 text-sm text-zinc-400"
        >
          Not Available
        </button>
      </div>
    ))}
  </div>
</div>
            )}


            <a
              href={`https://www.justwatch.com/in/search?q=${encodeURIComponent(movieTitle)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-lg bg-red-600 px-6 py-3 font-bold hover:bg-red-700"
            >
              Watch Now
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
