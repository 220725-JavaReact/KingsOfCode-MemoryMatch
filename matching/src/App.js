import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

// import { cards } from './mock_data';
import { getCards } from './services/CardService';



function App() {
  // cards infomration
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  const getCardsInfo = (num) => {
    getCards(num)
      .then(get_cards => {
        const shuffleCards = [...get_cards.cards, ...get_cards.cards]
          .sort(() => Math.random() - 0.5)
          .map(card => ({ ...card, id: Math.random(), match: false }))
        setCards(shuffleCards)
        setTurns(0)
      });
  }

  // card choices for match
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)

  // handle a choice
  const matching = (card) => {
    console.log(card)
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.code === choiceTwo.code) {
        setCards(e => {
          return e.map(card => {
            if (card.code === choiceOne.code) {
              return { ...card, match: true }
            } else {
              return card
            }
          })
        })
        console.log('Match!')
        resetTurn()
      } else {
        console.log('Nahh')
        resetTurn()
      }

    }
  }, [choiceOne, choiceTwo])

  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }

  return (
    <div className="App">
      <h1>Memory Match</h1>
      <button onClick={() => getCardsInfo(2)}>New Game (Easy) </button>
      <div className="card-grid">
        {cards.map(card => (
          <Card key={card.id}
            card={card}
            matching={matching}
            flipped={false}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
