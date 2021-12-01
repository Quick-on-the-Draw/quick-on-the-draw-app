import React, { useEffect, useState } from 'react';
import TimerButtons from './TimerButtons';
import './styles/Timer.css';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(5);
  const [isActive, setIsActive] = useState(false);
  const [timeLimit, setTimeLimit] = useState(5);

  function toggleActive() {
    setIsActive(!isActive);
    setMinutes(timeLimit);
    setSeconds(0);
  }

  function handleTimeChange(e) {
    setTimeLimit(e.target.value);
    setMinutes(e.target.value);
  }

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((seconds) => seconds - 1);
        }

        if (seconds === 0) {
          if (minutes === 0) {
            setIsActive(false);
            clearInterval(interval);
          } else {
            setMinutes((minutes) => minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
    } else if (!isActive && seconds !== 0 && minutes !== 0) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, minutes, seconds]);
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        {minutes === 0 && seconds === 0 ? (
          <h1>Start Timer</h1>
        ) : (
          <h1 className="font-sans text-6xl">
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </h1>
        )}
      </div>
      <TimerButtons
        toggleActive={toggleActive}
        handleTimeChange={handleTimeChange}
        isActive={isActive}
      />
    </div>
  );
};

export default Timer;
