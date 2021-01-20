import React from "react";
import Calculator from "./components/Calculator";
import NumberProvider from "./components/Provider/NumberProvider";

const App = () => {
    return (
        <NumberProvider>
            <Calculator/>
        </NumberProvider>
    );
}

export default App;
