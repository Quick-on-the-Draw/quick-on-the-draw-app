import React, { useEffect, useState } from 'react';
import './Timer.css';

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
        console.log(e.target.value);
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
        <>
            <div>
                {minutes === 0 && seconds === 0 ? (
                    <h1>Start Timer</h1>
                ) : (
                    <h1 className='finalCountdown'>
                        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                    </h1>
                )}
            </div>
            <form className='formBtn' onChange={handleTimeChange}>
                <h1>Change Timer:</h1>
                <input
                    className='radio'
                    id='1'
                    type='radio'
                    name='time'
                    value='1'
                />
                <label className='labels' htmlFor='1'>
                    1
                </label>
                <input
                    className='radio'
                    id='5'
                    type='radio'
                    name='time'
                    value='5'
                    defaultChecked='checked'
                />
                <label className='labels' htmlFor='5'>
                    5
                </label>
                <input
                    className='radio'
                    id='10'
                    type='radio'
                    name='time'
                    value='10'
                />
                <label className='labels' htmlFor='10'>
                    10
                </label>
            </form>
            <button className='timeBtn' onClick={toggleActive}>
                {isActive ? 'Stop' : 'Start'}
            </button>
        </>
    );
};

export default Timer;
