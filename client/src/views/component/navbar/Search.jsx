import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { searchDogs } from '../../../redux/actions';
import { BsSearch } from 'react-icons/bs';

export const Search = () => {

    const [dogState, dogSet] = useState('');
    const dispatch = useDispatch();



    function handleSubmit(event) {
        event.preventDefault();
        if(dogState.length <= 0){
            return alert('error')
        }else{
            dispatch(searchDogs(dogState));
            dogSet('');
        }
    }

    return (
        <div>
            <h2>Buscador</h2>
            <input
                type="text"
                id="title"
                autoComplete="off"
                value={dogState}
                onChange={(e) => dogSet(e.target.value)}
            />
            <button type="submit" onClick={handleSubmit}>
                <BsSearch></BsSearch>
            </button>
        </div>
    )
}
