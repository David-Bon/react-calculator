import React, {useContext} from "react";
import Display from "./Display";
import './styles.css'
import ButtonFill from "./Button sample/ButtonFill";
import {NumberContext} from "./Provider/NumberProvider";

const Calculator = () => {
    const {
        doMath,
        handleSetDisplayValue,
        handleSetCalcFunction,
        handleClearValue,
        handleSetPercent,
        handleToggleNegative,
        handleSetMemoryStore,
    } = useContext(NumberContext)
    return (
        <div className="wrapper">
            <Display/>
            <ButtonFill classNumber="ac" color="#D4D4D2" btnValue="ac" handleAction={handleClearValue}/>
            <ButtonFill classNumber="toggleNegative" color="#D4D4D2" btnValue="+/-" handleAction={handleToggleNegative}/>
            <ButtonFill classNumber="percent" color="#D4D4D2" btnValue="%" handleAction={handleSetPercent}/>
            <ButtonFill classNumber="split" color="#FF9500" btnValue="/" handleAction={handleSetCalcFunction}/>
            <ButtonFill classNumber="mc" color="#505050" btnValue="mc" handleAction={handleSetMemoryStore}/>
            <ButtonFill classNumber="mr" color="#505050" btnValue="mr" handleAction={handleSetMemoryStore}/>
            <ButtonFill classNumber="mMinus" color="#505050" btnValue="m-" handleAction={handleSetMemoryStore}/>
            <ButtonFill classNumber="mPlus" color="#FF9500" btnValue="m+" handleAction={handleSetMemoryStore}/>
            <ButtonFill classNumber="seven" color="#505050" btnValue="7" handleAction={handleSetDisplayValue}/>
            <ButtonFill classNumber="eight" color="#505050" btnValue="8" handleAction={handleSetDisplayValue}/>
            <ButtonFill classNumber="nine" color="#505050" btnValue="9" handleAction={handleSetDisplayValue}/>
            <ButtonFill classNumber="multiply" color="#FF9500" btnValue="*" handleAction={handleSetCalcFunction}/>
            <ButtonFill classNumber="four" color="#505050" btnValue="4" handleAction={handleSetDisplayValue}/>
            <ButtonFill classNumber="five" color="#505050" btnValue="5" handleAction={handleSetDisplayValue}/>
            <ButtonFill classNumber="six" color="#505050" btnValue="6" handleAction={handleSetDisplayValue}/>
            <ButtonFill classNumber="minus" color="#FF9500" btnValue="-" handleAction={handleSetCalcFunction}/>
            <ButtonFill classNumber="one" color="#505050" btnValue="1" handleAction={handleSetDisplayValue}/>
            <ButtonFill classNumber="two" color="#505050" btnValue="2" handleAction={handleSetDisplayValue}/>
            <ButtonFill classNumber="three" color="#505050" btnValue="3" handleAction={handleSetDisplayValue}/>
            <ButtonFill classNumber="plus" color="#FF9500" btnValue="+" handleAction={handleSetCalcFunction}/>
            <ButtonFill classNumber="zero" color="#505050" btnValue="0" handleAction={handleSetDisplayValue}/>
            <ButtonFill classNumber="dot" color="#505050" btnValue="." handleAction={handleSetDisplayValue}/>
            <ButtonFill classNumber="equal" color="#FF9500" btnValue="=" handleAction={doMath}/>
        </div>
    )
}
export default Calculator