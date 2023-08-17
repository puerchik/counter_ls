import React, { useState } from "react"
import { Button } from "./Button"
import { spawn } from "child_process"

type CounterPropsType = {
  counterValue: number
  increment: () => void
  reset: () => void
  disabledIncButton: boolean
  disabledResetButton: boolean
  disabledSetButton: boolean
  incorrectValue: boolean
}

export const Counter: React.FC<CounterPropsType> = (
  {
    counterValue,
    increment,
    reset,
    disabledIncButton,
    disabledResetButton,
    disabledSetButton,
    incorrectValue
  }
) => {

  const incrementHandler = () => {
    increment()
  }

  const resetHandler = () => {
    reset()
  }

  return (
    <div className="main-wrapper border">
      <div className="display-wrapper border wrapper aic jcc">
        {disabledSetButton && !incorrectValue
        ? <span className={`display-number${disabledIncButton ? " incFalse" : ""}`}>{counterValue}</span>
        : disabledSetButton && incorrectValue 
        ? <span className="set-value-text incorrect-value">Incorrect value!</span>
        :<span className="set-value-text">enter values and press 'set'</span>
      }        
      </div>
      <div className="button-bar border wrapper aic jsb">
        <Button disabled={disabledIncButton} name={"inc"} callback={incrementHandler} />
        <Button disabled={disabledResetButton} name={"reset"} callback={resetHandler} />
      </div>
    </div>
  ) 
}