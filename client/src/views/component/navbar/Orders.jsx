import React from 'react'
import { useDispatch } from "react-redux";
import { alfabeticDogs, weigthDogs } from '../../../redux/actions';
import styled from 'styled-components';


export const Orders = () => {

    const dispatch = useDispatch();

    function handleOrderAlfabetic(e) {
        e.preventDefault();
        dispatch(alfabeticDogs(e.target.value));
    }

    function handleOrderWeight(e) {
        e.preventDefault();
        dispatch(weigthDogs (e.target.value));
    }

const FiltersOrders = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`


    return (
        <div>
            <FiltersOrders>
                <h5 >Name</h5>
                <select onChange={(e) => { handleOrderAlfabetic(e) }} >
                    <option defaultValue value="all" hidden>
                        Order
                    </option>
                    <option value="asc">A - Z</option>
                    <option value="desc">Z - A</option>
                </select>
            </FiltersOrders>
             <FiltersOrders>
                <h5 >Weight</h5>
                <select onChange={(e) => { handleOrderWeight(e) }} >
                    <option defaultValue value="all" hidden>
                        Weight
                    </option>
                    <option value="asc">MIN - MAX</option>
                    <option value="desc">MAX - MIN</option>
                </select>
            </FiltersOrders>
        </div>

    )
}
