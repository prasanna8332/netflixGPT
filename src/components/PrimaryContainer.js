import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateNowPlaying,
  updateTrailers,
  updateCurrentDisplay,
  updateCurrentVideoDetails,
} from "../slices/movieSlice";
import { TMDB_API_OPTIONS, TMDB_URLS } from "../utilities/constants";
import { getRandomNumber } from "../utilities/utilFunctions";

const PrimaryContainer = () => {
  const dispatch = useDispatch();

  const nowPlaying = useSelector((state) => state.movie.nowPlaying);
  const trailers = useSelector((state) => state.movie.trailers);
  const currentDisplay = useSelector((state) => state.movie.currentDisplay);
  const currentDisplayDetails = useSelector(
    (state) => state.movie.currentVideoDetails
  );

  useEffect(() => {
    getRecommendations();
  }, []);

  const getRecommendations = async () => {
    try {
      const results = await fetch(TMDB_URLS.populars, TMDB_API_OPTIONS);
      const response = await results.json();
      dispatch(updateNowPlaying(response.results));
    } catch (error) {
      console.log(error);
    }
  };

  const getVideoDetails = async (id) => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
        TMDB_API_OPTIONS
      );
      const results = await response.json();
      dispatch(updateTrailers(results.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!nowPlaying) return;

    const randomVideoNumber = getRandomNumber(nowPlaying.length);
    const randomVideo = nowPlaying[randomVideoNumber];
    dispatch(
      updateCurrentVideoDetails({
        title: randomVideo.title,
        overview: randomVideo.overview,
        poster: randomVideo.poster_path,
        popularity: randomVideo.popularity,
      })
    );
    getVideoDetails(randomVideo.id);
  }, [nowPlaying]);

  useEffect(() => {
    if (!trailers) return;

    const trailerVideos = trailers.filter((video) => video.type === "Trailer");
    const randomVideoNumber = getRandomNumber(trailerVideos.length);
    const randomVideo = trailerVideos[randomVideoNumber];
    dispatch(updateCurrentDisplay(randomVideo));
  }, [trailers]);

  return (
    <div className="relative">
      {currentDisplayDetails && currentDisplay && (
        <div className="absolute top-1/2 left-40">
          <h1 className="text-2xl mb-10 md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400 text-white hidden md:flex  ">
            {currentDisplayDetails.title}
          </h1>
          <div className="hidden md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-white text-black flex items-center justify-center px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 w-full md:w-auto">
              <svg className="w-6 h-6 fill-current mr-2" viewBox="0 0 24 24">
                <path d="M3 22V2L21 12L3 22Z" />
              </svg>
              <span className="text-lg font-semibold">Play</span>
            </button>

            <button className="bg-gray-800 text-white flex items-center justify-center px-6 py-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300 w-full md:w-auto">
              <svg className="w-6 h-6 fill-current mr-2" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm0-4h-2V7h2v8z" />
              </svg>
              <span className="text-lg font-semibold">More Info</span>
            </button>
          </div>
          <div className="flex flex-row items-center justify-start gap-2 text-2xl mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width="32"
              height="32"
              className="text-green-400"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p className="font-bold text-green-600">
              <span>{currentDisplayDetails.popularity}</span>
            </p>
          </div>
        </div>
      )}
      {currentDisplay && (
        <div>
          <iframe
            className="w-full aspect-video yt-video z-10"
            // src="https://www.youtube.com/embed/yfQ1fTKkYgs?si=CrJyGz2QFip4073I&autoplay=1&mute=1&controls=0&rel=0"
            src={
              "https://www.youtube.com/embed/" +
              currentDisplay.key +
              "?si=CrJyGz2QFip4073I&autoplay=1&mute=1&controls=0&rel=0"
            }
            title="YouTube video player"
            referrerPolicy="strict-origin-when-cross-origin"
            fs="1"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default PrimaryContainer;
