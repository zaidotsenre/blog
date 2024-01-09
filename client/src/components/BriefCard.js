import { useEffect, useState } from "react";

function BriefCard(props) {
    return (
        <div className='card'>
            <div className='card-thumbnail'>
                <img src={props.img} alt='Placeholder'></img>
            </div>
            <div className='card-info'>
                <h2>{props.title}</h2>
            </div>
        </div>

    );
}

export default BriefCard;