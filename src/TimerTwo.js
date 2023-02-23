import React, { useState, useEffect } from "react";

const TimerTwo = () => {
    const [minutes, setMinutes] = useState(5);
    const [seconds, setSeconds] = useState(0);

    const [ isTimeOn, setIsTimeOn ]=useState(false);
  
    useEffect(() => {
        if ( isTimeOn ) {
            const countdown = setInterval(() => {
              if (parseInt(seconds) > 0) {
                setSeconds(parseInt(seconds) - 1);
              }
              if (parseInt(seconds) === 0) {
                if (parseInt(minutes) === 0) {
                  clearInterval(countdown);
                } else {
                  setMinutes(parseInt(minutes) - 1);
                  setSeconds(59);
                }
              }
            }, 1000);
            return () => clearInterval(countdown);
        }
    }, [minutes, seconds, isTimeOn]);

    const testBtn = () => {
        setIsTimeOn(true);
        setMinutes(5);
        setSeconds(0);
        if (minutes == 0 && seconds == 0 ) {
            console.log('0분 0초');
        } else {
            console.log('0분이 아니거나 0초가 아님');
        }
    }

  return (
    <div>
      {minutes}:{seconds < 10 ? `0${seconds}` : seconds} <br />
      {isTimeOn.toString()}
      <button onClick={testBtn}>테스트</button>
    </div>
  );
};

export default TimerTwo;