import { ReactNode } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import girl from "../../../assets/girl.png";
import { mainFeatures, subFeatures } from "../../../data/features";

export default function Features() {
   return (
      <>
         <Container style={{ maxWidth: '1180px' }}>
            <Row className='d-flex align-items-center'>
               <Col sm='12' md='7' lg='6' className='mb-4'>
                  <div className='w-100 mb-5'>
                     <div className='bg-gray position-relative w-75'>
                        <Image src={girl} className='img-fluid w-100 h-100' style={{ zIndex: 1 }} />
                        <div className='position-absolute' style={{ zIndex: 2, top: '40px', right: '-40px' }}>
                           {subFeatures && subFeatures.map((feature, index) => {
                              return (<div key={index} className='rounded bg-white d-flex align-items-center w-auto shadow-md position-relative mb-4 p-3' style={{ left: `${feature.left}` }}>
                                 <div className='p-1 rounded text-center me-3' style={{ backgroundColor: `${feature.iconBgColor}`, width: '42px', height: '42px' }}>
                                    <Image src={feature.icon} className='img-fluid mt-1' />
                                 </div>
                                 <div className='text-dark'>{feature.title}</div>
                              </div>)
                           })}
                        </div>
                     </div>
                  </div>
               </Col>
               <Col sm='12' md='5' lg='6' className='mb-4'>
                  <p className='mb-3'>Join manufacturers all over the world and sell your product to a wider range of custormers and increase your earning rate through our mega platform  and also advertise your product to go top of the list anytime.</p>
                  <div className=''>
                     <div className='mb-2 text-dark'>Shop/Stores</div>
                     <h4 className='text-dark'>+3000</h4>
                  </div>
               </Col>
            </Row>
         </Container>
         <Container>
            <Row>
               {mainFeatures && mainFeatures.map((feature, index) => {
                  return (<Col sm='12' lg='4' className='mb-4' key={index}>
                     <div className='mb-4 text-center' style={{ backgroundColor: `${feature.iconBgColor}`, width: '86px', height: '86px', lineHeight: '86px', borderRadius: '16px' }}>
                        <div className='' style={{ backgroundImage: `url(${feature.backgroundIconImage})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                           <Image src={feature.icon} />
                        </div>
                     </div>
                     <h4 className='text-dark'>{ feature.title }</h4>
                     <p className='text-dark'>{ feature.text }</p>
                  </Col>)
               })}
            </Row>
         </Container>
      </>
   )
}
