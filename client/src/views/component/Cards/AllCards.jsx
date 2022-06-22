import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs } from '../../../redux/actions';
import { Search } from '../navbar/Search'
import Pagination from './Pagination';
import Card from './Card';
import Navbar from '../../Navbar';
import '../../../styles/cards.css'
const Home = () => {
    const dogs = useSelector((state) => state.dogs);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllDogs())
    }, [dispatch])
    //console.log(dogs)

    const [pag, setPag] = useState(1);
    const [dogsPag] = useState(8);
    const max = dogs.length / dogsPag
    //console.log(dogs)
    console.log(pag)
    return (
        <>

            <Navbar setPag={setPag}></Navbar>
            <main>
                <div className='container_cardsSearch'>
                    <div className='cards'>

                        {dogs.slice(
                            (pag - 1) * dogsPag,
                            (pag - 1) * dogsPag + dogsPag
                        ).map((dog) => {
                            return (
                                <Card
                                    key={dog.id}
                                    id={dog.id}
                                    name={dog.name}
                                    image={dog.image}
                                    temperaments={dog.temperaments}
                                    w_min={dog.weight_min}
                                    w_max={dog.weight_max}
                                />
                            )
                        })}
                    </div>
                    <div className='search_bar'>

                        <Search></Search>
                    </div>

                </div>
                <div className='cards-pagination'>
                    <Pagination
                        pag={pag}
                        setPag={setPag}
                        max={max}
                    />

                </div>

            </main>

        </>



    )
}

export default Home