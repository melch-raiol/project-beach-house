import "./styles.css";

export default function ModalApartments({
  setModalApartments,
  selectedApartment,
}) {
  console.log(selectedApartment);
  function closeModal() {
    setModalApartments(false);
  }

  return (
    <div className="container-modal">
      <div className="modal-info">
        <div className="close-modal" onClick={() => closeModal()}>
          <span>X</span>
        </div>
        <div className="div-img-info">
          <img className="modal-info-img" src={selectedApartment.image} />
          <p>{selectedApartment.name}</p>
          <p>{selectedApartment.info}</p>
        </div>
      </div>
    </div>
  );
}
