import React, { useEffect, useState } from 'react';

export const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(5);
    const [isActive, setIsActive] = useState(false);

    // if we want to add 1 and 10 min options as well, create input and set a variable to selected, then set minutes state to that variable.

    function toggleActive() {
        setIsActive(!isActive);
        setMinutes(5);
        setSeconds(0);
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
            console.log('not active and 0 time on timer');
        }

        return () => {
            clearInterval(interval);
        };
    }, [isActive, minutes, seconds]);
    return (
        <>
            <div>
                {minutes === 0 && seconds === 0 ? (
                    <h1>Start Timer</h1>
                ) : (
                    <h1>
                        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}{' '}
                        remaining
                    </h1>
                )}
            </div>
            <button onClick={toggleActive}>
                {isActive ? 'Stop' : 'Start'}
            </button>
        </>
    );
};
