import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { filterTemperament, filterDogsTemp, filterCreated } from '../../../redux/actions';


export const Filters = () => {

    const temperaments = useSelector((state) => state.temperaments).sort(
        function (a, b) {
            if (a < b) return -1;
            else return 1;
        }
    );

    //const dogs = useSelector((state) => state.dogs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filterTemperament());
    }, []);

    function handleChance(e) {
        e.preventDefault();
        dispatch(filterDogsTemp(e.target.value))
    }

    function handleFilterCreated(e) {
        e.preventDefault();
        dispatch(filterCreated(e.target.value))
    }

    //console.log(temperaments)
    return (
        <div>
            <div>
                <h5 >Temperament</h5>
                <select onChange={(e) => handleChance(e)}>
                    <option defaultValue value="all">
                        AllTemps
                    </option>
                    {temperaments.map((temp) =>
                        <option value={temp} key={temp}>
                            {temp}
                        </option>
                    )}
                </select>
            </div>
            <div >
                <h5 >Source</h5>
                <select onChange={(e) => { handleFilterCreated(e)}} >
                    <option defaultValue value="all">
                        All Sources 
                    </option>
                    <option value="dogs">Dogs </option>
                    <option value="inDB">DB </option>
                </select>
            </div>

        </div>
    )
}
