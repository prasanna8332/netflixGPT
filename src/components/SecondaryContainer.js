import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlaying = useSelector((state) => state.movie.nowPlaying);
  return (
    <div className="flex flex-col">
      <h3 className="text-white text-3xl my-1">Now Playing</h3>
      <div className="flex overflow-x-scroll gap-5 my-3 bg-black overflow-hidden">
        {nowPlaying &&
          nowPlaying.map((movie) => {
            return (
              <div className="card-dy">
                <MovieCard
                  title={movie.title}
                  description={movie.overview}
                  imagePath={movie.poster_path}
                />
              </div>
            );
          })}
      </div>
      <h3 className="text-white text-3xl my-1">Now Playing</h3>

      <div className="flex overflow-x-scroll gap-5 my-3 bg-black overflow-hidden">
        {nowPlaying &&
          nowPlaying.map((movie) => {
            return (
              <div className="card-dy">
                <MovieCard
                  title={movie.title}
                  description={movie.overview}
                  imagePath={movie.poster_path}
                />
              </div>
            );
          })}
      </div>
      <h3 className="text-white text-3xl my-1">Now Playing</h3>

      <div className="flex overflow-x-scroll gap-5 my-3 bg-black overflow-hidden">
        {nowPlaying &&
          nowPlaying.map((movie) => {
            return (
              <div className="card-dy">
                <MovieCard
                  title={movie.title}
                  description={movie.overview}
                  imagePath={movie.poster_path}
                />
              </div>
            );
          })}
      </div>
      <h3 className="text-white text-3xl my-1">Now Playing</h3>

      <div className="flex overflow-x-scroll gap-5 my-3 bg-black overflow-hidden">
        {nowPlaying &&
          nowPlaying.map((movie) => {
            return (
              <div className="card-dy">
                <MovieCard
                  title={movie.title}
                  description={movie.overview}
                  imagePath={movie.poster_path}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SecondaryContainer;
