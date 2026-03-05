import React, { use } from "react";
import userImg from "../../assets/Group.png";
import flagImg from "../../assets/Group-1.png";
const AvailablePrice = ({ playersPromise }) => {
  const playersData = use(playersPromise);
  console.log(playersData);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {playersData.map((player) => (
        <div className="card bg-base-100 w-96 shadow-sm p-4">
          <figure>
            <img
              src={player.player_image}
              alt="Shoes" className="w-full h-64 object-cover"
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
              <button className="btn">Choose Player</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePrice;
