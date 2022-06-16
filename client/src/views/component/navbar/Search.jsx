import React, {useState} from 'react'
import { useDispatch,  } from "react-redux";
import { searchDogs, getAllDogs } from '../../../redux/actions';
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
    function handleSearch(e){
        dogSet(e.target.value) 
        if(dogState.length === 0 || !dogState || dogState === ''){
            getAllDogs()
        }else{
            dispatch(searchDogs(dogState))
        }
    }

    return (
        <div>
            <input
                type="text"
                id="title"
                autoComplete="off"
                value={dogState}
                onChange={(e) => handleSearch(e)}
            />
            <button type="submit" onClick={handleSubmit}>
                <BsSearch></BsSearch>
            </button>
        </div>
    )
}
