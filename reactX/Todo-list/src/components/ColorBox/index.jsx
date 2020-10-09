import React, { useState } from "react";
// import PropTypes from "prop-types";

function randomColor() {
    const COLOR_RANDOM = ["red", "green", "yellow", "orange"];
    let random = Math.floor(Math.random() * COLOR_RANDOM.length);
    return COLOR_RANDOM[random];
}

function ColorBox() {
    const [color, setColor] = useState(() => {
        const innitialColor = localStorage.getItem("box_color") || "deeppink";
        return innitialColor;
    });

    function handleClick() {
        const newColor = randomColor();
        setColor(newColor);
        localStorage.setItem("box_color", newColor);
    }

    return (
        <div
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={handleClick}
        />
    );
}

export default ColorBox;
