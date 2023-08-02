import React from "react";
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
  const slides = [
    { imagem: imagem01, descricao: "texto imagem 01" },
    { imagem: imagem02, descricao: "texto imagem 02" },
    { imagem: imagem03, descricao: "texto imagem 03" },
    { imagem: imagem04, descricao: "texto imagem 04" },
  ];

  return (
    <div className="carrocel-img">
      <Swiper modules={[Navigation, Pagination]} navigation pagination>
        {slides.map((slide) => (
          <SwiperSlide>
            <div className="container-img">
              <img className="slide-img" src={slide.imagem} alt="apartamento" />
              <div className="descicao-imagem">
                <strong className="texto-imagem">{slide.descricao}</strong>
                <button className="btn-mais">mais fotos</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
