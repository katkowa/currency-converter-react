import React, { useState } from "react";
import { currencies } from "../currencies";
import { Message, Fieldset, Legend, Label, Field, Button } from "./styled";

const Form = ({ data, calculateResult }) => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(Object.keys(currencies)[0]);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency);
    }

    if (data === undefined) {
        return (
            <Message>
                Proszę czekać, ładujemy dane!
            </Message>
        );
    }
    return (
        <>
            <form onSubmit={onFormSubmit}>
                <Fieldset>
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
                                {Object.keys(data.rates).map((currency => (
                                    <option
                                        key={currency}
                                        value={currency}>
                                        {currencies[currency] ? currencies[currency] : currency}
                                    </option>
                                )))}
                            </Field>
                        </label>
                    </p>
                    <p>
                        <Button>Oblicz</Button>
                    </p>
                </Fieldset>
            </form>
        </>
    )
}

export default Form;

