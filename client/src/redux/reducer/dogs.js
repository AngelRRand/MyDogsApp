const inicialState = {
    dogs: [],
    allDogs: [],
    detail: []
}

export default function dogs(state = inicialState, action) {
    switch (action.type) {


        case 'GET_ALL_DOGS':
            return {
                ...state,
                dogs: action.payload,
                allDogs: action.payload
            }

        case 'SEARCH_DOG':
            return {
                ...state,
                dogs: action.payload,
            }

        case 'DETAIL_DOG':
            return {
                ...state,
                detail: action.payload
            }

        case 'ALFABETIC_DOGS':
            const sortName = action.payload === 'asc' ? 
            [...state.dogs].sort(function (a, b) {
                if (a.name > b.name) { return 1 }
                if (b.name > a.name) { return -1 }
                return 0;
            }) :
            [...state.dogs].sort(function (a, b) {
                if (a.name > b.name) { return -1; }
                if (b.name > a.name) { return 1; }
                return 0;
            })
            return {
                ...state,
                dogs: sortName
            }

        case 'WEIGTH_DOGS':
            const sortWeigth = action.payload === 'asc'?
            [...state.dogs].sort((a, b)=>{
                if(a.weight_max > b.weight_max) {return 1}  
                if(b.weight_max > a.weight_max) {return -1} 
                return 0 
            }) :  
            [...state.dogs].sort((a, b)=>{
                if(a.weight_max > b.weight_max) {return -1}  
                if(b.weight_max > a.weight_max) {return 1} 
                return 0
            })
            return{
                ...state,
                dogs: sortWeigth
            }
        default:
            return state
    }
}