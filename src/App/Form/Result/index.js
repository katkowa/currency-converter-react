import React from "react";
import { Wrapper, Value } from "./styled";

const Result = ({ result }) => (
    <p>
        {!!result && (
            <>
                <Wrapper>
                    {result.sourceAmount.toFixed(2)} PLN = {" "}
                    <Value>
                        {(+result.targetAmount).toFixed(2)} {result.currency}
                    </Value>
                </Wrapper>
            </>
        )}
    </p>
);

export default Result;