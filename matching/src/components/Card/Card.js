import './Card.css';

export default function Card({ card, matching, flipped, disabled }) {
    const card_back = require('../../image/card_back.png');
    const match = () => {
        if (!disabled) {
            matching(card)
        }
    }
    return (
        <div className="card" >
            <div className={flipped ? "flipped" : ""}>
                <img className="front" src={card.image} alt="card front" />
                <img className="back" src={card_back} onClick={match} alt="cover" />
            </div>
        </div>
    )
}