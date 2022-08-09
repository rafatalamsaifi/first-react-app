import React, {useState} from "react";

const Button = (props)=>{
    const [currentValue, setCurrentValue] = useState(0);
    const handleClick = ()=> {
        setCurrentValue(currentValue + props.incrementBy)

    }
    return(
        <div>
            <div>{currentValue}</div>
            <button type="button" className="btn btn-primary" onClick={handleClick}>Button</button>
        </div>
    )
}

export default Button