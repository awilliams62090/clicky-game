import React from "react";
import "./nav.css";
import Score from "../Score";

const Nav = props => (

    <div className="nav">
    <ul>
        <li><h3>Woody's Roundup Memory Game!</h3></li>
        <Score score={props.score} topScore={props.topScore}/>
        <li id="score"> Score: {props.score} | Top Score: {props.topScore}</li>
    </ul>
    </div>
);

export default Nav;