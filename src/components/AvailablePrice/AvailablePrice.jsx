import React, { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePrice = ({
  playersPromise,
  setAvialAbleBlance,
  avialAbleBlance,
  purchasedPlayers,
  setPurchasedPlayers,
}) => {
  const playersData = use(playersPromise);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-4 md:mb-18 mb-10">
      {playersData.map((player) => (
        <PlayerCard
          purchasedPlayers={purchasedPlayers}
          setPurchasedPlayers={setPurchasedPlayers}
          avialAbleBlance={avialAbleBlance}
          setAvialAbleBlance={setAvialAbleBlance}
          player={player}
        ></PlayerCard>
      ))}
    </div>
  );
};

export default AvailablePrice;
