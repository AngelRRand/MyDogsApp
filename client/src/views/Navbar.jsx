import React from 'react'
import { Orders } from './component/navbar/Orders'
import { Search } from './component/navbar/Search'

const Navbar = () => {
    return (
        <nav>
            <h1>LOGO</h1>
            <Orders></Orders>
            <Search></Search>
        </nav>
    )
}

export default Navbar