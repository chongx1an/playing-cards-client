import React from 'react'

export default function Card({ card }) {

    const suit = card.split("")[0]
    const rank = card.split("")[1]

    return (
        <div className="h-14 w-11 bg-gray-100 mx-1 rounded">
            {suit} {rank}
        </div>
    )
}
