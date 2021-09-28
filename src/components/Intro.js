import axios from 'axios';
import { useState, useRef } from 'react'
import Card from './Card';
import './Intro.css';

export default function Intro({ setPlayers }) {

    const inputRef = useRef()
    const [message, setMessage] = useState()
    const [isButtonEnabled, setIsButtonEnabled] = useState(true)

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
                setMessage(error.response.data.errors.player_count)
            })
    }

    function handleInputChange() {
        setIsButtonEnabled(inputRef.current.value > 0)
    }

    return (

        <div className="flex justify-center flex-col max-w-screen-md">

            <div className="mb-5 flex justify-center spin">
                <Card card={"SA"}></Card>
            </div>

            <h1 className="font-bold text-center mb-20 text-4xl">Playing Cards</h1>
            <label className="text-xs">Number of players</label>
            <input ref={inputRef} type="number" min="0" defaultValue="4" onKeyPress={(e) => e.key === 'Enter' ? startGame() : null} onChange={handleInputChange}></input>
            <br />
            <button disabled={!isButtonEnabled} onClick={startGame}>Start</button>
            <br />
            {message && (
                <div className="rounded bg-red-50 p-2">
                    <p className="text-xs overflow-visible text-red-500">{message}</p>
                </div>
            )}
        </div>

    )
}
