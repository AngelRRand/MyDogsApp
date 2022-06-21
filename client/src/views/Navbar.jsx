import React from 'react'
import { Orders } from './component/navbar/Orders'
import { Search } from './component/navbar/Search'
import { SiDogecoin } from "react-icons/si";
import { Filters } from './component/navbar/Filters';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav>
            <h1><SiDogecoin size={56}></SiDogecoin></h1>
            <Search></Search>
            <Link style={{ textDecoration: 'none' }} to={'/create'}><p>create</p></Link>
            <Filters></Filters>
            <Orders></Orders>
        </nav>
    )
}

export default Navbar