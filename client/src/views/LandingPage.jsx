import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import '../styles/landingPage.css'
import dogUno from '../img/perrito1.jpg'
import dogDos from '../img/perrito2.jpg'
import dogTres from '../img/perrito3.jpg'
import dogCuatro from '../img/perrito4.jpg'
import { BsChevronRight } from "react-icons/bs";

const LandingContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr 1fr; 
  gap: 10px 10px; 
  height: 100vh;
  width: 100vw;
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  
`
const Image = styled.img`
  width: 320px;
  border: 2px solid rgb(41, 36, 36);
  height: 1fr;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
  transition: all 0.5s ease;
  &:hover{
    transform: scale(1.05);
  }
`
const LandingArrow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const LandingPage = () => {

  return (
    <LandingContainer>
      <Image className='landingImg' src={dogUno} />
      <div></div>
      <Image className='landingImg' src={dogTres} />
      <div></div>
      <Title>
        <h1 className='landH'>Discover the breeds and create your own little animals :3 </h1>

      </Title>
      <LandingArrow>
        <Link style={{ textDecoration: 'none' }} className='LandArrow' to='/home'><BsChevronRight size={75}></BsChevronRight></Link>
      </LandingArrow>
      <Image className='landingImg' src={dogCuatro} />
      <div></div>
      <Image className='landingImg' src={dogDos} />

    </LandingContainer>
  )
}

export default LandingPage