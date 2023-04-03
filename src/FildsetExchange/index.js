import { Form } from "./Form"
import "./style.css"



export const FildsetExchange = ({ title, result, calculateResult }) => (
    <fieldset className="form__fildset--changed">
        <legend className="fildset__legend">{title}</legend>
        <Form result={result} calculateResult={calculateResult} />
    </fieldset>
)