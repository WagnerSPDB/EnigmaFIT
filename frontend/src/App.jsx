import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Fase0 from "./pages/Fase0";
import Fase1 from "./pages/Fase1";
import Fase2 from "./pages/Fase2";
import Fase3 from "./pages/Fase3";
import Fase4 from "./pages/Fase4";
import ProtectedRoute from "./components/ProtectedRoutes";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/fase0"
          element={
            <ProtectedRoute faseAtual={0}>
              <Fase0 />
            </ProtectedRoute>
          }
        />

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

        <Route
          path="/fase4"
          element={
            <ProtectedRoute faseAtual={4}>
              <Fase4 />
            </ProtectedRoute>
          }
        />
    {/* --- IGNORE ---}
        <Route
          path="/fase5"
          element={
            <ProtectedRoute faseAtual={5}>
              <Fase5 />
            </ProtectedRoute>
          }
        />

        <Route
          path="/fase6"
          element={
            <ProtectedRoute faseAtual={6}>
              <Fase6 />
            </ProtectedRoute>
          }
        />

        <Route
          path="/fase7"
          element={
            <ProtectedRoute faseAtual={7}>
              <Fase7 />
            </ProtectedRoute>
          }
        />

        <Route
          path="/fase8"
          element={
            <ProtectedRoute faseAtual={7}>
              <Fase8 />
            </ProtectedRoute>
          }
        />
        */}

      </Routes>
    </Router>
  );
}
