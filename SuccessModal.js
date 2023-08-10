import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SuccessModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch Success  Modal
      </Button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton >
          <Modal.Title style={{color:'green'}}>File Mailed Successfully</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <div>Name : Bhani</div>
          <div>Email : Bhani@sc.com</div>
          <div>Trade Id: 15738</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  variant="success" class="btn btn-light" onClick={handleClose}>
            Review again
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SuccessModal;