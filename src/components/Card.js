import React from 'react'
import '../index.css';

export default function Card(props) {
    let badgeText;
    if(props.card.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if(props.card.location === "Online"){
        badgeText = "ONLINE"
    }
    return ( 
        <div className="card">
        {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={process.env.PUBLIC_URL +  `/Imgs/${props.card.coverImg}`} className="card--image" alt='card-age' />
            <div className="card--stats">
                <span className='card--star'>⭐</span> 
                <span>{props.card.stats.rating}</span>
                <span className="gray">({props.card.stats.reviewCount}) • </span>
                <span className="gray">{props.card.location}</span>
            </div>
            <p className="para">{props.card.title}</p>
            <p><span className="bold">From ${props.card.price}</span> / person</p>
        </div>
    )
}
