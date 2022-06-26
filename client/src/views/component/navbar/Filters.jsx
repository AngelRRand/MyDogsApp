import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { filterTemperament, filterDogsTemp, filterCreated } from '../../../redux/actions';
import styled from 'styled-components';
//import {allCard} from '../Cards/AllCards'
//import { paginationReset } from '../../../redux/actions';

export const Filters = ({setPag, setInput}) => {

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
        setInput(1)
        //dispatch(paginationReset())
    }

    function handleFilterCreated(e) {
        e.preventDefault();
        dispatch(filterCreated(e.target.value))
        setPag(1)
        setInput(1)
    }

    //console.log(temperaments)
    const FiltersOrders = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
    const Select = styled.select`
        color: rgb(255, 255, 255);
        background-color: rgb(41, 36, 36);
        border: 2px solid white;
        box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
        overflow:hidden;
        ::-webkit-scrollbar {
        width: 12px;
        background-color: #F5F5F5;
        }
        ::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
        }
    `
    return (
        <div>
            <FiltersOrders>
                <h5 >Temperament</h5>
                <Select onChange={(e) => handleChance(e)}>
                    <option defaultValue value="all">
                        AllTemps
                    </option>
                    {temperaments.map((temp) =>
                        <option value={temp} key={temp}>
                            {temp}
                        </option>
                    )}
                </Select>
            </FiltersOrders>
            <FiltersOrders >
                <h5 >Source</h5>
                <Select onChange={(e) => { handleFilterCreated(e)}} >
                    <option defaultValue value="all">
                        All Sources 
                    </option>
                    <option value="dogs">Dogs </option>
                    <option value="inDB">DB </option>
                </Select>
            </FiltersOrders>

        </div>
    )
}
