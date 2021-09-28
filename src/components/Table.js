import React from 'react'
import Card from './Card'
import "./Table.css"

export default function Table({ players, setPlayers }) {

  function replay() {
    setPlayers([])
  }
  return (
    <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
      <div className="relative flex flex-col min-w-0 break-words bg-white border w-full mb-6 rounded">

        <div className="block w-full overflow-x-auto rounded-t">
          <table className="items-center bg-transparent w-full border-collapse ">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle py-3 text-xs uppercase border border-t-0 border-l-0 border-r-0 border-b-1 whitespace-nowrap font-semibold text-left">
                  Players
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle py-3 text-xs uppercase border border-t-0 border-l-0 border-r-0 border-b-1 whitespace-nowrap font-semibold text-left">
                  Cards
                </th>
              </tr>
            </thead>

            <tbody>

              {
                players.map((player, i) => {

                  return (
                    <tr>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                        Player {i + 1}
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 flex">
                        {
                          player.cards.map(card => {
                            return <Card card={card}></Card>;
                          })
                        }
                      </td>

                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
      <button onClick={replay}>Replay</button>
    </div>
  )
}
