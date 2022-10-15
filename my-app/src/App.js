// import './App.css';
import { Routes,Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import MapPage from "./Pages/MapPage";

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Map" element={<MapPage />} />
      </Routes>
  );
}

export default App;
