import { useEffect, useState } from "react";
import './Card.css';

function Card(props) {
    return (
        <div className='card'>
            <div className='card-thumbnail'>
                <img src={props.img} alt='Placeholder'></img>
            </div>
            <div className='card-info'>
                <h2>{props.title}</h2>
                <p>{props.body.substring(0, 300)}</p>
                <a href='#'>Read more...</a>
            </div>
        </div>

    );
}

export default Card;