import React, {useState} from "react";

const Button = ()=>{
    const [currentValue, setCurrentValue] = useState(0);
    const handleClick = ()=> {
        setCurrentValue(currentValue + 1)

    }
    return(
        <div>
            <button type="button" className="btn btn-primary" onClick="handleClick">Submit</button>
            <div>{setCurrentValue}</div>
        </div>
    )
}

export default Button