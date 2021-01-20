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
        setNumber('')
        setStoredNumber('')
        setFunctionType('')
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
                setMemoryStore('');
                break;
            case "mr":
               setNumber(`${memoryStore}`);
                break;
            case "m+":
                setMemoryStore(
                    `${Math.round(`${(parseFloat(number) + parseFloat(memoryStore)) * 100}`) / 100}`
                )
                console.log(memoryStore)
                break;
            case "m-":
                setMemoryStore(
                    `${Math.round(`${(parseFloat(memoryStore) - parseFloat(number)) * 1000}`) / 1000}`
                )
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