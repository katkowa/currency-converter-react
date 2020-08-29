import React from "react";
import { Wrapper } from "./styled";
import { useCurrentDate } from "./useCurrentDate";
import { useDateFromat } from "./useDateFormat";

const Clock = () => {
    const date = useCurrentDate();

    return (
        <Wrapper>
            Dzisiaj jest {useDateFromat(date)}
        </Wrapper>
    );
}

export default Clock;