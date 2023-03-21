import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { Dispatch, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ArtistAlbums, Discover, SideBar } from "./components";
import WrongPage from "./components/WrongPage";
import { Trending, Search, Podcasts } from "./containers";
import { getGlobalCharts, getRecommendedSongs } from "./data/api/getChartsData";
import "./styles/app.scss";

function App() {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(() => {
    dispatch(getRecommendedSongs());
    dispatch(getGlobalCharts());
  }, []);

  return (
    <div className="app">
      <SideBar />
      <Routes>
        <Route path="/" />
        <Route index element={<Discover />} />
        <Route path="search" element={<Search />} />
        <Route path="artists" element={<Trending />} />
        <Route path="albums/:name" element={<ArtistAlbums />} />
        <Route path="podcasts" element={<Podcasts />} />
        <Route path="*" element={<WrongPage />} />
      </Routes>
    </div>
  );
}

export default App;
