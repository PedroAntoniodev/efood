import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LaDolceVita from "./pages/LaDolceVita";

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/LaDolceVita" element={<LaDolceVita />} />
  </Routes>
);

export default Rotas;
