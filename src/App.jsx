import { PureComponent, Suspense, useState } from "react";
import AvailablePrice from "./components/AvailablePrice/AvailablePrice";
import { ToastContainer } from "react-toastify";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CricketHero from "./components/CricketHero/CricketHero";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};
const playersPromise = fetchPlayers();

function App() {
  const [toggle, setToggle] = useState(true);
  const [avialAbleBlance, setAvialAbleBlance] = useState(10000000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);
  // console.log(purchasedPlayers)

  const removePlayer = (p) => {
    const filterData = purchasedPlayers.filter(
      (ply) => ply.player_name !== p.player_name,
    );
    setPurchasedPlayers(filterData);
    setAvialAbleBlance(
      avialAbleBlance +
        parseInt(p.price.split("USD").join("").split(",").join("")),
    );
  };

  return (
    <>
      <div className="max-w-6xl mx-auto">
        <Navbar avialAbleBlance={avialAbleBlance}></Navbar>
        <CricketHero></CricketHero>
        <div className="flex justify-between items-center md:font-bold font-semibold md:px-0 px-1">
          <h1 className="md:text-2xl text-[18px]">
            {toggle === true
              ? "Avialable Players"
              : `Secleted Players(${purchasedPlayers.length}/6)`}
          </h1>
          <div className="">
            <button
              onClick={() => setToggle(true)}
              className={`py-[10px] md:px-4 px-3 border border-gray-400 rounded-l-2xl border-r-0 ${toggle === true ? "bg-[#E7FE29]" : ""}`}
            >
              Avilable
            </button>
            <button
              onClick={() => setToggle(false)}
              className={`py-[10px] md:px-4 px-3 border border-gray-400 rounded-r-2xl border-l-0 ${toggle === false ? "bg-[#E7FE29]" : ""}`}
            >
              Secleted <span>{purchasedPlayers.length}</span>
            </button>
          </div>
        </div>
        {toggle === true ? (
          <Suspense
            fallback={
              <span className="loading loading-spinner loading-xl"></span>
            }
          >
            <AvailablePrice
              purchasedPlayers={purchasedPlayers}
              setPurchasedPlayers={setPurchasedPlayers}
              avialAbleBlance={avialAbleBlance}
              setAvialAbleBlance={setAvialAbleBlance}
              playersPromise={playersPromise}
            ></AvailablePrice>
          </Suspense>
        ) : (
          <SelectedPlayers
            removePlayer={removePlayer}
            purchasedPlayers={purchasedPlayers}
          ></SelectedPlayers>
        )}
      </div>
      <ToastContainer />
      <Footer></Footer>
    </>
  );
}

export default App;
