import React from 'react';
import {NavLink} from 'react-router-dom';
import '../css/card.css';

function Card({cardData}) {
    return (
        <div className="cardDiv">
            <img src={`https://source.unsplash.com/500x250/?${cardData.title}`} alt="thumnail" />
            <div className="moreDetails">
                <h2 className="title">{cardData.title}</h2>
                <p><NavLink to={`moredetails/${cardData._id}`} target="_blank">Read more </NavLink></p>
            </div>
        </div>
    )
}

export default Card
