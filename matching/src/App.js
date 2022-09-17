import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Level from './components/Level/Level';
import OverlayMessage from './components/OverlayMessage/OverlayMessage';
import Status from './components/Status/Status';


import { user } from './mock_data';
import { getCards } from './services/CardService';
import { CreateGame } from './services/GameService';



function App() {
  // cards infomration

  const [cards, setCards] = useState([])
  const [player, setPlayer] = useState([])
  const [difficulity, setDifficulity] = useState("Choose the difficulity level")
  const [turns, setTurns] = useState(0)
  const [disabled, setDisabled] = useState(false)
  const [modalOpen, setModalOpen] = useState(false);

  // get user info from API
  const getPlayerInfo = () => {
    // write code here
    // ...
    // mock user data
    setPlayer(user)
  }

  const getCardsInfo = (num, level) => {
    setDifficulity(level)
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
    getPlayerInfo()
    if (choiceOne && choiceTwo) {
      setDisabled(true)
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
        setTimeout(() => resetTurn(), 1000)
      } else {
        setTimeout(() => resetTurn(), 1000)
      }

    }
    if (cards.every(c => (c.match === true))) {
      CreateGame(turns, cards.length / 2, user.user_id);
    }
  }, [choiceOne, choiceTwo])

  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  return (
    <div className="App">
      <h1>Memory Match</h1>
      <OverlayMessage
        modalOpen={modalOpen || (cards.every(c => (c.match === true)) && cards.length > 0)}
        setModalOpen={setModalOpen}
        setCards={setCards}
        turns={turns}
      />
      <Level getCardsInfo={getCardsInfo} />
      <Status
        player={player}
        difficulity={difficulity}
        turns={turns}
      />
      <div className="card-grid">
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            matching={matching}
            flipped={card === choiceOne || card === choiceTwo || card.match}
            disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
