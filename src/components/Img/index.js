import React from "react";
import "./img.css";

// not much will change about these change about these images so we will have
// them set up as statelss

const Image = props => {
    const {url, id, alt, clicked, shuffle} = props
    return (
        <div className="images">
            <img src={url} alt={alt} onClick={() => props.handleClick(id)}></img>
        </div>
    )
}

export default Image