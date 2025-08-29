import React from "react";
import "../stylesheets/basics.css";

function Rectangle(props) {
    return <div className="card">
        <h3>{props.title}</h3>
        <div className="center">{props.body}</div>
        <img src={ props.img } alt={props.altImg} />
    </div>;
}

export default Rectangle;