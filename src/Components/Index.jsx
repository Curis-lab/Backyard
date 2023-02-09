import React from 'react';
import Footer from './essential/Footer';
import Menu from './Menu';
import Body from './Body';
import logo from '../assets/img/logo.jpeg';
import About from './index/About';


function Cardside(){
  return(
    <div className='grid grid-cols-2 md:grid-cols-4'>
      <h1>Hello</h1>

    </div>
  )
}

function Index() {

  return (
    <div className='w-full h-full flex-col'>
      <Menu/>
      <Body/>
      <Cardside/>
      <About image="images/a.jpeg"/>
      <Footer Image={logo}/>
    </div>
  )
}

export default Index
