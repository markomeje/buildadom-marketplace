import { Button, Image } from 'react-bootstrap';
import ManDesign from '../../assets/man-design.png';
import signupStyles from './Signup.module.css';
import SignupArrow from '../../assets/arrow-signup.png';
import Footer from '../../components/Footer/Footer';

export default function Signup() {
   return (
      <>
         <div className='w-100 d-flex justify-content-between'>
            <div className={`bg-white ${signupStyles.left}`} style={{ backgroundImage: `url(${ManDesign})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '140px 0' }}>
            </div>
            <div className={`bg-white px-3 ${signupStyles.right}`} style={{ padding: '140px 0' }}>
               <div className='text-center shadow-sm p-4'>
                  <Image src={SignupArrow} className='mb-3' />
                  <h1 className='text-dark'>Welcome to buildadom</h1>
                  <p className='text-dark'>Choose method of registration to proceed with creatng your account with us.</p>
                  <div className='my-4 d-flex justify-content-center flex-column'>
                     <Button className='bg-main rounded-pill px-4 py-2 text-white mb-4'>Register as an Individual</Button>
                     <Button className='bg-main rounded-pill px-4 py-2 text-white'>Register as an business</Button>
                  </div>
               </div>
            </div>
         </div>
         <Footer />
      </>
   )
}
