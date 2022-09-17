import './OverlayMessage.css'
import Modal from "react-modal";

Modal.setAppElement("#root");
export default function OverlayMessage({ modalOpen, setModalOpen,setCards,turns }) {


    function toggleModal() {
        setModalOpen(!modalOpen);
        setCards([]);
    }

    return (
        <div>
            {/* <button onClick={toggleModal}>Open modal</button> */}
            <Modal
                isOpen={modalOpen}
                onRequestClose={toggleModal}
                contentLabel="You completed the game! CONGRATULATION"
                className="mymodal"
            >
                <div>You completed the game on turn <b>{turns}</b>! CONGRATULATION</div>
                <button onClick={toggleModal}>Close</button>
            </Modal>
        </div>
    );
}