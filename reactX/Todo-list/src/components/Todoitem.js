import React, { useState, useEffect, useRef } from 'react';
import './Todoitem.css'
import classNames from 'classnames'



export function Example() {
    const [color, setColor] = useState('RED')

    const intervalRef = useRef();

    useEffect(() => {
    const id = setInterval(() => {
        setColor(getColor(color), color)
    }, 1000);
    intervalRef.current = id;
    return () => {
      clearInterval(intervalRef.current);
    };
  });

    function getColor(color){
        switch(color){
            case 'RED': 
                return 'GREEN';
            case 'GREEN':
                return 'YELLOW';
            default:
                return 'RED';
        }
    }

    return (
        <div>
            <div className="light">
                <div className={classNames('circle', 'red',{
                    active: color === 'RED'
                })} />
                <div className={classNames('circle', 'green',{
                    active: color === 'GREEN'
                })} />
                <div className={classNames('circle', 'yellow',{
                    active: color === 'YELLOW'
                })} />
            </div>
            {/* <button onClick={() => setColor('green')}>
                Bấm vào tôi
            </button> */}
        </div>
    );
}

export function TodoItem(props){
    let className = 'TodoItem';
    const { items } = props;
    if(items.isDone) className += ' TodoItem-done';
    return (
    <div className={className}>
        <p>{items.title}</p>
    </div>
    )
}