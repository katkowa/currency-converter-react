import React from "react";
import { Wrapper, Date, Line } from "./styled";

const Info = ({ data }) => !!data && (
    <Wrapper>
        <Line>Kursy walut pobierane są z Europejskiego Banku Centralnego.</Line>
        <Line>Aktualne na dzień: <Date>{data ? data.date : ""}</Date></Line>
    </Wrapper>
);

export default Info;