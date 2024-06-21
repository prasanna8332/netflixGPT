import React from "react";

const MovieCard = ({ title, description, imagePath }) => {
  return (
    <div class="min-w-1/2 relative block group bg-black border border-red-200 rounded-lg shadow  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 overflow-hidden">
      <img
        class="object-cover w-full rounded-t-lg h-96  transition-transform duration-300 transform group-hover:translate-x-full"
        src={"http://image.tmdb.org/t/p/w500/" + imagePath}
        alt=""
      />
      <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-95 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div class="flex flex-col justify-between h-full leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-red-600">
            {title}
          </h5>
          <p class="mb-3 font-normal text-white">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
