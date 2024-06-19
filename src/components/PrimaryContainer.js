import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNowPlaying } from "../slices/movieSlice";
import { TMDB_API_OPTIONS, TMDB_URLS } from "../utilities/constants";

const PrimaryContainer = () => {
  const dispatch = useDispatch();

  const nowPlaying = useSelector((state) => state.movie.nowPlaying);


  const getRecommendations = async () => {
    try {
      const results = await fetch(TMDB_URLS.populars, TMDB_API_OPTIONS);
      const response = await results.json();
      dispatch(updateNowPlaying(response.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecommendations();
  }, []);

  return (
    <div className="">
      <iframe
        className="w-full aspect-video yt-video"
        src="https://www.youtube.com/embed/yfQ1fTKkYgs?si=CrJyGz2QFip4073I&autoplay=1&mute=1&controls=0&rel=0"
        title="YouTube video player"
        frameBorder="0"
        referrerPolicy="strict-origin-when-cross-origin"
        fs="1"
      ></iframe>
    </div>
  );
};

export default PrimaryContainer;
