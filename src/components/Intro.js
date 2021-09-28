import axios from 'axios';
import { useRef } from 'react'
import './Intro.css';

export default function Intro({ setPlayers }) {

    const inputRef = useRef()

    function startGame() {

        axios.post('http://127.0.0.1:8000/api/games', { player_count: inputRef.current.value })
            .then(response => {
                let cards = response.data.cards

                cards = cards.split("\r")

                let playersWithCards = cards.map(playerCards => {
                    return { cards: playerCards.split(",") }
                })

                setPlayers(playersWithCards)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (

        <div className="flex justify-center align-middle flex-col max-w-screen-md">
            <label>Number of players</label>
            <input ref={inputRef} type="number" min="0" defaultValue="4"></input>
            <br />
            <button onClick={startGame}>Start</button>
        </div>

    )
}
