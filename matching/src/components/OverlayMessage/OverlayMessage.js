import './OverlayMessage.css'
import Modal from "react-modal";

Modal.setAppElement("#root");
export default function OverlayMessage({ modalOpen, setModalOpen,setCards,turns,score }) {


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
                contentLabel="You completed the game! CONGRATULATIONS"
                className="mymodal"
            >
                <div>You completed the game on turn <b>{turns}</b>! Final score: <b>{score}</b>! CONGRATULATIONS</div>
                <button onClick={toggleModal}>Close</button>
            </Modal>
        </div>
    );
}