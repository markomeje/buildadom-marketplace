import { ReactNode } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import girl from "../../../assets/girl.png";
import { mainFeatures, subFeatures } from "../../../data/features";

export default function Features() {
   console.log(subFeatures);
   return (
      <div className='py-5'>
         <Container>
            <Row>
               <Col sm='12' md='5' lg='6' className='mb-4'>
                  <div className='w-100'>
                     <div className='bg-gray position-relative'>
                        <Image src={girl} className='img-fluid' />
                        <div className='position-absolute' style={{ zIndex: 2, top: '40px', right: '20px' }}>
                           {subFeatures && subFeatures.map((feature, index) => {
                              return (<div key={index} className='rounded bg-white d-flex align-items-center w-auto position-relative mb-4 p-3'>
                                 <div className='p-1 rounded text-center me-3' style={{ backgroundColor: `${feature.iconBgColor}`, width: '42px', height: '42px' }}>
                                    <Image src={ feature.icon } className='img-fluid mt-1' />
                                 </div>
                                 <div className='text-dark'>{ feature.title }</div>
                              </div>)
                           })}
                        </div>
                     </div>
                  </div>
               </Col>
               <Col sm='12' md='7' lg='6' className='mb-4'>
                  <p className='mb-4'>Join manufacturers all over the world and sell your product to a wider range of custormers and increase your earning rate through our mega platform  and also advertise your product to go top of the list anytime.</p>
                  <div className=''>
                     <div className='mb-2 text-dark'>Shop/Stores</div>
                     <h4 className='text-dark'>+3000</h4>
                  </div>
               </Col>
            </Row>
         </Container>
      </div>
   )
}
