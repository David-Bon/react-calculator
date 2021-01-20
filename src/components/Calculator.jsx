import React, {useContext} from "react";
import Display from "./Display";
import ButtonFill from "./ButtonFill";
import './styles.css'
import {NumberContext} from "./Provider/NumberProvider";

const Calculator = () => {
    const {propertyArray} = useContext(NumberContext)
    return (
        <div className="wrapper">
            <Display/>
            {propertyArray.map((prop) => {
                const {classNumber, color, btnValue, handleAction} = prop
                return <ButtonFill classNumber={`${classNumber}`} color={`${color}`} btnValue={`${btnValue}`}
                                   handleAction={() => handleAction(btnValue)}/>
            })}
        </div>
    )
}
export default Calculator