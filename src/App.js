import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import NotFound from './components/NotFound';
import Product from './components/Product';
import Trade from './components/Trade';
import LoginForm from './LoginForm';
import Spinner from './Spinner';
import Info from './components/Info';
import Counter from './components/Counter';
import Test from './Test';
import LoginNew from './LoginNew';
import CountUp from './CountUp';
import './index.css';
import DateList from './DateList';
import Timer from './Timer';
import PhoneNumber from './PhoneNumber';
import TimerTwo from './TimerTwo';


function App() {

  //const endNum = 70000000;

   return (
  //   // <Trade />
  //   // <LoginForm />
  //   // <Info />
    //  <Counter />
    // <Test />
    // <LoginNew />
    // <CountUp start = {0} end = {endNum}/>
    // <Timer />
     <TimerTwo />
    //<PhoneNumber />
   )

  // return (
  //   <BrowserRouter>
  //     <Header />
  //     <Routes>
  //       <Route path="/" element={<Main />}></Route>
  //       <Route path="/product/:productId" element={<Product />}></Route>
  //       <Route path="*" element={<NotFound />}></Route>
  //     </Routes>
  //   </BrowserRouter>
  // )

  // return (
  //   <>
  //     {/* <Spinner /> */}
  //     <LoginForm />
  //   </>
  // )
}

export default App;
