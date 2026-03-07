import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({purchasedPlayers}) => {
    // console.log(purchasedPlayers)
    return (
       <div className='md:my-6 my-4'>
        {
            purchasedPlayers.map(player => <SelectedCard player={player}></SelectedCard>)
        }
       </div>
    );
};

export default SelectedPlayers;