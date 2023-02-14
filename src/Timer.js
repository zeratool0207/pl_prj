import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
    const [ min, setMin ]= useState(5);
    const [ sec, setSec ] = useState(0);
    const time = useRef(300);
    const timerId = useRef(null);

    useEffect( () => {
        timerId.current = setInterval( () => {
            setMin(parseInt(time.current / 60));
            setSec(time.current % 60);
        }, 1000);
        return () => clearInterval(timerId.current);
    },[]);

    useEffect( () => {
        if( time.current <= 0 ) {
            console.log('타임 아웃');
            clearInterval(timeId.current);
        }
    }, [sec]);

    return (
        <div className="timer">
            { min } : { sec }
        </div>
    )
}

export default Timer;