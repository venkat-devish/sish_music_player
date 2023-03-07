import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Discover, SideBar } from "./components";
import { Library, Search } from "./containers";
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
      </Routes>
    </div>
  );
}

export default App;
