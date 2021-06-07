import React from 'react';
import './card.style.css';

const Card = (props) => {
    return ( 
        <div className='card-container'>
            <img src={`https://robohash.org/${props.monster.id}?set=set2`} alt="" />
            <h2> {props.monster.name} </h2>
            <span> {props.monster.email} </span>
        </div>
     );
}
 /* 
    this is a repeated component
    hence there is no map available and it is called repeatedly
 */
export default Card;