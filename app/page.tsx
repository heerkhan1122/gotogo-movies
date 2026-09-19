"use client";

import { useState } from "react";

const movies = [
  {
    title: "Avengers: Endgame",
    year: "2019",
    genre: "Action",
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  },
  {
    title: "Interstellar",
    year: "2014",
    genre: "Sci-Fi",
    poster: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
  },
  {
    title: "Inception",
    year: "2010",
    genre: "Thriller",
    poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
  },
  {
    title: "Spider-Man",
    year: "2021",
    genre: "Action",
    poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
  },
  {
    title: "The Batman",
    year: "2022",
    genre: "Action",
    poster: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
  },
  {
    title: "Avatar",
    year: "2009",
    genre: "Fantasy",
    poster: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [profileOpen, setProfileOpen] = useState(false);
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-zinc-800 px-5 py-5">
        <h1 className="text-2xl font-bold text-red-500">
          GotoGo 🎬
        </h1>

        <button
    onClick={() => setProfileOpen(!profileOpen)} 
         className="rounded-full bg-zinc-800 px-4 py-2 text-white"
>
          Profile
        </button>
{profileOpen && (
  <div className="absolute right-5 top-20 z-50 w-56 rounded-xl bg-zinc-900 p-4 shadow-xl">
    <h3 className="mb-3 text-lg font-bold text-white">
      My Profile
    </h3>

    <button className="mb-2 block w-full rounded-lg bg-zinc-800 px-4 py-2 text-left text-white">
      Login
    </button>

    <button className="mb-2 block w-full rounded-lg bg-zinc-800 px-4 py-2 text-left text-white">
      Signup
    </button>

    <button className="mb-2 block w-full rounded-lg bg-zinc-800 px-4 py-2 text-left text-white">
      My Profile
    </button>

    <button className="block w-full rounded-lg bg-red-900 px-4 py-2 text-left text-white">
      Logout
    </button>
  </div>
)}      
</header>

      {/* Hero */}
      <section className="px-5 py-12 text-center">
        <p className="mb-3 text-sm text-red-400">
          WELCOME TO GOTOGO MOVIES
        </p>

        <h2 className="text-4xl font-bold">
          Discover Your Next Movie
        </h2>

        <p className="mt-4 text-zinc-400">
          Explore movies, action, sci-fi and more.
        </p>

        {/* Search */}
        <div className="mx-auto mt-8 max-w-xl">
          <input
            type="text"
            placeholder="Search movies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border border-zinc-700 bg-zinc-900 px-5 py-4 text-white outline-none focus:border-red-500"
          />
        </div>
      </section>

      {/* Movies */}
      <section className="px-5 pb-10">
        <h3 className="mb-5 text-2xl font-bold">
          Popular Movies 🍿
        </h3>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {filteredMovies.map((movie) => (
            <div
              key={movie.title}
              className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900"
            >
              <div className="flex h-40 items-center justify-center bg-gradient-to-br from-red-950 to-zinc-900 text-6xl">
                <img
  src={movie.poster || `https://placehold.co/600x900/1a1a1a/ffffff?text=${encodeURIComponent(movie.title)}`}
  alt={movie.title}
  className="w-full h-full object-cover"
/>
              </div>

              <div className="p-4">
                <h4 className="font-bold">
                  {movie.title}
                </h4>

                <p className="mt-2 text-sm text-zinc-400">
                  {movie.year} • {movie.genre}
                </p>

                <button
  onClick={() => window.location.href = "/movie/" + encodeURIComponent(movie.title)}
  className="mt-4 w-full rounded-lg bg-red-600 py-2 text-sm font-semibold hover:bg-red-700"
>
                  View Movie
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <p className="mt-8 text-center text-zinc-400">
            No movies found 😔
          </p>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-6 text-center text-sm text-zinc-500">
        © 2026 GotoGo Movies. All rights reserved.
      </footer>
    </main>
  );
}
