import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import apartments from "../../databases/databases.js";
import "./styles.css";

function Apartments() {

  function handleInfo(name, image, info) {
    console.log(name, image, info);
  };

  return (
    <div className="container-apartments">
      <Header />
      <div className="main-apartments-selection">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={true}
          autoplay={{ delay: 3000 }}
          className="swiper-container"
        >
          {apartments.map(({ name, image, info }, key) => {
            return (
              <SwiperSlide
                className="slide-item"
                key={key}
                onClick={() => handleInfo(name, image, info)}
              >
                <div className=" apartaments-collection">
                  <img src={image} />
                  <div className="apartment-info">
                    <p className="apartment-info-name">{name}</p>
                    <p className="apartment-info-info">{info}</p>
                    <button
                      className="btn-info"
                    >
                      MAIS INFORMAÇÕES
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <Footer />
    </div>
  );
}

export default Apartments;
