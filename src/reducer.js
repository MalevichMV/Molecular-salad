const initialState = {
    currentSlide: 0,
    process: 'loading',
    salad__list: [],
    order: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "NEXT_SLIDE":
            return{
                ...state,
                currentSlide: state.currentSlide >= 4 ? 0 : state.currentSlide + 1
            };

        case "PROCESS_LOADING":
            return{
                ...state,
                process: 'loading'
            };

        case "PROCESS_ERROR":
            return{
                ...state,
                process: 'error'
            };

        case "PROCESS_SUCCESS":
            return{
                ...state,
                process: 'success'
            };

        case "NEW_SALADS":
            return{
                ...state,
                salad__list: action.payload
            };

        case "REMOVE_ORDER_ITEM":
            if (state.order[action.payload] !== undefined) {
                if (state.order[action.payload] === 1){
                    const c = {
                        ...state.order
                    }
                    delete c[action.payload]
                    return{
                        ...state,
                        order: c
                    };
                }
                return{
                    ...state,
                    order: {
                        ...state.order,
                        [action.payload]: state.order[action.payload] - 1
                    }
                };
            } 
            else {
                return{
                    ...state
                }
            };

        case "ADD_ORDER_ITEM":
            if(state.order[action.payload.id] === undefined) {
                return{
                    ...state,
                    order: {
                        ...state.order,
                        [action.payload.id]: 1
                    }
                };
            }
            else {
                if(state.order[action.payload.id] === action.payload.quantity)
                    return{
                        ...state
                    };

                return{
                    ...state,
                    order: {
                        ...state.order,
                        [action.payload.id]: state.order[action.payload.id] + 1
                    }
                };
            };
        default: 
            return state;
    }
}

export default reducer;