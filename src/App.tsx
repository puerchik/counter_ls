import React, { useEffect, useState } from 'react';
import './App.css';
import { Counter } from './components/Counter';
import { SetCounter } from './components/SetCounter';

function App() {

  const [maxValue, setMaxValue] = useState(5)
  const [startValue, setStartValue] = useState(1)
  const [maxCounterValue, setMaxCounterValue] = useState(maxValue)
  const [startCounterValue, setStartCounterValue] = useState(startValue)
  const [counterValue, setCounterValue] = useState(startCounterValue)
  let disabledSetButton = true
  let disabledIncButton = false
  let disabledResetButton = true
  let incorrectValue = false

  useEffect(() => {
    let counterValueAsString = localStorage.getItem('counterValue')
    if (counterValueAsString) {
      let newCounterValueAsString = JSON.parse(counterValueAsString)
      setCounterValue(newCounterValueAsString)
    }
  }, [])

  useEffect(() => {
    let startCounterValueAsString = localStorage.getItem('startCounterValue')
    if (startCounterValueAsString) {
      let newStartCounterValueAsString = JSON.parse(startCounterValueAsString)
      setStartValue(newStartCounterValueAsString)
      setStartCounterValue(newStartCounterValueAsString)
    }
  }, [])

  useEffect(() => {
    let maxCounterValueAsString = localStorage.getItem('maxCounterValue')
    if (maxCounterValueAsString) {
      let newMaxCounterValueAsString = JSON.parse(maxCounterValueAsString)
      setMaxValue(newMaxCounterValueAsString)
      setMaxCounterValue(newMaxCounterValueAsString)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('counterValue', JSON.stringify(counterValue))
  }, [counterValue])

  useEffect(() => {
    localStorage.setItem('startCounterValue', JSON.stringify(startCounterValue))
  }, [startCounterValue])

  useEffect(() => {
    localStorage.setItem('maxCounterValue', JSON.stringify(maxCounterValue))
  }, [maxCounterValue])


  const setCounterValueHandler = () => {
    setMaxCounterValue(maxValue)
    setStartCounterValue(startValue)
    setCounterValue(startValue)
  }

  const increment = () => {
    if (counterValue !== maxCounterValue) {
      setCounterValue(counterValue + 1)
    }
  }

  const reset = () => {
    setCounterValue(startValue)
  }

  console.log(counterValue);

  if (startValue !== startCounterValue || maxValue !== maxCounterValue) {
    disabledSetButton = false
    disabledIncButton = true
  }

  if (startValue >= maxValue || startValue < 0 || maxValue <= 0 || startValue === maxValue) {
    disabledSetButton = true
    incorrectValue = true
    disabledIncButton = true
  }

  if (startCounterValue !== counterValue) {
    disabledResetButton = false
  }

  if (counterValue === maxCounterValue) {
    disabledIncButton = true
  }

  return (
    <div className="app wrapper">
      <SetCounter
        setMaxValue={setMaxValue}
        setStartValue={setStartValue}
        maxValue={maxValue}
        startValue={startValue}
        setCounterValue={setCounterValueHandler}
        disabledSetButton={disabledSetButton}
        incorrectValue={incorrectValue} />
      <Counter
        counterValue={counterValue}
        increment={increment}
        reset={reset}
        disabledIncButton={disabledIncButton}
        disabledResetButton={disabledResetButton}
        disabledSetButton={disabledSetButton}
        incorrectValue={incorrectValue} />
    </div>
  );
}

export default App;
