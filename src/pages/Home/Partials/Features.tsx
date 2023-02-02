import { ReactNode } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import girl from "../../../assets/girl.png";
import { mainFeatures, subFeatures } from "../../../data/features";

export default function Features() {
   return (
      <>
         <Container style={{ maxWidth: '997px' }}>
            <Row className='d-flex align-items-center'>
               <Col sm='12' md='7' lg='6' className='mb-4'>
                  <div className='w-100 mb-5'>
                     <div className='bg-gray position-relative w-100'>
                        <div>
                           <Image src={girl} className='img-fluid w-100' />
                        </div>
                        <div className='position-absolute' style={{ zIndex: 2, top: '40px', right: '0' }}>
                           {subFeatures && subFeatures.map((feature, index) => {
                              return (<div key={index} className='rounded bg-white d-flex align-items-center w-auto shadow-md position-relative p-2' style={{ left: `${feature.left}`, top: `${feature.top}` }}>
                                 <div className='p-1 rounded text-center me-2' style={{ backgroundColor: `${feature.iconBgColor}`, width: '30px', height: '30px', lineHeight: '18px' }}>
                                    <Image src={feature.icon} className='img-fluid' />
                                 </div>
                                 <small className='text-dark'>{feature.title}</small>
                              </div>)
                           })}
                        </div>
                     </div>
                  </div>
               </Col>
               <Col sm='12' md='5' lg='6' className='mb-4 text-md-start text-center'>
                  <p className='mb-3'>Join manufacturers all over the world and sell your product to a wider range of custormers and increase your earning rate through our mega platform  and also advertise your product to go top of the list anytime.</p>
                  <div className=''>
                     <div className='mb-2 text-dark'>Shop/Stores</div>
                     <h4 className='text-dark'>+3000</h4>
                  </div>
               </Col>
            </Row>
         </Container>
         <Container>
            <Row className='text-md-start text-center'>
               {mainFeatures && mainFeatures.map((feature, index) => {
                  return (<Col sm='12' lg='4' className='mb-4' key={index}>
                     <div className='text-md-start text-center d-flex justify-content-md-start justify-content-center'>
                        <div className='mb-4 text-center' style={{ backgroundColor: `${feature.iconBgColor}`, width: '86px', height: '86px', lineHeight: '86px', borderRadius: '16px' }}>
                           <div style={{ backgroundImage: `url(${feature.backgroundIconImage})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                              <Image src={feature.icon} />
                           </div>
                        </div>
                     </div>
                     <h1 className='text-dark'>{ feature.title }</h1>
                     <p className='text-dark'>{ feature.text }</p>
                  </Col>)
               })}
            </Row>
         </Container>
      </>
   )
}
