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
import Danger from './components/Danger';
import MuiTest from './components/MuiTest';
import SignIn from './components/SignIn';
import LoginTest from './components/LoginTest';
import MyComponent from './components/MyComponent';
import Parent from './components/Parent';
import ReactLive from './components/ReactLive';
import PrismExample from './components/PrismExample';


function App() {

  //const endNum = 70000000;

  //  return (
  //   <Parent />
  //   // <MyComponent name="React" >리액트</MyComponent>
  // //   // <Trade />
  // //   // <LoginForm />
  // //   // <Info />
  //   //  <Counter />
  //   // <Test />
  //   // <LoginNew />
  //   // <CountUp start = {0} end = {endNum}/>
  //   // <Timer />
  //   //  <TimerTwo />
  //   //  <Danger />
  //   //  <MuiTest />
  //   // <SignIn />
  //   // <LoginTest />
  //   //<PhoneNumber />
  //  )

  const endNum = 70000000;
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LoginTest />}></Route>
        <Route path="/live" element={<ReactLive />}></Route>
        <Route path="/prism" element={<PrismExample />}></Route>
        <Route path="/loginNew" element={<LoginNew />}></Route>
        <Route path="/countup" element={<CountUp start = {0} end = {endNum}/>}></Route>
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
