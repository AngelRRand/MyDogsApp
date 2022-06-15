import React from 'react'
import { useDispatch } from "react-redux";
import { alfabeticDogs } from '../../../redux/actions';


export const Orders = () => {

    const dispatch = useDispatch();

    function handleClickOrder(e) {
        e.preventDefault();
        dispatch(alfabeticDogs(e.target.value));
    }
    return (
        <div>
            <h5 >Order by name</h5>
            <select onChange={(e) => {handleClickOrder(e) }} >
                <option defaultValue value="all" hidden>
                    Order
                </option>
                <option value="asc">A - Z</option>
                <option value="desc">Z - A</option>
            </select>
        </div>
    )
}
