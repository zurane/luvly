import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TechnologyNews from "./pages/TechnologyNews";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="technology" element={<TechnologyNews />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
