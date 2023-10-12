import { Route, Routes } from "react-router-dom";
import FourRoomsBackyard from "./pages/FourRoomsBackyard";
import FourRoomsDeck from "./pages/FourRoomsDeck";
import Home from "./pages/Home";
import Studio from "./pages/studio";
import ThreeRooms from "./pages/threeRooms";

export default function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/tres_quartos" element={<ThreeRooms />} />
        <Route path="/quatro_quartos_deck" element={<FourRoomsDeck />} />
        <Route path="/quatro_quartos_quintal" element={<FourRoomsBackyard />} />
        {/* <Whatsapp /> */}
      </Routes>
    </>
  );
}
