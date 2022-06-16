import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Card from './Card';
import { getAllDogs } from '../../../redux/actions';
import Pagination from './Pagination';
const Home = () => {
    const { dogs } = useSelector((state) => state.dogs);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllDogs())
    }, [dispatch])


    const [pag, setPag] = useState(1);
    const [dogsPag, setDogsPag] = useState(8);
    const max = dogs.length / dogsPag
    return (
        <main>
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
                        temperament={dog.temperament}
                        w_min={dog.weight_min}
                        w_max={dog.weight_max}
                    />
                )
            })}
            </div>
            <div className='cards-pagination'>
            <Pagination
                pag={pag}
                setPag={setPag}
                max={max}
            />

            </div>
            
        </main>
        
        

    )
}

export default Home