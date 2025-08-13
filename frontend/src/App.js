import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Fase1 from "./pages/Fase1";
import Fase2 from "./pages/Fase2";
import Fase3 from "./pages/Fase3";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Fase1 />} />
        <Route path="/fase2" element={<Fase2 />} />
        <Route path="/fase3" element={<Fase3 />} />
      </Routes>
    </Router>
  );
}
