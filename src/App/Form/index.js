import React, { useState } from "react";
import { currencies } from "../currencies";
import Result from "./Result";
import "./style.css";

const Form = ({result, calculateResult}) => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].id);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency);
    }

    return (
        <>
            <form onSubmit={onFormSubmit}>
                <fieldset className="form">
                    <legend className="form__legend">Przelicznik walut</legend>
                    <p>
                        <label>
                            <span className="form__label">Kwota w zł*</span>
                            <input
                                value={amount}
                                onChange={({ target }) => setAmount(target.value)}
                                className="form__field"
                                placeholder="Wpisz kwotę w złotówkach"
                                type="number"
                                step="0.01"
                                required
                            />
                        </label>
                    </p>
                    <p>
                        <label>
                            <span className="form__label">Waluta</span>
                            <select
                                value={currency}
                                onChange={({ target }) => setCurrency(target.value)}
                                className="form__field"
                            >
                                {currencies.map((currency => (
                                    <option
                                        key={currency.id}
                                        value={currency.id}>
                                        {currency.name}
                                    </option>
                                )))}
                            </select>
                        </label>
                    </p>
                    <p>
                        <button className="form__button">Oblicz</button>
                    </p>
                </fieldset>
            </form>
            <Result
                result={result}
            />
        </>
    )
}

export default Form;

