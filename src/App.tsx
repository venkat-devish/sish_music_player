import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Discover, SideBar } from "./components";
import { CreatePlaylist, Library, Liked, Search } from "./containers";
import "./styles/app.scss";

function App() {
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
