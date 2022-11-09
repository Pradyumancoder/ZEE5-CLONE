import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeGc from "./HomeGc";

import MoviesGc from "./MoivesGc";
import NewsGc from "./NewsGc";
import TvShowsGc from "./TvShowsGc";

import WebSeriesGc from "./WebSeriesGc";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeGc />} />
      <Route path="/movies" element={<MoviesGc />} />
      <Route path="/news" element={<NewsGc />} />
      <Route path="/tvShows" element={<TvShowsGc />} />
      <Route path="/webseries" element={<WebSeriesGc />} />
    </Routes>
  );
};

export default AllRoutes;
