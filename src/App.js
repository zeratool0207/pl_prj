import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import NotFound from './components/NotFound';
import Product from './components/Product';
import LoginForm from './LoginForm';
import Spinner from './Spinner';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/product/:productId" element={<Product />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )

  // return (
  //   <>
  //     {/* <Spinner /> */}
  //     <LoginForm />
  //   </>
  // )
}

export default App;
