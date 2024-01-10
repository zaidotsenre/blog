import { useEffect, useState } from "react";
import './Card.css';
import placeholderImg from '../img/placeholder.jpg';
import { Link } from "react-router-dom";

function Card(props) {
    return (
        <div className='card'>
            <div className='card-thumbnail'>
                <img src={props.thumbnail ? props.thumbnail : placeholderImg} alt='Thumbnail'></img>
            </div>
            <div className='card-info'>
                <h2>{props.title}</h2>
                <p>{props.summary}</p>
                <Link to={`read/${props.articleId}`}>Read more...</Link>
            </div>
        </div >

    );
}

export default Card;