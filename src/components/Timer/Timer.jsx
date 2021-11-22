import React, { useEffect, useState } from 'react';

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
        <>
            <div>
                {minutes === 0 && seconds === 0 ? (
                    <h1>Start Timer</h1>
                ) : (
                    <h1 className={finalCountdown}>
                        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                    </h1>
                )}
            </div>
            <form className={formBtn} onChange={handleTimeChange}>
                <h1>Change Timer:</h1>
                <label className={labels} htmlFor='1'>
                    1
                </label>
                <input
                    className={radio}
                    id='1'
                    type='radio'
                    name='time'
                    value='1'
                />
                <label className={labels} htmlFor='5'>
                    5
                </label>
                <input
                    className={radio}
                    id='5'
                    type='radio'
                    name='time'
                    value='5'
                    defaultChecked='checked'
                />
                <label className={labels} htmlFor='10'>
                    10
                </label>
                <input
                    className={radio}
                    id='10'
                    type='radio'
                    name='time'
                    value='10'
                />
            </form>
            <button className={timeBtn} onClick={toggleActive}>
                {isActive ? 'Stop' : 'Start'}
            </button>
        </>
    );
};

const timeBtn = `
rounded-lg 
px-4 
py-2 
bg-green-700 
text-green-100
`;

const radio = `
hidden
`;

const formBtn = `
flex
items-center
justify-center
space-x-4
m-3
`;

const labels = `
hover:bg-lightsage
border-2
border-darksage
rounded-full
h-6 
w-6
flex
space-x-4
items-center
justify-center
cursor-pointer
`;

const finalCountdown = `
text-4xl

`;

export default Timer;
