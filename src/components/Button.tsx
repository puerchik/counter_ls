import React from "react";

type ButtonPropsType = {
    name: string
    callback: () => void
    disabled: boolean
}

export const Button: React.FC<ButtonPropsType> = (
    {
        name,
        callback,
        disabled
    }
) => {

    const onClickHandler = () => {
        callback()
    }

    return (        
            <button disabled={disabled} className="button" onClick={onClickHandler}>{name}</button>    
    )
}