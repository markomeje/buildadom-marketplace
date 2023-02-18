import { useReducer, useState } from 'react';
import { Alert, Button, Col, Form, Modal, Row, Image } from 'react-bootstrap';
import axios from 'axios';
import Circular from '../../assets/circular.png';

type ModalProps = {
   title: string,
   show: boolean
   handleClose: () => void,
   type: string,
};

const formReducer = (state: object, event: any) => {
   return {
      ...state,
      [event.name]: event.value
   }
}

export default function SignupModal({ title, show, handleClose = () => {}, type}:ModalProps ){
   const [submitting, setSubmitting] = useState(false);
   const [form, setForm] = useReducer(formReducer, {});
   const [errors, setErrors] = useState<any>({});
   const [successful, setSuccessful] = useState(false);
   const [message, setMessage] = useState('');

   const isType = type === 'business' ? 'Business' : '';
   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setErrors({});
      setMessage('');

      setSubmitting(true);
      Object.assign(form, {type: type});
      const url = import.meta.env.VITE_API_URL;

      const config = {
         headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            'Content-Type': 'application/json'
         }
      };

      axios.post('https://store.buildadom.net/api/onboarding', form, config).then((response) => {
         console.log(response.data.errors);
         const data = response?.data;
         if (data['errors']) {
            setErrors(data['errors']);
            console.log(errors);
         }else {
            setSuccessful(true);
            console.log(data);
         }

         setSubmitting(false);
      }).catch(function (error) {
         setSubmitting(false);
         setMessage('An error occurred. Try again later');
      });
   };

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setForm({
         name: name,
         value: value,
      });

      errors[name] = '';
      setErrors({...errors});
   };
   
   return (
      <Modal show={show} onHide={handleClose} size="lg">
         <Modal.Body className='px-4 py-5 position-relative'>
            {successful ? (<div className='text-center m-auto' style={{ maxWidth: '570px' }}>
               <div className='mb-4'>
                  <Image src={Circular} className='' />
               </div>
               <h2 className='text-main mb-3'>Sign up Completed</h2>
               <div className='text-dark'>Thank you for signing up to be one of the early users of Buildadom. Our engineers are currently working to deliver our full stack of features to you. In the mean time, a customer support representative will contact you to let you know of next steps. We can't wait to start doing business with you.</div>
               </div>) : (<>
               <div className='text-center'>
                  <div className='btn-close position-absolute cursor-pointer' style={{ top: '15px', right: '20px', zIndex: '3' }} onClick={handleClose}></div>
                  <h4 className='mb-3'>{title}</h4>
                  <div className='position-relative justify-content-center align-items-center g-0 d-flex mb-3'>
                     <div className='bg-main' style={{ width: '194px', height: '2.5px' }}></div>
                     <div className='rounded-pill bg-main' style={{ width: '40px', height: '40px' }}></div>
                  </div>
                  <div className='m-auto mb-4' style={{ maxWidth: '380px' }}>
                     <p className='text-dark'>Kindly provide all the following details to help us set up your store.</p>
                  </div>
               </div>
               <Form onSubmit={handleSubmit} method='post'>
                  <Row>
                     <Col md='6'>
                        <Form.Group className="mb-3">
                           <Form.Label>First Name</Form.Label>
                           <Form.Control type="text" className={errors && errors?.firstname ? 'is-invalid' : ''} name="firstname" placeholder="Enter your name" onChange={handleChange} />
                           {errors && errors?.firstname ? (<small className='text-danger'>{errors.firstname}</small>) : ''}
                        </Form.Group>
                     </Col>
                     <Col md='6'>
                        <Form.Group className="mb-3">
                           <Form.Label>Last Name</Form.Label>
                           <Form.Control type="text" className={errors?.lastname && 'is-invalid'} name="lastname" placeholder="Enter your name" onChange={handleChange} />
                           {errors && errors?.lastname ? (<small className='text-danger'>{errors.lastname}</small>) : ''}
                        </Form.Group>
                     </Col>
                     {type === 'business' && (<Col md='12'>
                        <Form.Group className="mb-3">
                           <Form.Label>Business Name</Form.Label>
                           <Form.Control type="text" className={errors?.business_name && 'is-invalid'} name="business_name" placeholder="Enter your business name" onChange={handleChange} />
                           {errors && errors?.business_name ? (<small className='text-danger'>{errors.business_name}</small>) : ''}
                        </Form.Group>
                     </Col>)}
                     <Col md='12'>
                        <Form.Group className="mb-3">
                           <Form.Label>{isType} Phone</Form.Label>
                           <Form.Control type="text" className={errors?.phone && 'is-invalid'} name="phone" placeholder="Enter phone" onChange={handleChange} />
                           {errors && errors?.phone ? (<small className='text-danger'>{errors.phone}</small>) : ''}
                        </Form.Group>
                     </Col>
                     <Col md='12'>
                        <Form.Group className="mb-3">
                           <Form.Label>{isType} Email</Form.Label>
                           <Form.Control type="email" className={errors?.email && 'is-invalid'} name="email" placeholder="Enter email" onChange={handleChange} />
                           {errors && errors?.email ? (<small className='text-danger'>{errors.email}</small>) : ''}
                        </Form.Group>
                     </Col>
                  </Row>
                  <Form.Group className="mb-3">
                     <Form.Label>Location</Form.Label>
                     <Form.Control type="text" className={errors?.location && 'is-invalid'} placeholder="Enter location" name="location" onChange={handleChange} />
                     {errors && errors?.location ? (<small className='text-danger'>{errors.location}</small>) : ''}
                  </Form.Group>
                  <Form.Group className="mb-4">
                     <Form.Label>What kind of building material do you sell?</Form.Label>
                     <Form.Control type="text" className={errors?.materials && 'is-invalid'} placeholder="Material type" name="materials" onChange={handleChange} />
                     {errors && errors?.materials ? (<small className='text-danger'>{errors.materials}</small>) : ''}
                  </Form.Group>
                  {message && <Alert className='mb-4' variant='danger'>{message}</Alert>}
                  <Button className='bg-main px-4 text-center py-2 btn-lg rounded-pill' disabled={submitting} type="submit" style={{ width: '160px' }}>
                     <small className='text-white'>{submitting ? 'Submitting' : 'Submit'}</small>
                  </Button>
               </Form>
            </>)}
         </Modal.Body>
      </Modal>
   );
}