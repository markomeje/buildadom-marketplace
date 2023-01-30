import { Button, Container, Image } from 'react-bootstrap'
import navbarStyles from "./Navbar.module.css";
import Vector24 from '../../assets/Vector24.png';

export default function Navbar() {
   return (
      <div className='w-100 bg-white border-bottom py-3'>
         <Container>
            <div className='d-flex justify-content-between align-items-center'>
               <>
                  <Image src={Vector24} />
               </>
               <div>
                  <Button className={`px-4 py-2 text-white rounded-pill bg-main ${navbarStyles.button}`}>Login/Signup</Button>
               </div>
            </div>
         </Container>
      </div>
   )
}
