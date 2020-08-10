import React from "react";
import "./style.css";

const Result = ({ result }) => (
    <p>
        {!!result && (
            <>
                <span className="form__result">
                    {result.sourceAmount.toFixed(2)} PLN =
                    <span className="form__result--value">
                        {(+result.targetAmount).toFixed(2)} {result.currency}
                    </span>
                </span>
            </>
        )}
    </p>
);

export default Result;