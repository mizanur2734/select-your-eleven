import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({purchasedPlayers, removePlayer}) => {
    // console.log(purchasedPlayers)
    return (
       <div className='md:my-6 my-4'>
        {
            purchasedPlayers.map(player => <SelectedCard removePlayer={removePlayer} player={player}></SelectedCard>)
        }
       </div>
    );
};

export default SelectedPlayers;