import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { filterTemperament, filterDogsTemp, filterCreated } from '../../../redux/actions';
import styled from 'styled-components';
//import {allCard} from '../Cards/AllCards'
//import { paginationReset } from '../../../redux/actions';

export const Filters = ({setPag}) => {

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
    }, [dispatch]);

    function handleChance(e) {
        e.preventDefault();
        dispatch(filterDogsTemp(e.target.value))
        setPag(1)
        //dispatch(paginationReset())
    }

    function handleFilterCreated(e) {
        e.preventDefault();
        dispatch(filterCreated(e.target.value))
        setPag(1)
    }

    //console.log(temperaments)
    const FiltersOrders = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
    return (
        <div>
            <FiltersOrders>
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
            </FiltersOrders>
            <FiltersOrders >
                <h5 >Source</h5>
                <select onChange={(e) => { handleFilterCreated(e)}} >
                    <option defaultValue value="all">
                        All Sources 
                    </option>
                    <option value="dogs">Dogs </option>
                    <option value="inDB">DB </option>
                </select>
            </FiltersOrders>

        </div>
    )
}
