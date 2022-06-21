import React, {useState} from 'react'
import { useDispatch,  } from "react-redux";
import { searchDogs, getAllDogs } from '../../../redux/actions';
import { BsSearch } from 'react-icons/bs';
import '../../../styles/Seach.css'
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
        <div className='searchMain'>
            <div className='searchCom'>

            <input
                type="text"
                id="title"
                autoComplete="off"
                value={dogState}
                onChange={(e) => handleSearch(e)}
            />
            <button type="submit" onClick={handleSubmit}>
                <BsSearch size={30}></BsSearch>
            </button>
            </div>
        </div>
    )
}
