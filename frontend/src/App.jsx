import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Fase1 from "./pages/Fase1";
import Fase2 from "./pages/Fase2";
import Fase3 from "./pages/Fase3";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoutes";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/fase1"
          element={
            <ProtectedRoute faseAtual={1}>
              <Fase1 />
            </ProtectedRoute>
          }
        />

        <Route
          path="/fase2"
          element={
            <ProtectedRoute faseAtual={2}>
              <Fase2 />
            </ProtectedRoute>
          }
        />

        <Route
          path="/fase3"
          element={
            <ProtectedRoute faseAtual={3}>
              <Fase3 />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
