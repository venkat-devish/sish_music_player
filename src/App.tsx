import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { Dispatch, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Discover, SideBar } from "./components";
import NowPlaying from "./components/NowPlaying";
import { CreatePlaylist, Library, Liked, Search } from "./containers";
import {
  getGlobalCharts,
  getRecommendedSongs,
  getSearchResults,
} from "./data/api/getChartsData";
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
        <Route path="library" element={<Library />} />
        <Route path="new/playlist" element={<CreatePlaylist />} />
        <Route path="liked" element={<Liked />} />
      </Routes>
    </div>
  );
}

export default App;
