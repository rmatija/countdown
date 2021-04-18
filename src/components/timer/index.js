import React, { useState, useEffect } from "react";
import "./index.css";

const Timer = () => {

    const [seconds, setSeconds] = useState(100);
    const [timerCount, setTimerCount] = useState(true);

    useEffect(() => {
        if (seconds > 0 && timerCount ) {
            setTimeout(() => setSeconds(seconds - 1), 1000);
          } else {
            setSeconds(seconds);
          }
      });

     const stopTimer = () => {
        setTimerCount(false);
    }

    return (
      <div className="mt-100 layout-column align-items-center justify-content-center">
         <div className="timer-value" data-testid="timer-value"> {seconds} </div>
         <button className="large" data-testid="stop-button" onClick={stopTimer}>Stop Timer</button>
      </div>
    );
}

export default Timer