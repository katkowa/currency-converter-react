import React, { useState } from "react";
import "./style.css";

const Form = () => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("EUR");
    const [result, setResult] = useState("");

    const getCurrencyRate = (currency) => {
        switch (currency) {
            case "EUR":
                return 4.4524;
            case "USD":
                return 3.9667;
            case "GBP":
                return 4.9293;
            case "KRW":
                return 0.003269;
        }
    };

    const calculateResult = (amount, currency) => {
        return amount / getCurrencyRate(currency);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        setResult(calculateResult(amount, currency));
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
                                <option value="EUR">Euro</option>
                                <option value="GBP">Funt brytyjski</option>
                                <option value="USD">Dolar amerykański</option>
                                <option value="KRW">Won koreański</option>
                            </select>
                        </label>
                    </p>
                    <p>
                        <button className="form__button">Oblicz</button>
                    </p>
                </fieldset>
            </form>
            <p>
                <span className="form__result" hidden={result === ""}>
                    {amount} PLN = <span className="form__result--value">{(+result).toFixed(2)} {currency}</span>
                </span>
            </p>
        </>
    )
}

export default Form;

