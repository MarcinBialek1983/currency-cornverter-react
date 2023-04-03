
import "./style.css"

export const FildsetCurrency = ({title}) => (
    <fieldset className="fildset">
        <legend className="fildset__legend">{title}</legend>
        <p className="fildset__paragraph">
            <label className="fildset__label">
                <img  width="40" height="35" src="https://i.postimg.cc/BZRTNctr/flagi-unii-europejskie.png" alt="Flaga Unii"/>
                    <span className="fildset__currency">Euro (EUR): <strong > 4.67</strong></span>
            </label>
            <label className="fildset__label"><img  width="40" height="35" src="https://i.postimg.cc/qR5RJL94/flaga-norwegii.jpg" alt="Flaga Norwegii"/>
            <span
                className="fildset__currency" >Korona norweska (NOK): <strong >0.41</strong> </span>
            </label>
        </p>
        <p className="fildset__paragraph">
            <label className="fildset__label"><img  width="40" height="35" src="https://i.postimg.cc/8PWhYJ6j/flaga-usa.jpg" alt="Flaga USA"/>
                <span className="fildset__currency">Dolar amerykański (USD): <strong > 4.30</strong></span>
            </label>
            <label className="fildset__label"><img  width="40" height="35" src="https://i.postimg.cc/T15Ppb6m/flaga-kanady.jpg" alt="Flaga Kanady" />
                <span className="fildset__currency">Dolar kanadyjski (CAD): <strong >3.16</strong> </span>
            </label>
        </p>
        <p className="fildset__paragraph">
            <label className="fildset__label"><img  width="40" height="35" src="https://i.postimg.cc/kM2NxhMN/flaga-brytyjska.jpg" alt="Flaga Wiwlkiej Brytanii" />
                <span className="fildset__currency">Funt brytyjski (GBR): <strong >5.31</strong> </span>
            </label>
            <label className="fildset__label"><img  width="40" height="35" src="https://i.postimg.cc/LXX5F7Qx/flaga-japonii.jpg" alt="Flaga Japonii"/>
                <span className="fildset__currency">Jen (JPY): <strong >0.03</strong> </span>
            </label>
        </p>
        <p className="fildset__paragraph">
            <label className="fildset__label"><img  width="40" height="35" src="https://i.postimg.cc/wjphYqXF/flaga-szwajcarii.jpg" alt="Flaga Szwajcarii" />
                <span className="fildset__currency">Frank szwajcarski (CHF): <strong >4.68</strong> </span>
            </label>
            <label className="fildset__label"><img  width="40" height="35" src="https://i.postimg.cc/JtwzJhrF/flaga-czech.jpg" alt="Flaga Czech"/>
                <span className="fildset__currency">Korona czeska (CZK): <strong >0.20</strong> </span>
            </label>
        </p>
    </fieldset>
)