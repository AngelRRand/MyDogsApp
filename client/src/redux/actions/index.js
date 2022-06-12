import axios from 'axios'


export function getAllDogs() {

    return async function (dispatch) {
        var response = await axios.get('http://localhost:3001/dogs')
       
        return dispatch({
            type: 'GET_ALL_DOGS',
            payload:  response.data
        })

    }

}
