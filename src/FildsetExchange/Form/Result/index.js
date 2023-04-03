import "./style.css"

export const Result = ({ result }) => (
    <p className="resultParagrapf">Wymieniłeś:&nbsp;
        {result !== undefined && (
            <>
                {result.sourceAmount.toFixed(2)}&nbsp;PLN na&nbsp;
                <span>
                    {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </span>
            </>
        )}
    </p>
)