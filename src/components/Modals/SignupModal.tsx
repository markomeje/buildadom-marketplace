import { ReactNode, useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';

type ModalProps = {
   title: string,
   show: boolean
   handleClose: () => void,
   type: string,
};

export default function SignupModal({ title, show, handleClose = () => {}, type}:ModalProps ){
   const isType = type === 'business' ? 'Business' : '';
   return (
      <Modal show={show} onHide={handleClose} size="lg">
         <Modal.Body className='px-5 pb-5 position-relative'>
            <div className='text-center'>
               <div className='btn-close position-absolute cursor-pointer' style={{ top: '20px', right: '20px', zIndex: '3' }}></div>
               <h4 className='mb-4' style={{ fontWeight: '600' }}>{title}</h4>
               <div className='position-relative justify-content-center align-items-center g-0 d-flex mb-4'>
                  <div className='bg-main' style={{ width: '194px', height: '2.5px' }}></div>
                  <div className='rounded-pill bg-main' style={{ width: '40px', height: '40px' }}></div>
               </div>
               <div className='m-auto mb-5' style={{ maxWidth: '380px' }}>
                  <p className='text-dark'>Kindly provide all the following details to help us set up your store.</p>
               </div>
            </div>
            <Form action="" method='post'>
               <Row>
                  <Col md='6'>
                     <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name="firstname" placeholder="Enter your name" />
                     </Form.Group>
                  </Col>
                  <Col md='6'>
                     <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name="lastname" placeholder="Enter your name" />
                     </Form.Group>
                  </Col>
                  {type === 'business' && (<Col md='12'>
                     <Form.Group className="mb-3">
                        <Form.Label>Business Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter your business name" />
                     </Form.Group>
                  </Col>)}
                  
                  <Col md='12'>
                     <Form.Group className="mb-3">
                        <Form.Label>{isType} Phone</Form.Label>
                        <Form.Control type="text" name="phone" placeholder="Enter phone" />
                     </Form.Group>
                  </Col>
                  <Col md='12'>
                     <Form.Group className="mb-3">
                        <Form.Label>{isType} Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" />
                     </Form.Group>
                  </Col>
               </Row>
               <Form.Group className="mb-3">
                  <Form.Label>Location</Form.Label>
                  <Form.Control type="text" placeholder="Enter location" />
               </Form.Group>
               <Form.Group className="mb-4">
                  <Form.Label>What kind of building material do you sell?</Form.Label>
                  <Form.Control type="text" placeholder="Material type" />
               </Form.Group>
               <Button className='bg-main px-4 py-2 btn-lg rounded-pill' type="submit">Submit</Button>
            </Form>
         </Modal.Body>
      </Modal>
   );
}