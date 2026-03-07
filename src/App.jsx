import { PureComponent, Suspense, useState } from "react";
import AvailablePrice from "./components/AvailablePrice/AvailablePrice";

import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import Navbar from "./components/Navbar/Navbar";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};
const playersPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [avialAbleBlance, setAvialAbleBlance] = useState(600000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([])
  console.log(purchasedPlayers)
  
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <Navbar avialAbleBlance={avialAbleBlance}></Navbar>
        <div className="flex justify-between items-center font-bold">
          <h1 className="text-2xl">Avialable Players </h1>
          <div className="">
            <button
              onClick={() => setToggle(true)}
              className={`py-[10px] px-4 border border-gray-400 rounded-l-2xl border-r-0 ${toggle === true ? "bg-[#E7FE29]" : ""}`}
            >
              Avilable
            </button>
            <button
              onClick={() => setToggle(false)}
              className={`py-[10px] px-4 border border-gray-400 rounded-r-2xl border-l-0 ${toggle === false ? "bg-[#E7FE29]" : ""}`}
            >
              Secleted <span>0</span>
            </button>
          </div>
        </div>
        {toggle === true ? (
          <Suspense
            fallback={
              <span className="loading loading-spinner loading-xl"></span>
            }
          >
            <AvailablePrice purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers}  avialAbleBlance={avialAbleBlance} setAvialAbleBlance={setAvialAbleBlance} playersPromise={playersPromise}></AvailablePrice>
          </Suspense>
        ) : (
          <SelectedPlayers purchasedPlayers={purchasedPlayers}></SelectedPlayers>
        )}
      </div>
    </>
  );
}

export default App;
