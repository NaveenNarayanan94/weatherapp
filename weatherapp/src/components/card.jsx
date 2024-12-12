import React from "react";
import "./card.css";
const Card = (props) => {
    return (
        <>
            <div className="card">
                <h3>{props.name}</h3>
                <h1>{props.num}</h1>
            </div>
       
        </>

    )
}
export default Card;