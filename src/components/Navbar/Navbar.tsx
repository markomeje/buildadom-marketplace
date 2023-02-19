import { Container, Image } from 'react-bootstrap'
// import navbarStyles from "./Navbar.module.css";
import LogoIcon from '../../assets/icon.png';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import LogoDark from '../../assets/logo-dark.png';

export default function Navbar() {
   return (
      <div className='w-100 bg-white fixed-top border-bottom py-3'>
         <Container>
            <div className='d-flex justify-content-between align-items-center'>
               <Link to='/' className='text-decoration-none'>
                  <div style={{ maxWidth: '145px', height: 'auto' }}>
                     <Image src={LogoDark} className='w-100 h-100 object-cover' />
                  </div>
               </Link>
               <div>
                  <RxHamburgerMenu size='2em' className='text-main cursor-pointer' />
               </div>
            </div>
         </Container>
      </div>
   )
}
