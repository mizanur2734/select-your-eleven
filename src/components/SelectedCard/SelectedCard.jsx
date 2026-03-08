import React from "react";

const SelectedCard = ({ player, removePlayer }) => {
  //   console.log(player);
  const handleRemove = () => {
    removePlayer(player);
  };
  return (
    <div className="border border-gray-300 rounded-xl p-2 mt-2 my-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={player.player_image}
            className="w-14 h-14 rounded-xl"
            alt=""
          />
          <div className="ml-2">
            <h3 className="text-lg ">{player.player_name}</h3>
            <p className="text-xs">{player.player_role}</p>
          </div>
        </div>
        <div onClick={handleRemove}>
          <img src="https://iili.io/qzNnVDu.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SelectedCard;
