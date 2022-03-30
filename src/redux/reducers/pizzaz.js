const initialState = {
    items: [],
    isLoaded: false, 
}

const pizzaz = (state = initialState, action) => {
//     switch (action.type) {
//         case 'SET_PIZZAS':
//             return {
//                 ...state,
//                 items: action.payload,
//                 isLoaded: true,
//             }
            
//         case 'SET_LOADED':

//                 return {
//                     ...state,
//                     isLoaded: action.payload
//                 }
// default:
//     return state;
            
//     }
  
if (action.type === 'SET_PIZZAZ') {
    return {
        ...state,
        items: action.payload,
        isLoaded: true,
    }
}

if (action.type === 'SET_LOADED') {
    return {
        ...state,
        isLoaded: action.payload,
    }
}

return state;

}

export default pizzaz;