import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./containers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
