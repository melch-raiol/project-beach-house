import Footer from "../../components/Footer";
import Header from "../../components/Header";
import imageinfo from '../../assets/apartments.jpg'
import "./styles.css";

function Main() {
  return (
    <>
      <Header />
      <main>
        <section className="container">
          <div className="banner">
            <strong>Make Memories to Last a Lifetime at Hidden Resort
              Copy
            </strong>
          </div>
          <div className="text">
            <span>Heaven</span>
            <p>At Hidden Resort, we offer a variety of accommodations to suit every
              need and budget. From cozy cabins to spacious villas, each of our
              accommodations is designed to provide the perfect blend of comfort and
              luxury, with stunning views of the surrounding landscapes.</p>
          </div>
        </section>
        <section className="container">
          <div className="hero">
            <div className="heroinfo">
              <strong>Your Perfect Heaven for Rejuvenation and Relaxation Copy</strong>
              <p>As you enter our resort, youll feel yourself enveloped in a sense of peace and tranquility, as the stresses of the outside world melt away. Our accommodations are designed to provide the perfect blend of comfort and luxury.</p>
            </div>
            <div className="infoimg">
              <img src={imageinfo} alt="imagem info" />
            </div>
          </div>
          <div className="hero">
            <div className="infoimg">
              <img src={imageinfo} alt="imagem info" />
            </div>
            <div className="heroinfo-right">
              <p>As you enter our resort, youll feel yourself enveloped in a sense of peace and tranquility, as the stresses of the outside world melt away. Our accommodations are designed to provide the perfect blend of comfort and luxury.</p>
              <strong>Your Perfect Heaven for Rejuvenation and Relaxation Copy</strong>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Main;
