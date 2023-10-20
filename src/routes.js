import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Apartament from "./pages/Apartament";
import { ContextProvider } from "./context/context";

export default function MainRoutes() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apartamento/:page" element={<Apartament />} />
      </Routes>
    </ContextProvider>
  );
}
