import React from "react";
import SelectedCard from "../SelectedCard/SelectedCard";

const SelectedPlayers = ({ purchasedPlayers, removePlayer, setToggle }) => {
  // console.log(purchasedPlayers)
  return (
    <div className="md:my-6 my-4">
      {purchasedPlayers.map((player) => (
        <SelectedCard
          removePlayer={removePlayer}
          player={player}
        ></SelectedCard>
      ))}
      <div className="px-11 my-8">
        <button
          onClick={() => setToggle(true)}
          className="py-[10px]  md:px-4 px-3 border border-gray-400
       rounded-2xl bg-[#E7FE29]"
        >
          Add more player
        </button>
      </div>
    </div>
  );
};

export default SelectedPlayers;
