import React, { useState, useEffect } from "react";

const CountDown = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "December, 31, 2023";



    function getTime(deadline) {
        const time = Date.parse(deadline) - Date.now();
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    }


    useEffect(() => {
        const timeInterval = setInterval(()=>getTime(deadline), 1000);
        return () => clearInterval(timeInterval)
    }, []);

  return (
    <div>
        <div className="timer flex justify-between w-full mt-4 md:mt-10"> 
            <div className="date flex flex-col justify-center items-start"><span className="text-sm font-bold text-gray-600">Days</span><span className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-1">{days}</span></div>
            <div className="date flex flex-col justify-center items-start"><span className="text-sm font-bold text-gray-600">Hours</span><span className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-1">{hours}</span></div>
            <div className="date flex flex-col justify-center items-start"><span className="text-sm font-bold text-gray-600">Minutes</span><span className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-1">{minutes}</span></div>
            <div className="date flex flex-col justify-center items-start"><span className="text-sm font-bold text-gray-600">Seconds</span><span className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-1">{seconds}</span></div>
        </div>
    </div>
  )
};

export default CountDown;
