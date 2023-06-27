import "./style.css";
import imageInfo from "../../../databases/ap_03_rooms_img_01.jpg";
import imageInfo02 from "../../../databases/ap_04_rooms_img_01.jpg";

export default function LayoutInfo() {
  return (
    <div className="container">
      <div className="container-info">
        <div className="text-info">
          <strong>Your Perfect Heaven for Rejuvenation and Relaxation</strong>
          <p>
            As you enter our resort, you'll feel yourself enveloped in a sense
            of peace and tranquility, as the stresses of the outside world melt
            away. Our accommodations are designed to provide the perfect blend
            of comfort and luxury.
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
          <strong>Your Perfect Heaven for Rejuvenation and Relaxation</strong>
          <p>
            As you enter our resort, you'll feel yourself enveloped in a sense
            of peace and tranquility, as the stresses of the outside world melt
            away. Our accommodations are designed to provide the perfect blend
            of comfort and luxury.
          </p>
        </div>
      </div>
    </div>
  );
}
