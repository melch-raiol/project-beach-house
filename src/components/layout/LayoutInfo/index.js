import "./style.css";
import imageInfo from "../../../databases/ap_03_rooms_img_01.jpg";
import imageInfo02 from "../../../databases/ap_04_rooms_img_01.jpg";

export default function LayoutInfo() {
  return (
    <div className="container" id="section-2">
      <div className="container-info">
        <div className="text-info">
          <strong>
            A Praia da Sepultura é um verdadeiro paraíso para os amantes da
            natureza e da tranquilidade.
          </strong>
          <p>
            Com suas águas cristalinas e repletas de peixinhos coloridos, o
            lugar é um convite ao mergulho e à exploração marinha. Além disso, a
            presença de tartarugas marinhas traz um toque especial de encanto ao
            ambiente.
          </p>
        </div>
        <div className="info-img">
          <img src={imageInfo} alt="info imagem esquerda" />
        </div>
      </div>
      <div className="container-info">
        <div className="info-img">
          <img src={imageInfo02} alt="info imagem esquerda" />
        </div>
        <div className="text-info">
          <strong>
            A praia conta ainda com uma trilha deslumbrante que leva a uma vista
            panorâmica belíssima do oceano.
          </strong>
          <p>
            É um espetáculo para os olhos e para a alma, uma oportunidade de
            conexão com a natureza em seu estado mais puro. Não perca a chance
            de conhecer esse refúgio paradisíaco localizado na cidade de
            Bombinhas, Santa Catarina.
          </p>
        </div>
      </div>
    </div>
  );
}
