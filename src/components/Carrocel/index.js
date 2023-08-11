import React from "react";
import { useNavigate } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import imagem01 from "../../assets/Imags/img-01.JPG";
import imagem02 from "../../assets/Imags/img-02.jpg";
import imagem03 from "../../assets/Imags/img-03.jpg";
import imagem04 from "../../assets/Imags/img-04.jpg";
import "./style.css";

export default function Carrocel() {
  const navigate = useNavigate();

  const slides = [
    {
      imagem: imagem01,
      name: "4 Quartos com Quintal",
      route: "quatro_quartos_quintal",
    },
    { imagem: imagem02, name: "3 Quartos", route: "tres_quartos" },
    { imagem: imagem03, name: "Studio", route: "studio" },
    {
      imagem: imagem04,
      name: "4 Quartos com Deck",
      route: "quatro_quartos_deck",
    },
  ];

  function navagation(route) {
    navigate(`/${route}`);
  }

  return (
    <div className="carrocel-img">
      <Swiper modules={[Navigation, Pagination]} navigation pagination>
        {slides.map((slide) => (
          <SwiperSlide>
            <div className="container-img">
              <img className="slide-img" src={slide.imagem} alt="apartamento" />
              <div className="image-description">
                <strong className="texto-imagem">{slide.name}</strong>
                <button
                  className="btn-more-photos"
                  onClick={() => navagation(slide.route)}
                >
                  Mais Fotos
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
