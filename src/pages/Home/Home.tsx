import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import homeStyles from './Home.module.css'

export default function Home() {
   return (
      <>
         <section className={`bg-white w-100 ${homeStyles.wrapper}`}>
            <Container>
               <div className={`bg-white w-100 ${homeStyles.inner}`}>
                  <Row className='d-flex justify-content-center text-center'>
                     <Col sm='12' md='10' lg='7'>
                        <h1 className='heading-1 mb-4'><span className='text-orange'>Buildadom</span> is building the largest digital ecosystem of innovative solutions for transforming the building material industry in Africa</h1>
                        <p className='leading mb-4'>Sign now and be among the first people to enjoy our <br /> amazing features when we launch</p>
                        <div className='d-flex justify-content-center'>
                           <Button className='bg-main rounded-pill me-4 px-4 py-2'>Signup Now</Button>
                           <Button className='border-main bg-transparent text-main rounded-pill px-4 py-2'>Learn More</Button>
                        </div>
                     </Col>
                  </Row>
               </div>
            </Container>
         </section>
         <section className={`bg-white w-100 ${homeStyles.features}`}></section>
      </>
   )
}
