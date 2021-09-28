import React from 'react'
import { ImSpades, ImHeart, ImClubs, ImDiamonds } from "react-icons/im";

export default function Card({ card }) {

    const suit = card.split("")[0]
    const rank = card.split("")[1]

    function SuitIcon(s) {
        switch (s) {
            case 'S':
                return <ImSpades className="text-gray-500" />;
            case 'H':
                return <ImHeart className="text-gray-500" />;
            case 'C':
                return <ImClubs className="text-gray-500" />;
            case 'D':
                return <ImDiamonds className="text-gray-500" />;
            default:
                return s;
        }
    }

    function RankText(r) {
        switch (r) {
            case 'X':
                return "10";
            default:
                return r;
        }
    }

    return card ? (
        <div className="h-14 w-11 bg-gray-100 mx-1 mb-2 rounded flex justify-center items-center">
            {SuitIcon(suit)} <p className="ml-1 font-bold text-gray-500">{RankText(rank)}</p>
        </div>
    ) : null
}
