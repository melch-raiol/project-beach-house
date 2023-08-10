import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import GalleryPhotos from "./pages/GalleryPhotos";

function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fotos" element={<GalleryPhotos />} />
      </Routes>
    </>
  );
}

export default MainRoutes;
