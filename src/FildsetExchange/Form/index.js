
import { useState } from "react"
import { currencies } from "../../currencies"
import { Result } from "./Result";
import "./style.css"


export const Form = ({ calculateResult, result }) => {

    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount)
    }
    return (
        <form
            className="form"
            onSubmit={onSubmit}>
            <p>
                <label className="form__label form__label--changed"><span className="form__label--text">Podaj kwotę w PLN:</span>
                    <input
                        value={amount}
                        onChange={({ target }) => setAmount(target.value.slice(0))}
                        className="form__label--input"
                        type="number"
                        required step="0.01"
                        min="0.1"
                        placeholder="Podaj kwotę w złotówkach" />
                </label>
            </p>
            <label className="form__label form__label--changed" ><span className="form__label--text">Wybierz walutę:</span>
                <select className="form__label--select"
                    value={currency}
                    onChange={({ target }) => setCurrency(target.value)}>
                    {currencies.map(currency => (
                        <option
                         key={currency.short} 
                         value={currency.short}
                         >
                        {currency.name}
                        </option>
                    ))}
                </select>
                <p>
                    <button className="form__button">Wymień</button>
                </p>
                <p className="form__paragraph--information">Kursy pochodzą ze strony nbp.pl z Tabeli nr nr 064/A/NBP/2023 z dnia 2023-03-31</p>
                <Result
                    result={result}
                />
            </label>
        </form>
    )
}