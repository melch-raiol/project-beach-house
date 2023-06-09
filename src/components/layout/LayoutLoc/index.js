import "./styles.css";

export default function LayoutLoc() {
  return (
    <div className="container-row" id="section-4">
      <div className="loc-map">
        <iframe
          className="mapa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3550.481791697999!2d-48.48031578528738!3d-27.141127509305598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8a3f549ef85f7%3A0x86aca3a30383c6d1!2sCasas%20da%20Sepultura!5e0!3m2!1ses-419!2sbr!4v1680449990692!5m2!1ses-419!2sbr"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="info-loc">
        <div className="title-loc">
          <strong>
            O Apartamento mais bem localizado para sua viagem
          </strong>
        </div>

        <div className="text-loc">
          <span>Localização</span>
          <p>text</p>
        </div>
      </div>
    </div>
  );
}
