import React from 'react'
import { Orders } from './component/navbar/Orders'
import { Search } from './component/navbar/Search'
import { SiDogecoin } from "react-icons/si";
const Navbar = () => {
    return (
        <nav>
            <h1><SiDogecoin size={56}></SiDogecoin></h1>
            <Search></Search>
            <Orders></Orders>
        </nav>
    )
}

export default Navbar