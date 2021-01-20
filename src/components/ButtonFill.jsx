import React from "react";
import Button from '@material-ui/core/Button';

const ButtonFill = ({btnValue, classNumber, color, handleAction}) => {
    return (
        <Button className={classNumber} variant="contained"
                style={{background: `${color}`, fontSize: "24px", gridArea: `${classNumber}`,}}
                color={`${color === "#D4D4D2" ? "default" : "primary"}`}
                onClick={() => handleAction(btnValue)}>{btnValue}</Button>
    )
}


export default ButtonFill