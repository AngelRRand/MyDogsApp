import React, {useState, useEffect} from 'react'
import { useDispatch,  } from "react-redux";
import { searchDogs } from '../../../redux/actions';
import '../../../styles/Seach.css'
export const Search = () => {

    const [dogState, dogSet] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchDogs(dogState))
        
    }, [dispatch ,dogState]);

    
    function handleSearch(e){
        dogSet(e.target.value) 
        /* if(dogState.length === 0 || !dogState || dogState === ''){
            dispatch(getAllDogs())
        }else{
            dispatch(searchDogs(dogState))
        } */
    }

    return (
        <div className='searchMain'>
            <div className='searchCom'>

            <input
                type="text"
                id="title"
                autoComplete="off"
                value={dogState}
                placeholder='Search dog...'
                onChange={(e) => handleSearch(e)}
            />
            
            </div>
        </div>
    )
}
