import React from "react";
import { Wrapper } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

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
    const date = useCurrentDate();

    return (
        <Wrapper>
            Dzisiaj jest {formatDate(date)}
        </Wrapper>
    );
}

export default Clock;