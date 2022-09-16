import './Level.css';
export default function Level({ getCardsInfo }) {
    return (
        <div className="difficulity">
            {/* <h3>Choose the difficulity</h3> */}
            <button onClick={() => getCardsInfo(10, "Easy")}>Easy </button>
            <button onClick={() => getCardsInfo(20, "Medium")}>Medium </button>
            <button onClick={() => getCardsInfo(30, "Hard")}>Hard </button>
        </div>

    )
}