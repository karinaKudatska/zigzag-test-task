import React, { useEffect, useState } from 'react';
import timer from '../../images/timer.png';
import './Timer.scss';

const Timer = ({ closeWindow }) => {
  const [minutes, setMinutes] = useState(15);
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (seconds === 0) {
        if (minutes === 0) {
          closeWindow();
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds])

  return (
    <div className="timer">
      <img 
        className="timer__image"
        src={timer} />
        00:{minutes}:{seconds > 10 ? seconds : `0${seconds}`}
    </div>
  )
}


export default Timer;
