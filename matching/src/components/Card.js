
export default function Card({ card, matching }) {
    const card_back = require('../image/card_back.png'); 
    const match = () => {
        matching(card)
      }
    return (
        <div className="card" >
            <div>
                <img className="front" src={card.image} alt="card front" />
                <img className="back" src={card_back} onClick={match} alt="cover"  />
            </div>
        </div>
    )
}