import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import apartments from "../../databases/databases.js";
import "./styles.css";

function Apartments() {
  return (
    <div className="container-apartments">
      <Header />
      <div className="main-apartments-selection">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          className="swiper-container"
        >
          {apartments.map(({ name, image, info }, key) => {
            console.log(name);
            return (
              <SwiperSlide className="slide-item" key={key}>
                <div className=" apartaments-collection">
                  <img src={image} />
                  <div className="apartment-info">
                    <p>{info}</p>
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
