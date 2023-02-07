import { Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Loading from './components/Loading'
//import { Routes, Route } from "react-router-loading";
//import { useIsFetching } from 'react-query';
import { routes } from './routes';
import './App.css';

export default function App() {
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
