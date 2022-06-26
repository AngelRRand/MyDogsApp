import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs } from '../../../redux/actions';
import { Search } from '../navbar/Search'
//import Pagination from './Pagination';
import Card from './Card';
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Navbar from '../../Navbar';
import '../../../styles/cards.css'
import { Loading } from '../../Loading';
const Home = () => {
    const [input, setInput] = useState(1);
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



    const nextPage = () => {
        setInput(parseInt(input) + 1);
        setPag(parseInt(pag) + 1);
    }
    const previusPage = () => {
        setInput(parseInt(input) - 1);
        setPag(parseInt(pag) - 1);
    }
    const onKeyDown = e => {
        if (e.keyCode === 13) {
            setPag(parseInt(e.target.value))               //Esta funcion solo continua una ves se preciona enter
            if (
                parseInt(e.target.value < 0) ||
                parseInt(e.target.value) > Math.ceil(max) ||
                isNaN(parseInt(e.target.value))            //Si se escriben letras que no marque un error
            ) {
                setPag(1)
                setInput(1)
            } else {
                setPag(parseInt(e.target.value))
            }
        }
    }

    const onChance = (e) => {
        setInput(e.target.value)
    }


    return (
        <>

            <Navbar
                setPag={setPag}
                setInput={setInput}
            />
            {!dogs[0] ?
                <Loading></Loading>
                :
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
                        <div className='pagination'>
                            <button className='button_pag' disabled={pag === 1 || pag < 1} onClick={previusPage}> <BsChevronUp size={35} /> </button>
                            <div className='pag-circ'>
                                <input
                                    onChange={(e) => onChance(e)}
                                    onKeyDown={(e) => onKeyDown(e)}
                                    name="page"
                                    autoComplete='off'
                                    value={input}
                                />
                                <p>{Math.ceil(max)}</p>

                            </div>
                            <button className='button_pagBot' disabled={pag === Math.ceil(max) || pag > Math.ceil(max)} onClick={nextPage}> <BsChevronDown size={35} /> </button>
                        </div>

                    </div>

                </main>
            }

        </>



    )
}

export default Home