import { ReactNode, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

type ModalProps = {
   title: string,
   show: boolean
   handleClose: () => void,
   type: string,
};

export default function SignupModal({ title, show, handleClose = () => {}, type}:ModalProps ){

   return (
      <>
         <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                     <Form.Label>Email address</Form.Label>
                     <Form.Control type="email" placeholder="Enter email" />
                     <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                     </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button variant="primary" type="submit">Submit</Button>
               </Form>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="primary" onClick={handleClose}>
                  Save Changes
               </Button>
            </Modal.Footer>
         </Modal>
      </>
   );
}