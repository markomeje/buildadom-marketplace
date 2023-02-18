import { Suspense, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Loading from './components/Loading'
import { routes } from './routes';
import './App.css';

export default function App() {

   useEffect(() => {
      window.process = {
         ...window.process,
      };
   }, []);

   return (
      <Suspense fallback={<Loading />}>
         <Navbar />
         <Routes>
            {routes.map((route, index) => {
               const Element: React.ReactNode | null = route.element;
               return (<Route path={route.path} element={Element} key={index} />)
            })}
         </Routes>
      </Suspense>
   )
}
