import React from 'react'
import AllCards from './component/Cards/AllCards'
import Navbar from './Navbar'
const Home = () => {
  return (
    <div className='containerApp'>
        <Navbar></Navbar>
        <AllCards></AllCards>
    </div>
  ) 
}

export default Home