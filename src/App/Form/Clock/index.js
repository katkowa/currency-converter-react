import React, { useState } from "react";
import "./style.css";

const Clock = () => {
    const [time, setTime] = useState(new Date());

    setInterval(() => {
        setTime(new Date());
    }, 1000);

    return (
        <div className="clock">
            Dzisiaj jest&nbsp;
            {time.toLocaleString(
                undefined,
                {
                    month: "long", weekday: "long", day: "numeric",
                    hour: "numeric", minute: "numeric", second: "numeric"
                }
            )}
        </div>
    );
}

export default Clock;