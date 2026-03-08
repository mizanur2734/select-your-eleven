import React, { useState } from "react";
import userImg from "../../assets/Group.png";
import flagImg from "../../assets/Group-1.png";
import { toast } from "react-toastify";
const PlayerCard = ({
  player,
  setAvialAbleBlance,
  avialAbleBlance,
  purchasedPlayers,
  setPurchasedPlayers,
}) => {
  const [isSecleted, setIsSeleted] = useState(false);

  const handleSelected = (playerData) => {
    const playerPrice = parseInt(
      playerData.price.split("USD").join("").split(",").join(""),
    );
    if (avialAbleBlance < playerPrice) {
      toast("Not enough coins!!");
      return;
    }
    if(purchasedPlayers.length === 6){
        toast('6 players already selected!')
        return
    }
    setIsSeleted(true);
    setAvialAbleBlance(avialAbleBlance - playerPrice);
    setPurchasedPlayers([...purchasedPlayers, playerData])
  };
  return (
    <div className="card bg-base-100 w-96 shadow-sm p-3 mx-auto">
      <figure>
        <img
          src={player.player_image}
          alt="Shoes"
          className="w-full h-64 object-cover"
        />
      </figure>
      <div className="mt-4">
        {/* title */}
        <div className="flex">
          <img className="w-5" src={userImg} alt="" />
          <h2 className="ml-2 font-semibold">{player.player_name}</h2>
        </div>
        {/*  */}
        <div className="flex justify-between mt-3 border-b-1 pb-2 border-gray-400">
          <div className="flex items-center">
            <img className="w-4" src={flagImg} alt="" />
            <span className="ml-2">{player.player_country}</span>
          </div>
          <button className="btn">{player.player_role}</button>
        </div>
        <div className="flex justify-between mt-2">
          <span className="font-bold">Rating</span>
          <span>{player.rating}</span>
        </div>
        <div className="flex justify-between mt-3">
          <span className="font-bold">{player.bating_style}</span>
          <span>{player.bowling_style}</span>
        </div>
        <div className="flex justify-between items-center mt-3">
          <p className="font-bold">Price: ${player.price}</p>
          <button
            disabled={isSecleted}
            onClick={() => {
              handleSelected(player);
              //   setIsSeleted(true);
              //   setAvialAbleBlance(avialAbleBlance-player.price.split("USD").join("").split(",").join(""));
            }}
            className="btn"
          >
            {isSecleted === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
