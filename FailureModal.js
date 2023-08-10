import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function FailureModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch Failure modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "red" }}>
            Error! File Sending Failed{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>Kindly Compare the below details again and try to resend</div>
          <div>
            <ul>
              <li>Name</li>
              <li>Trade Id</li>
              <li>Amount</li>
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer>
         
          <Button variant="danger" onClick={handleClose}>
            Try again
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default FailureModal;
