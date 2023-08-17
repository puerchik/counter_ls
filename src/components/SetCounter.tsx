import React from "react"
import { Input } from "./Input"
import { Button } from "./Button"

type SetCounterPropsType = {
  setMaxValue: (value: number) => void
  setStartValue: (value: number) => void
  maxValue: number
  startValue: number
  setCounterValue: () => void
  disabledSetButton: boolean
  incorrectValue: boolean
}

export const SetCounter: React.FC<SetCounterPropsType> = (
  {
    setMaxValue,
    setStartValue,
    maxValue,
    startValue,
    setCounterValue,
    disabledSetButton,
    incorrectValue
  }
) => {

  const setValueHandler = () => {
    setCounterValue()
  }

  return (
    <div className="main-wrapper border">
      <div className="display-wrapper border">
        <div className="wrapper">
          <span className="set-value-text">max value:</span>
          <Input incorrectValue={incorrectValue} value={maxValue} callback={setMaxValue} />
        </div>
        <div className="wrapper">
          <span className="set-value-text">start value:</span>
          <Input incorrectValue={incorrectValue} value={startValue} callback={setStartValue} />
        </div>
      </div>
      <div className="button-bar border wrapper aic jcc">
        <Button disabled={disabledSetButton} name="set" callback={setValueHandler} />
      </div>
    </div>
  )
}