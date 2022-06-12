const inicialState = {
    dogs: [],
    allDogs: []
}

export default function dogs(state = inicialState, action){
    switch(action.type){


        case 'GET_ALL_DOGS':
            return{
                ...state,
                dogs: action.payload,
                allDogs: action.payload
            }




        default:
            return state
    }
}