import React from "react";
import { Route, Routes } from "react-router-dom";
import AccountInfo from "../Pages-Rk/AccountInfo/AccountInfo";
import Subscription from "../Pages-Rk/Subscription/Subscription";
import Payment from './../Pages-Rk/Payment/Payment';
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
      <Route path="/myaccount/subscription" element={<Subscription />} />
      <Route path="/myaccount/accountinfo" element={<AccountInfo />} />
      <Route path="/myaccount/payment" element={<Payment />} />
    </Routes>
  );
};

export default AllRoutes;
