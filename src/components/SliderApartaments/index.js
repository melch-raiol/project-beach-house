import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function SliderApartaments({
  imagem01,
  imagem02,
  imagem03,
  imagem04,
}) {
  const slides = [
    { imagem: imagem01 },
    { imagem: imagem02 },
    { imagem: imagem03 },
    { imagem: imagem04 },
  ];

  return (
    <div className="container-swiper">
      <Swiper modules={[FreeMode, Navigation, Thumbs]} navigation pagination>
        {slides.map((slide) => (
          <SwiperSlide>
            <div className="img apartaments">
              <img
                className="slide-img  "
                src={slide.imagem}
                alt="apartamento"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="div-photos"></div>
    </div>
  );
}
