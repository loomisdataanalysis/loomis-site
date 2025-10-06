import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Plataforma from "./pages/Plataforma";
import Planos from "./pages/Planos";
import Contato from "./pages/Contato";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/plataforma" element={<Plataforma />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}
