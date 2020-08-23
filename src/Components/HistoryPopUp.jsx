import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal"

function MyVerticallyCenteredModal(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {/* <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                </Modal.Title>
            </Modal.Header> */}
            <Modal.Body>

                {props.history.map(thisItem => {
                    return <p>{thisItem}</p>;
                })}
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Body>
        </Modal>
    );
}

function HistoryPopUp(props) {
    const [modalShow, setModalShow] = useState(false);
    function handleClick() {
        setModalShow(true);
    }

    return (
        <>
            <button
                type="button"
                className="btn btn-primary btn-sizing"
                onClick={handleClick}
            >
                MEM
          </button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                history={props.history}
            />
        </>
    );
}


export default HistoryPopUp;