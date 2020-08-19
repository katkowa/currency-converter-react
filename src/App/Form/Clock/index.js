import React, { useState, useEffect } from "react";
import "./style.css";

const formatDate = (date) => {
    return date.toLocaleString(
        undefined,
        {
            weekday: "long", 
            day: "numeric",
            month: "long", 
            hour: "2-digit", 
            minute: "2-digit", 
            second: "2-digit"
        }
    )
}

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div className="clock">
            Dzisiaj jest {formatDate(time)}
        </div>
    );
}

export default Clock;