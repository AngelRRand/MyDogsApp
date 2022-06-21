import React, { useState } from 'react'
import { Orders } from './component/navbar/Orders'
import { Filters } from './component/navbar/Filters';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Button = styled.button`
    background: white;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 4.5rem;
    height: 4.5rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    &::before,
    &::after {
    content: "";
    background-color: rgb(41, 36, 36);
    margin-top: 1rem;
    height: 5px;
    width: 2rem;
    position: absolute;
    top: 20px;
    transition: all 0.3s ease;
}
    &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
}
    &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
}
`;
const SidebarContainer = styled.div`
    background-color: rgb(255, 255, 255);
    width:4.5rem;
    height:100vh;
    padding:1rem 0;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    border-left: none;
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content:space-between;
    overflow:visible;
    position:relative;
`;
const SlickBar = styled.ul`

margin-top: 100px;
    background-color: rgb(41, 36, 36);
    list-style: none;
    display:flex;
    flex-direction:column;
    align-items: center;
    border-radius:0px 30px 30px 0px;
    padding:1rem 0;
    position: absolute;
    top: 4.5rem;
    left: 0;
    z-index: 1000;
    width: ${(props) => (props.clicked ? "15rem" : "4.44rem")};
    height: 50vh;
    justify-content: space-around;
    transition:all 0.3s ease;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;
const Item = styled.p`
    flex-direction: row;
    width: 100%;
    padding: 1.5rem 0;
    cursor: pointer;
    color: white;
    text-decoration: none;
    justify-content: space-around;
    align-items: center;
    transition: all 0.5s ease;
    background: transparent;
    display: flex;
    
    &:hover{
    transform: scale(1.05);
  }
`
const Display = styled.div`
    display: ${(props) => (props.clicked ? 'flex' : 'none')};
`

const Navbar = ({ setPag }) => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <nav >

                <SidebarContainer>
                <Button clicked={click} onClick={() => handleClick()}>
                    <div className='button-url'>

                    </div>
                </Button>

                    <SlickBar clicked={click}>

                        <Item>
                                <Link style={{ textDecoration: 'none' }} to={'/create'}><h4 style={{color: 'white' }}>CREATE</h4></Link>
                        </Item>
                        <Item onClick={() => handleClick()}>

                            <h3>Filters</h3>
                            <Display clicked={click}>
                                <Filters setPag={setPag}></Filters>
                            </Display>

                        </Item>
                        <Item onClick={() => handleClick()}>

                            <h3>Orders</h3>
                            <Display clicked={click}>
                                <Orders></Orders>
                            </Display>

                        </Item>

                    </SlickBar>


                </SidebarContainer>
            </nav>
        </>
    )
}

export default Navbar