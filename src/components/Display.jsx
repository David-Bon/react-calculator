import React, {useContext} from 'react';
import {NumberContext} from "./Provider/NumberProvider";
import "./styles.css"
const Display = () => {
    const { number, storedNumber, memoryStore, functionType } = useContext(NumberContext)
    return (
        <div className="display">
            <h2>{!number.length && !storedNumber ? '0' : number || storedNumber || memoryStore}</h2>
            <p>{!storedNumber ? 'ENTER SOME NUMBERS' : `${storedNumber} ${functionType} ${number}`}</p>
        </div>
    );
};

export default Display;