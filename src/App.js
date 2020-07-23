import React from 'react';
import './App.css';
import Container from "./Container";

function App() {
  return (
    <div className="App">
      <Container>
        <form className="js-form">
          <fieldset className="form">
            <legend className="form__legend">Przelicznik walut</legend>
            <p>
              <label>
                <span className="form__label">Kwota w zł*</span>
                <input
                  className="form__field js-amount"
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
                  <select className="form__field js-currency">
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
            <span className="form__result js-result"></span>
          </p>
    </Container>
      </div>
  );
}

export default App;
