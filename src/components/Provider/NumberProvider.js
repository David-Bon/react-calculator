import React, {useState} from 'react';

export const NumberContext = React.createContext();

const NumberProvider = (props) => {
    const [number, setNumber] = useState('');
    const [storedNumber, setStoredNumber] = useState('')
    const [functionType, setFunctionType] = useState('')
    const [memoryStore, setMemoryStore] = useState('0')
    const handleSetDisplayValue = (num) => {
        if (!number.includes('.') || num !== '.') {
            setNumber(`${(number + num).replace(/^0+/, '')}`);
        }
    };

    const handleClearValue = () => {
        if(number){
            setNumber('')
        }
else if (!number) {
            setStoredNumber('')
            setFunctionType('')
        }
    }

    const handleSetStoredValue = () => {
        setStoredNumber(number)
        setNumber('')
    }

    const handleToggleNegative = () => {
        if (number) {
            if (number > 0) {
                setNumber(`-${number}`);
            } else {
                const positiveNumber = number.slice(1);
                setNumber(positiveNumber);
            }
        } else if (storedNumber > 0) {
            setStoredNumber(`-${storedNumber}`);
        } else {
            const positiveNumber = storedNumber.slice(1);
            setStoredNumber(positiveNumber);
        }
    };

    const handleSetMemoryStore = (type) => {
        switch (type) {
            case "mc":
                setMemoryStore('0');
                break;
            case "mr":
                !memoryStore ? setMemoryStore('0') : setNumber(`${memoryStore}`);
                break;
            case "m+":

                setMemoryStore(
                    `${Math.round(`${(parseFloat(!number ? storedNumber : number) + parseFloat(memoryStore)) * 100}`) / 100}`
                )
                break;
            case "m-":
                setMemoryStore(
                    `${Math.round(`${(parseFloat(memoryStore) - parseFloat(number)) * 1000}`) / 1000}`
                )
                break;
            default:
                break;
        }
    }

    const handleSetPercent = () => {
        const parseNumber = parseFloat(number)
        const parseStoreNumber = parseFloat(storedNumber)
        const setPercentage = (value, setValue) => {
            if (value !== 0) {
                const result = value * (1 / 100)
                setValue(`${result}`)
            }
        }
        if (number > 0) {
            setPercentage(parseNumber, setNumber)
        } else if (storedNumber > 0) {
            setPercentage(parseStoreNumber, setStoredNumber)
        }
    }

    const handleSetCalcFunction = (type) => {
        if (number) {
            setFunctionType(type);
            handleSetStoredValue();
        }
        if (storedNumber) {
            setFunctionType(type);
        }
    }

    const doMath = () => {
        if (number && storedNumber) {
            switch (functionType) {
                case '+':
                    setStoredNumber(
                        `${Math.round(`${(parseFloat(storedNumber) + parseFloat(number)) * 100}`) / 100}`
                    );
                    break;
                case '-':
                    setStoredNumber(
                        `${Math.round(`${(parseFloat(storedNumber) - parseFloat(number)) * 1000}`) / 1000}`
                    );
                    break;
                case '/':
                    setStoredNumber(
                        `${Math.round(`${(parseFloat(storedNumber) / parseFloat(number)) * 1000}`) / 1000}`
                    );
                    break;
                case '*':
                    setStoredNumber(
                        `${Math.round(`${parseFloat(storedNumber) * parseFloat(number) * 1000}`) / 1000}`
                    );
                    break;
                default:
                    break;
            }
            setNumber('');
        }
    };


    const propertyArray = [
        {classNumber: "ac", color: "#D4D4D2", btnValue: "ac", handleAction: handleClearValue},
        {classNumber: "toggleNegative", color: "#D4D4D2", btnValue: "+/-", handleAction: handleToggleNegative},
        {classNumber: "percent", color: "#D4D4D2", btnValue: "%", handleAction: handleSetPercent},
        {classNumber: "split", color: "#FF9500", btnValue: "/", handleAction: handleSetCalcFunction},
        {classNumber: "mc", color: "#505050", btnValue: "mc", handleAction: handleSetMemoryStore},
        {classNumber: "mr", color: "#505050", btnValue: "mr", handleAction: handleSetMemoryStore},
        {classNumber: "mMinus", color: "#505050", btnValue: "m-", handleAction: handleSetMemoryStore},
        {classNumber: "mPlus", color: "#FF9500", btnValue: "m+", handleAction: handleSetMemoryStore},
        {classNumber: "seven", color: "#505050", btnValue: "7", handleAction: handleSetDisplayValue},
        {classNumber: "eight", color: "#505050", btnValue: "8", handleAction: handleSetDisplayValue},
        {classNumber: "nine", color: "#505050", btnValue: "9", handleAction: handleSetDisplayValue},
        {classNumber: "multiply", color: "#FF9500", btnValue: "*", handleAction: handleSetCalcFunction},
        {classNumber: "four", color: "#505050", btnValue: "4", handleAction: handleSetDisplayValue},
        {classNumber: "five", color: "#505050", btnValue: "5", handleAction: handleSetDisplayValue},
        {classNumber: "six", color: "#505050", btnValue: "6", handleAction: handleSetDisplayValue},
        {classNumber: "minus", color: "#FF9500", btnValue: "-", handleAction: handleSetCalcFunction},
        {classNumber: "one", color: "#505050", btnValue: "1", handleAction: handleSetDisplayValue},
        {classNumber: "two", color: "#505050", btnValue: "2", handleAction: handleSetDisplayValue},
        {classNumber: "three", color: "#505050", btnValue: "3", handleAction: handleSetDisplayValue},
        {classNumber: "plus", color: "#FF9500", btnValue: "+", handleAction: handleSetCalcFunction},
        {classNumber: "zero", color: "#505050", btnValue: "0", handleAction: handleSetDisplayValue},
        {classNumber: "dot", color: "#505050", btnValue: ".", handleAction: handleSetDisplayValue},
        {classNumber: "equal", color: "#FF9500", btnValue: "=", handleAction: doMath},
    ]

    return (
        <NumberContext.Provider
            value={{
                doMath,
                handleSetDisplayValue,
                handleSetCalcFunction,
                handleClearValue,
                handleSetPercent,
                handleToggleNegative,
                handleSetMemoryStore,
                propertyArray,
                number,
                memoryStore,
                functionType,
                storedNumber,
            }}>
            {props.children}
        </NumberContext.Provider>
    );
};
export default NumberProvider;