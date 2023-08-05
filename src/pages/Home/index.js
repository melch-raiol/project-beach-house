import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LayoutApartaments from "../../components/layout/LayoutApartaments";
import LayoutContact from "../../components/layout/LayoutContact";
import LayoutHome from "../../components/layout/LayoutHome";
import LayoutInfo from "../../components/layout/LayoutInfo";
import LayoutLoc from "../../components/layout/LayoutLoc";
import Whatsapp from "../../components/Whatsapp";
import "./style.css";

export default function Home() {
  return (
    <div className="container-page">
      <Header />
      <LayoutHome />
      <LayoutInfo />
      <LayoutApartaments />
      <LayoutLoc />
      <LayoutContact />
      <Footer />
      <Whatsapp />
    </div>
  );
}
