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


function App() {

   return (
  //   // <Trade />
  //   // <LoginForm />
  //   // <Info />
    //  <Counter />
    // <Test />
    <LoginNew />


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
