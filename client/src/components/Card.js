import { useEffect, useState } from "react";
import './Card.css';
import { Link } from "react-router-dom";

function Card(props) {
    return (
        <div className='card'>
            <div className='card-thumbnail'>
                <img src={props.img} alt='Placeholder'></img>
            </div>
            <div className='card-info'>
                <h2>{props.title}</h2>
                <p>{props.body.substring(0, 300)}</p>
                <Link to={`read/${props.articleId}`}>Read more...</Link>
            </div>
        </div >

    );
}

export default Card;