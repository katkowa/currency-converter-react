import styled from "styled-components";

export const Message = styled.div`
    height: 250px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    margin: 20px;
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.color.silver};
`;

export const Fieldset = styled.fieldset`
    margin: 20px;
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.color.silver};
`;

export const Legend = styled.legend`
    font-size: 30px;
    color: ${({ theme }) => theme.color.darkcyan};
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
    border: 1px solid ${({ theme }) => theme.color.silver};
`;

export const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.color.grannysmith};
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.color.silver};
    color: ${({ theme }) => theme.color.white};
    font-weight: bold;
    letter-spacing: 5px;

    &:hover {
        background-color: ${({ theme }) => theme.color.juniper};
    }

    &:active {
        background-color: ${({ theme }) => theme.color.towergray};
    }
`;

export const Line = styled.span`
    flex: 0 0 100%;
`;