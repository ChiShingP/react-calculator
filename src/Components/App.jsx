import React, { useState } from "react";
/*
1. Display a calculator
  - Show a display window
  - Show all buttons

2. Capture input from said calculator
2.a. Update the display from input
2.b. Process the input

*/

function App() {
  const [inputs, setInputs] = useState("");
  const [storedInput, setStoredInput] = useState("");
  const [storedOperator, setStoredOperator] = useState("");
  var calculatedValue = "";

  function updateInput(event) {
    const { value } = event.target;
    setInputs(inputs + value);
  }

  function clearInput(event) {
    setInputs("");
    setStoredInput("");
    setStoredOperator("");
  }

  function updateOperator(event) {
    const { value } = event.target;
    !(inputs === "") && setStoredInput(inputs); //Stores the first number if user had entered a number
    setStoredOperator(value);
    setInputs("");
  }

  function decimalCount() {
    if (!inputs.includes(".")) {
      setInputs(inputs + ".");
    }
  }

  //what if operation was pressed before?
  function clearEntry(event) {
    setInputs(inputs.substr(0, inputs.length - 1));
  }

  function updateCalculate() {
    switch (storedOperator) {
      case "/":
        calculatedValue = (
          parseFloat(storedInput, 10) / parseFloat(inputs, 10)
        ).toString();
        break;
      case "*":
        calculatedValue = (
          parseFloat(storedInput, 10) * parseFloat(inputs, 10)
        ).toString();
        break;
      case "-":
        calculatedValue = (
          parseFloat(storedInput, 10) - parseFloat(inputs, 10)
        ).toString();
        break;
      case "+":
        calculatedValue = (
          parseFloat(storedInput, 10) + parseFloat(inputs, 10)
        ).toString();
        break;
      default:
        calculatedValue = inputs;
    }

    setInputs(calculatedValue);
    setStoredInput(calculatedValue);
    setStoredOperator("");
  }

  return (
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm padding-0">
          <input
            class="input-calcdisplay form-control"
            type="text"
            // value={inputDisplay}
            value={inputs}
            disabled
          />
        </div>
      </div>
      <div class="row">
        <div class="col-xs-9 padding-0">
          <button
            type="button"
            class="btn btn-secondary btn-sizing"
            onClick={clearInput}
          >
            CLEAR
          </button>
        </div>
        <div class="col-xs-3 padding-0">
          <button
            type="button"
            class="btn btn-secondary btn-sizing"
            value="<="
            onClick={clearEntry}
          >
            <h1> CE </h1>
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-3 padding-0">
          <button
            type="button"
            class="btn btn-primary btn-sizing"
            value="7"
            onClick={updateInput}
          >
            7
          </button>
        </div>
        <div class="col-xs-3 padding-0">
          <button
            type="button"
            class="btn btn-primary btn-sizing"
            value="8"
            onClick={updateInput}
          >
            8
          </button>
        </div>
        <div class="col-xs-3 padding-0">
          <button
            type="button"
            class="btn btn-primary btn-sizing"
            value="9"
            onClick={updateInput}
          >
            9
          </button>
        </div>
        <div class="col-xs-3 padding-0">
          <button
            type="button"
            class="btn btn-success btn-sizing"
            value="/"
            onClick={updateOperator}
          >
            /
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-3 padding-0">
          <button
            type="button"
            class="btn btn-primary btn-sizing"
            value="4"
            onClick={updateInput}
          >
            4
          </button>
        </div>
        <div class="col-xs-3 padding-0">
          <button
            type="button"
            class="btn btn-primary btn-sizing"
            value="5"
            onClick={updateInput}
          >
            5
          </button>
        </div>
        <div class="col-xs-3 padding-0">
          <button
            type="button"
            class="btn btn-primary btn-sizing"
            value="6"
            onClick={updateInput}
          >
            6
          </button>
        </div>
        <div class="col-xs-3 padding-0">
          <button
            type="button"
            class="btn btn-success btn-sizing"
            value="*"
            onClick={updateOperator}
          >
            *
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-3 padding-0">
          <button
            type="button"
            class="btn btn-primary btn-sizing"
            value="1"
            onClick={updateInput}
          >
            1
          </button>
        </div>
        <div class="col-xs-3 padding-0">
          <button
            type="button"
            class="btn btn-primary btn-sizing"
            value="2"
            onClick={updateInput}
          >
            2
          </button>
        </div>
        <div class="col-xs-3 padding-0">
          <button
            type="button"
            class="btn btn-primary btn-sizing"
            value="3"
            onClick={updateInput}
          >
            3
          </button>
        </div>
        <div class="col-xs-3 padding-0">
          <button
            type="button"
            class="btn btn-success btn-sizing"
            value="-"
            onClick={updateOperator}
          >
            -
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-3 padding-0">
          <button
            type="button"
            class="btn btn-primary btn-sizing"
            value="0"
            onClick={updateInput}
          >
            0
          </button>
        </div>
        <div class="col-xs-3 padding-0">
          <button
            type="button"
            class="btn btn-primary btn-sizing"
            value="."
            onClick={decimalCount}
          >
            .
          </button>
        </div>
        <div class="col-xs-3 padding-0"></div>
        <div class="col-xs-3 padding-0">
          <button
            type="button"
            class="btn btn-success btn-sizing "
            value="+"
            onClick={updateOperator}
          >
            +
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-3 padding-0"></div>
        <div class="col-xs-3 padding-0"></div>
        <div class="col-xs-3 padding-0"></div>
        <div class="col-xs-3 padding-0">
          <button
            type="button"
            class="btn btn-success btn-sizing"
            value="="
            onClick={updateCalculate}
          >
            =
          </button>
        </div>
      </div>
      <div class="row"></div>
    </div>
  );
}

export default App;
