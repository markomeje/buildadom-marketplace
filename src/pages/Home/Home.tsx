import React from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import homeStyles from './Home.module.css'
import Features from './Partials/Features'
import { processFeatures } from '../../data/features';
import Security from '../../assets/Security.png';

export default function Home() {
   return (
      <>
         <section className={`bg-white w-100 ${homeStyles.wrapper}`}>
            <Container>
               <div className={`bg-white w-100 ${homeStyles.inner}`}>
                  <Row className='d-flex justify-content-center text-center'>
                     <Col sm='12' md='10' lg='7'>
                        <h1 className='text-dark mb-4'><span className='text-orange'>Buildadom</span> is building the largest digital ecosystem of innovative solutions for transforming the building material industry in Africa</h1>
                        <Row className='d-flex justify-content-center text-center'>
                           <Col md="10" lg="7">
                              <p className='text-dark mb-4'>Sign now and be among the first people to enjoy our amazing features when we launch</p>
                           </Col>
                        </Row>
                        <div className='d-flex justify-content-center'>
                           <Button className='bg-main rounded-pill me-4 px-4 py-2'>Signup Now</Button>
                           <Button className='border-main bg-transparent text-main rounded-pill px-4 py-2'>Learn More</Button>
                        </div>
                     </Col>
                  </Row>
               </div>
            </Container>
         </section>
         <section className={`bg-white w-100 ${homeStyles.features}`}>
            <Features />
         </section>
         <section className={`w-100 ${homeStyles.cta}`}>
            <Container>
               <Row className='d-flex justify-content-center text-center'>
                  <Col sm='12' md='10' lg='5'>
                     <h3 className='text-white mb-4'>Sign now and be among the first people to enjoy our amazing features when we launch</h3>
                     <Button className='bg-main rounded-pill px-4 py-2'>Signup Now</Button>
                  </Col>
               </Row>
            </Container>
         </section>
         <section className={`w-100 bg-white ${homeStyles.process}`}>
            <Container>
               <h1 className='text-main text-center mb-4'>What do you want to achieve?</h1>
               <Row>
                  { processFeatures && processFeatures.map((feature, index) => {
                     return (<Col key={index} sm='12' md='6' lg='3' className='mb-4'>
                        <div className='bg-light p-4' style={{ height: '480px' }}>
                           <div className='p-3 bg-light border mb-3 rounded' style={{ width: '65px', height: '65px' }}>
                              <Image src={feature.icon} className='img-fluid mb-3' />
                           </div>
                           <div className=''>
                              <h5 className='text-dark'>
                                 {feature.title}
                              </h5>
                              <ul>
                                 {feature.text && feature.text.map((point, index) => {
                                    return (<li key={index} className='mb-2 text-orange'>
                                       <span className='text-dark'>
                                          {point}
                                       </span>
                                    </li>)
                                 })}
                              </ul>
                           </div>
                        </div>
                     </Col>)
                  })}
               </Row>
            </Container>
         </section>
         <section className={`w-100 ${homeStyles.security}`}>
            <Container>
               <Row className='d-flex align-items-center'>
                  <Col sm='12' md='6' className='mb-4'>
                     <h4 className='text-white mb-3'>You're in Safe Hands</h4>
                     <p className='text-white'>Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience. Performance compared to i7-9700. Specs varies by model.</p>
                  </Col>
                  <Col sm='12' md='6'>
                     <div className=''>
                        <Image src={Security} className='img-fluid' />
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>
      </>
   )
}
