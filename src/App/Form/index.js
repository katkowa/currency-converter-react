import React, { useState } from "react";
import { currencies } from "../currencies";
import Result from "./Result";
import Clock from "./Clock";
import { Wrapper, Legend, Label, Field, Button } from "./styled";

const Form = ({ result, calculateResult }) => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].id);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency);
    }

    return (
        <>
            <Clock />
            <form onSubmit={onFormSubmit}>
                <Wrapper>
                    <Legend>Przelicznik walut</Legend>
                    <p>
                        <label>
                            <Label>Kwota w zł*</Label>
                            <Field
                                value={amount}
                                onChange={({ target }) => setAmount(target.value)}
                                placeholder="Wpisz kwotę w złotówkach"
                                type="number"
                                step="0.01"
                                required
                            />
                        </label>
                    </p>
                    <p>
                        <label>
                            <Label>Waluta</Label>
                            <Field as="select"
                                value={currency}
                                onChange={({ target }) => setCurrency(target.value)}
                            >
                                {currencies.map((currency => (
                                    <option
                                        key={currency.id}
                                        value={currency.id}>
                                        {currency.name}
                                    </option>
                                )))}
                            </Field>
                        </label>
                    </p>
                    <p>
                        <Button>Oblicz</Button>
                    </p>
                </Wrapper>
            </form>
            <Result
                result={result}
            />
        </>
    )
}

export default Form;

