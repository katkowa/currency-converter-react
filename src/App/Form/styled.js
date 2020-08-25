import styled from "styled-components";

export const Wrapper = styled.fieldset`
    margin: 20px;
    border-radius: 5px;
    border: 2px solid #ccc;
`;

export const Legend = styled.legend`
    font-size: 30px;
    color: darkcyan;
`;

export const Label = styled.span`
    width: 100%;
    display: inline-block;
    width: 250px;
    text-align: left;
`;

export const Field = styled.input`
    width: 100%;
    max-width: 300px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
`;

export const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: hsl(180, 15%, 56%);
    border-radius: 5px;
    border: 1px solid #ccc;
    color: #fff;
    font-weight: bold;
    letter-spacing: 5px;

    &:hover {
        background-color: hsl(180, 15%, 46%);
    }

    &:active {
        background-color: hsl(180, 15%, 66%);
    }
`;