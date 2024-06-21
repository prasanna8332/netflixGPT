import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlaying = useSelector((state) => state.movie.nowPlaying);
  return (
    <div className="flex overflow-x-scroll gap-5 my-3 bg-black">
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
  );
};

export default SecondaryContainer;
