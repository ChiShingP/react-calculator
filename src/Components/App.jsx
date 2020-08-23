import React, { useState } from "react";
import HistoryPopUp from "./HistoryPopUp";
import Container from "react-bootstrap/container"
import Col from 'react-bootstrap/Col'
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"


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
  const [history, setHisotry] = useState([]);
  var calculatedValue = "";
  // const songURL = "./assets/SD.mp3";
  function updateInput(event) {
    const { value } = event.currentTarget; //event.currenTarget for Material UI buttons
    setInputs(inputs + value);
  }

  function clearInput() {
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
    (!inputs.includes(".")) && (setInputs(inputs + "."));

  }

  //what if operation was pressed before?
  function clearEntry() {
    setInputs(inputs.substr(0, inputs.length - 1));
  }

  function updateCalculate() {
    switch (storedOperator) {
      case "/":
        calculatedValue = (
          parseFloat(storedInput, 10) / parseFloat(inputs, 10)
        )
        break;
      case "*":
        calculatedValue = (
          parseFloat(storedInput, 10) * parseFloat(inputs, 10)
        )
        break;
      case "-":
        calculatedValue = (
          parseFloat(storedInput, 10) - parseFloat(inputs, 10)
        )
        break;
      case "+":
        calculatedValue = (
          parseFloat(storedInput, 10) + parseFloat(inputs, 10)
        )
        break;
      default:
        calculatedValue = inputs;
    }

    (storedOperator !== "") && (calculatedValue = calculatedValue.toExponential(8));
    setHisotry((prevValue) => [...prevValue, calculatedValue]);
    console.log("History Stored: " + history);
    setInputs(calculatedValue);
    setStoredInput(calculatedValue);
    setStoredOperator("");
  }

  return (
    // <div className="container-fluid container"> </div>
    <Container fluid>
      <Row>
        <Col className="padding-0">
          <input
            className="input-calcdisplay form-control"
            type="text"
            value={inputs}
            disabled
          />
        </Col>
      </Row>
      <Row>
        <Col xs={3} className="padding-0" >
          <HistoryPopUp
            history={history}
          />
        </Col>
        <Col xs={6} className="padding-0" >
          <Button
            type="button"
            className=" btn-sizing"
            onClick={clearInput}
          >
            Clear
          </Button>
        </Col>
        <Col xs={3} className="padding-0">
          <button
            type="button"
            className="btn btn-primary btn-sizing"
            onClick={clearEntry}
          >
            CE
          </button>
        </Col>
      </Row>
      <Row>
        <Col xs={3} className=" padding-0">
          <button
            type="button"
            className="btn btn-danger btn-sizing"
            value="7"

            onClick={updateInput}
          >
            7
          </button>
        </Col>
        <Col xs={3} className=" padding-0">
          <button
            type="button"
            className="  btn btn-danger  btn-sizing"
            value="8"

            onClick={updateInput}
          >
            8
          </button>
        </Col>
        <Col xs={3} className=" padding-0">
          <button
            type="button"
            className="  btn btn-danger btn-sizing"
            value="9"

            onClick={updateInput}
          >
            9
          </button>
        </Col>
        <Col xs={3} className=" padding-0">
          <button
            type="button"
            className="btn btn-success btn-sizing"
            value="/"

            onClick={updateOperator}
          >
            /
          </button>
        </Col>
      </Row>
      <Row>
        <Col xs={3} className=" padding-0">
          <button
            type="button"
            className="  btn btn-danger btn-sizing"
            value="4"

            onClick={updateInput}
          >
            4
          </button>
        </Col>
        <Col xs={3} className=" padding-0">
          <button
            type="button"
            className="  btn btn-danger btn-sizing"
            value="5"

            onClick={updateInput}
          >
            5
          </button>
        </Col>
        <Col xs={3} className="padding-0">
          <button
            type="button"
            className="  btn btn-danger btn-sizing"
            value="6"

            onClick={updateInput}
          >
            6
          </button>
        </Col>
        <Col xs={3} className=" padding-0">
          <button
            type="button"
            className="btn btn-success btn-sizing"
            value="*"

            onClick={updateOperator}
          >
            *
          </button>
        </Col>
      </Row>
      <Row>
        <Col xs={3} className=" padding-0">
          <button
            type="button"
            className="  btn btn-danger btn-sizing"
            value="1"

            onClick={updateInput}
          >
            1
          </button>
        </Col>
        <Col xs={3} className=" padding-0">
          <button
            type="button"
            className="  btn btn-danger btn-sizing"
            value="2"

            onClick={updateInput}
          >
            2
          </button>
        </Col>
        <Col xs={3} className=" padding-0">
          <button
            type="button"
            className="  btn btn-danger btn-sizing"
            value="3"

            onClick={updateInput}
          >
            3
          </button>
        </Col>
        <Col xs={3} className=" padding-0">
          <button
            type="button"
            className="btn btn-success btn-sizing"
            value="-"

            onClick={updateOperator}
          >
            -
          </button>
        </Col>
      </Row>
      <Row>
        <Col xs={3} className=" padding-0">
          <button
            type="button"
            className="  btn btn-danger btn-sizing"
            value="0"

            onClick={updateInput}
          >
            0
          </button>
        </Col>
        <Col xs={3} className=" padding-0">
          <button
            type="button"
            className="  btn btn-danger btn-sizing"
            value="."

            onClick={decimalCount}
          >
            .
          </button>
        </Col>
        <Col xs={3} className=" padding-0"></Col>
        <Col xs={3} className=" padding-0">
          <button
            type="button"
            className="btn btn-success btn-sizing "
            value="+"

            onClick={updateOperator}
          >
            +
          </button>
        </Col>
      </Row>
      <Row>
        <Col xs={3} className=" padding-0">
        </Col>
        <Col xs={3} className=" padding-0"></Col>
        <Col xs={3} className=" padding-0"></Col>
        <Col xs={3} className=" padding-0">
          <button
            type="button"
            className="btn btn-success btn-sizing"
            value="="
            onClick={updateCalculate}
          >
            =
          </button>
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
}

export default App;
