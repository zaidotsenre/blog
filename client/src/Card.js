import { useEffect, useState } from "react";

function Card(props) {
    return (
        <div className="Card">
            <div className="CardTitle"><h3>{props.title}</h3></div>
            <div className="CardSummary"><p>{props.summary}</p></div>
        </div>

    );
}

export default Card;