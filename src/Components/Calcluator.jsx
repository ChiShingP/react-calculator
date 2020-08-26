import React, { useState } from "react";

import HistoryPopUp from "./HistoryPopUp";
import Container from "react-bootstrap/container"
import Col from 'react-bootstrap/Col'
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"


function Calculator(props) {
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
    function decideCalculate() {
        let r = Math.floor(Math.random() * 10);
        if (r < 3) {
            props.setHeaderTitle("But I dont feel like it right now.");
        } else {
            updateCalculate();
            props.setHeaderTitle("Here you go.");

            setTimeout(() => {
                props.setHeaderTitle("Hi again, how may I help you!")
            }, 3000);
            // } else {
            //     setTimeout(() => {
            //         props.setHeaderTitle("Really? You can't do these simple math in your head?")
            //     }, 3000);


        }
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
        // if (String(calculatedValue).length > 10) {
        //   (storedOperator !== "") && (calculatedValue = calculatedValue.toExponential(8));
        // }
        setHisotry((prevValue) => [...prevValue, calculatedValue]);
        console.log("History Stored: " + history);
        setInputs(calculatedValue);
        console.log(typeof (inputs) + "Value: " + inputs)
        setStoredInput(calculatedValue);
        setStoredOperator("");
    }

    return (
        <Container fluid className="container">
            <Row className="displayShadow">
                <Col className="padding-0 displayBlur">
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
                        className="btn-sizing" onClick={clearInput}
                        variant="outline-light"
                    >
                        CLEAR
            </Button>
                </Col>
                <Col xs={3} className="padding-0">
                    <Button
                        type="Button"
                        variant="outline-light"

                        className="btn btn-primary btn-sizing"
                        onClick={clearEntry}
                    >
                        CE
            </Button>
                </Col>
            </Row>
            <Row>
                <Col xs={3} className=" padding-0">
                    <Button
                        variant="outline-light"

                        type="Button"
                        className="btn btn-sizing"



                        value="7"

                        onClick={updateInput}
                    >
                        7
            </Button>
                </Col>
                <Col xs={3} className=" padding-0">
                    <Button
                        type="Button"
                        className="btn-sizing"
                        value="8"
                        variant="outline-light"
                        onClick={updateInput}
                    >
                        8
            </Button>
                </Col>
                <Col xs={3} className=" padding-0">
                    <Button
                        type="Button"
                        className=" btn-sizing"
                        variant="outline-light"
                        value="9"

                        onClick={updateInput}
                    >
                        9
            </Button>
                </Col>
                <Col xs={3} className=" padding-0">
                    <Button
                        type="Button"
                        className="btn btn-sizing"

                        variant="outline-light"
                        value="/"

                        onClick={updateOperator}
                    >
                        /
            </Button>
                </Col>
            </Row>
            <Row>
                <Col xs={3} className=" padding-0">
                    <Button
                        type="Button"
                        className="  btn-sizing"
                        variant="outline-light"


                        value="4"

                        onClick={updateInput}
                    >
                        4
            </Button>
                </Col>
                <Col xs={3} className=" padding-0">
                    <Button
                        type="Button"
                        className=" btn-sizing"

                        variant="outline-light"

                        value="5"

                        onClick={updateInput}
                    >
                        5
            </Button>
                </Col>
                <Col xs={3} className="padding-0">
                    <Button
                        type="Button"
                        className=" btn-sizing"


                        variant="outline-light"
                        value="6"

                        onClick={updateInput}
                    >
                        6
            </Button>
                </Col>
                <Col xs={3} className=" padding-0">
                    <Button
                        type="Button"
                        className=" btn-sizing"
                        variant="outline-light"

                        value="*"

                        onClick={updateOperator}
                    >
                        *
            </Button>
                </Col>
            </Row>
            <Row>
                <Col xs={3} className=" padding-0">
                    <Button
                        type="Button"
                        className=" btn-sizing"

                        variant="outline-light"

                        value="1"

                        onClick={updateInput}
                    >
                        1
            </Button>
                </Col>
                <Col xs={3} className=" padding-0">
                    <Button
                        type="Button"
                        className="btn-sizing"

                        variant="outline-light"

                        value="2"

                        onClick={updateInput}
                    >
                        2
            </Button>
                </Col>
                <Col xs={3} className=" padding-0">
                    <Button
                        type="Button"
                        className="btn-sizing"

                        variant="outline-light"

                        value="3"

                        onClick={updateInput}
                    >
                        3
            </Button>
                </Col>
                <Col xs={3} className=" padding-0">
                    <Button
                        type="Button"
                        className="btn-sizing"

                        variant="outline-light"
                        value="-"

                        onClick={updateOperator}
                    >
                        -
            </Button>
                </Col>
            </Row>
            <Row>
                <Col xs={3} className=" padding-0">
                    <Button
                        type="Button"
                        className="btn-sizing"


                        variant="outline-light"
                        value="0"

                        onClick={updateInput}
                    >
                        0
            </Button>
                </Col>
                <Col xs={3} className=" padding-0">
                    <Button
                        type="Button"
                        className="btn-sizing"

                        variant="outline-light"

                        value="."

                        onClick={decimalCount}
                    >
                        .
            </Button>
                </Col>
                <Col xs={3} className=" padding-0"></Col>
                <Col xs={3} className=" padding-0">
                    <Button
                        type="Button"
                        className="btn-sizing "
                        value="+"
                        variant="outline-light"
                        onClick={updateOperator}
                    >
                        +
            </Button>
                </Col>
            </Row>
            <Row>
                <Col xs={3} className=" padding-0">
                </Col>
                <Col xs={3} className=" padding-0"></Col>
                <Col xs={3} className=" padding-0"></Col>
                <Col xs={3} className=" padding-0">
                    <Button
                        type="Button"
                        className="btn-sizing"

                        variant="outline-light"
                        value="="
                        onClick={decideCalculate}
                    >
                        =
            </Button>
                </Col>
            </Row>
            <Row></Row>
        </Container>
    );
}

export default Calculator;