import { useEffect, useState } from "react";
import './Section.css';


function Section(props) {
    return (
        <div id={props.id} className='section'>
            <div className='section-header'>
                <h3>{props.header}</h3>
            </div>
            <div className='section-content'>
                {props.content}
            </div>

        </div>

    );
}

export default Section;