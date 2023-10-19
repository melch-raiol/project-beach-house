import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Studio from "./pages/studio";
import Apartament from "./pages/Apartament";
import { ContextProvider } from "./context/context";

export default function MainRoutes() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apartamento/:page" element={<Apartament />} />
        <Route path="/studio" element={<Studio />} />
      </Routes>
    </ContextProvider>
  );
}
