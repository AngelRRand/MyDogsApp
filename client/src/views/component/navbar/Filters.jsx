import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { filterTemperament } from '../../../redux/actions';


export const Filters = () => {

    const temperaments = useSelector((state) => state.temperaments)

    //const dogs = useSelector((state) => state.dogs);
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(filterTemperament());
    }, []);

    function handleChance(e) {
        e.preventDefault();
        
    }

    console.log(temperaments)
    return (
        <div>
            <div>
                <h5 >Filter by temp</h5>
                <select onChange={(e)=> handleChance(e)}>
                    <option defaultValue value="all" hidden>
                        Temps
                    </option>
                    {temperaments.map((temp) => 
                            <option value={temp} key={temp}>
                                {temp}
                            </option>
                    )}
                </select>
            </div>


        </div>
    )
}
