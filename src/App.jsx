import { Suspense } from "react";
import AvailablePrice from "./components/AvailablePrice/AvailablePrice";

import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import Navbar from "./components/Navbar/Navbar";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  const playersPromise = fetchPlayers();
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <AvailablePrice playersPromise={playersPromise}></AvailablePrice>
        </Suspense>
        <SelectedPlayers></SelectedPlayers>
      </div>
    </>
  );
}

export default App;
