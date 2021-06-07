import React, { Component } from 'react';
import Card from '../card/card.component';
import './card-list.style.css';

export const CardList = (props) => {
    return ( 
        <div className='card-list'>
            {props.monsters.map(
                item => (
                    <Card key={item.id} monster={item}/>  
                    /* 
                       can be anytype of data - mon/fry is passed to the single comp card
                       card list will be one single type of comp holding card  
                    */
                )
            )}
        </div>
     );
}