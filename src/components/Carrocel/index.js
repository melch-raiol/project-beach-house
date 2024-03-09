import React from "react";
import { useNavigate } from "react-router-dom";
// import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import imagem01 from "../../assets/Images/img-001.jpg";
import imagem02 from "../../assets/Images/img-02.jpg";
import imagem03 from "../../assets/Images/img-03.jpg";
import imagem04 from "../../assets/Images/img-04.JPG";
import "./style.css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useContextGlogal } from "../../context/context";

export default function Carrocel({ setTest }) {
  const navigate = useNavigate();

  const slides = [
    {
      imagem: imagem01,
      name: "4 Quartos com Deck",
      route: "quatro_quartos_quintal",
    },
    { imagem: imagem02, name: "3 Quartos", route: "tres_quartos" },
    { imagem: imagem03, name: "Studio", route: "studio" },
    {
      imagem: imagem04,
      name: "4 quartos com quintal",
      route: "quatro_quartos_deck",
    },
  ];

  const { page, setPage } = useContextGlogal();

  function handleTest(route) {
    setPage(route);
    navigate(`/apartamento/${route}`);
  }

  return (
    <div className="carrocel-img">
      <Swiper modules={[FreeMode, Navigation, Thumbs]} navigation pagination>
        {slides.map((slide) => (
          <SwiperSlide>
            <div className="container-img">
              <img className="slide-img" src={slide.imagem} alt="apartamento" />
              <div className="image-description">
                <strong className="texto-imagem">{slide.name}</strong>
                <button
                  className="btn-more-photos"
                  onClick={() => handleTest(slide.route)}
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
