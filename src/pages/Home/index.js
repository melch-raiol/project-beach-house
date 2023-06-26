import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LayoutHome from "../../components/layout/LayoutHome";
import LayoutInfo from "../../components/layout/LayoutInfo";
import LayoutLoc from "../../components/layout/LayoutLoc";

export default function Home() {
  return (
    <div className="container-page">
      <Header />
      <LayoutHome />
      <LayoutInfo />
      <LayoutLoc />
      <Footer />
    </div>
  );
}
