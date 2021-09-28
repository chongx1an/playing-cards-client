import React from 'react'
import Card from './Card'
import "./Table.css"

export default function Table({ players, setPlayers }) {

  function replay() {
    setPlayers([])
  }

  return (
    <div className="w-full h-full xl:w-8/12 my-10 xl:mb-0 px-4 mx-auto ">
      <div className="flex justify-end">
        <button className="mb-5" onClick={replay}>Replay</button>
      </div>
      <div className="relative flex flex-col min-w-0 break-words bg-white border w-full rounded">

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
                    <tr key={i}>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                        Player {i + 1}
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 flex flex-wrap">
                        {
                          player.cards.map((card, i) => {
                            return <Card key={i} card={card}></Card>;
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
    </div>
  )
}
