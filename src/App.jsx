import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TechnologyNews from "./pages/TechnologyNews";
import PoliticsNews from "./pages/PoliticsNews";
import RetailNews from "./pages/RetailNews";
import FinancialNews from "./pages/FinancialNews";
import MusicNews from "./pages/MusicNews";
import DesignNews from "./pages/DesignNews";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="technology" element={<TechnologyNews />} />
        <Route path="retail" element={<RetailNews />} />
        <Route path="politics" element={<PoliticsNews />} />
        <Route path="finance" element={<FinancialNews />} />
        <Route path="entertainment" element={<MusicNews />} />
        <Route path="business" element={<DesignNews />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
