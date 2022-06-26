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
                <h5 >Name</h5>
                <Select onChange={(e) => { handleOrderAlfabetic(e) }} >
                    <option defaultValue value="all" hidden>
                        Order
                    </option>
                    <option value="asc">A - Z</option>
                    <option value="desc">Z - A</option>
                </Select>
            </FiltersOrders>
             <FiltersOrders>
                <h5 >Weight</h5>
                <Select onChange={(e) => { handleOrderWeight(e) }} >
                    <option defaultValue value="all" hidden>
                        Weight
                    </option>
                    <option value="asc">MIN - MAX</option>
                    <option value="desc">MAX - MIN</option>
                </Select>
            </FiltersOrders>
        </div>

    )
}
