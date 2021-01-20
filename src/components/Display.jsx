import React, {useContext} from 'react';
import {NumberContext} from "./Provider/NumberProvider";
import "./styles.css"

const Display = () => {
    const {number, storedNumber, memoryStore, functionType} = useContext(NumberContext)
    return (
        <div className="display" style={{gridArea: "display", textAlign: "center", color: "white"}}>
            <h2 style={{fontSize: "25px"}}>{!number.length && !storedNumber ? '0' : number || storedNumber || memoryStore}</h2>
            <p style={{fontSize: "10px"}}>{!storedNumber ? 'ENTER SOME NUMBERS' : `${storedNumber} ${functionType} ${number}`}</p>
        </div>
    );
};

export default Display;