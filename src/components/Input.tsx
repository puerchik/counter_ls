import React, { ChangeEvent, useState } from "react";

type InputPropsType = {
    value: number
    callback: (e: number) => void
    incorrectValue: boolean
}

export const Input: React.FC<InputPropsType> = (
    {
        value,
        callback,
        incorrectValue
    }
) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callback(Number(e.currentTarget.value))
    }

    return (
        <>
            <input className={`input ${incorrectValue ? "incorect-value-input" : ""}`} value={value} onChange={onChangeHandler} type="number" />
        </>
    )
}