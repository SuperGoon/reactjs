import React, { useState, useEffect, useRef } from "react";
import "./example.scss";
import classNames from "classnames";

function Example() {
    const [color, setColor] = useState("RED");
    const intervalRef = useRef();

    useEffect(() => {
        const id = setInterval(() => {
            setColor(getColor(color), color);
        }, 500);
        intervalRef.current = id;
        return () => {
            clearInterval(intervalRef.current);
        };
    });

    function getColor(color) {
        switch (color) {
            case "RED":
                return "YELLOW";
            case "YELLOW":
                return "GREEN";
            default:
                return "RED";
        }
    }

    return (
        <div>
            <div className="light">
                <div
                    className={classNames("circle", "red", {
                        active: color === "RED",
                    })}
                />
                <div
                    className={classNames("circle", "yellow", {
                        active: color === "YELLOW",
                    })}
                />
                <div
                    className={classNames("circle", "green", {
                        active: color === "GREEN",
                    })}
                />
            </div>
            {/* <button onClick={() => setColor('green')}>
                Bấm vào tôi
            </button> */}
        </div>
    );
}

export default Example;
