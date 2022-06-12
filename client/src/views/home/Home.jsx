import React from 'react'
import {useEffect} from 'react'
import {useDispatch, useSelector } from "react-redux";
import Card from '../../component/home/Card';
import {getAllDogs} from '../../redux/actions';
const Home = () => {

    
    const {dogs} = useSelector((state)=> state.dogs);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllDogs())
    }, [dispatch])

    //console.log(getAllDogs())
    return (
        <main>
             {dogs.map((dog)=>{
                return(
                    <Card
                        key={dog.id}
                        name={dog.name}
                        image={dog.image}
                        temperament={dog.temperament}
                        w_min={dog.weight_min}
                        w_max={dog.weight_max}
                    />
                )
            })} 
        </main>
    )
}

export default Home