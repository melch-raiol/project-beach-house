import "./styles.css";

export default function ModalApartments({ setModalApartments, selectedApartment }) {
    console.log(selectedApartment);
    function closeModal() {
        setModalApartments(false);
    };

    return (
        <div className="container-modal" >
            <div className="modal-info">
                <div
                    className="close-modal"
                    onClick={() => closeModal()}
                >
                    X
                </div>
                <img
                    className="modal-info-img"
                    src={selectedApartment.image}
                />
                <p>{selectedApartment.name}</p>
                <p>{selectedApartment.info}</p>
            </div>
        </div>
    )
};