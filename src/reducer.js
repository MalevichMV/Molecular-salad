const initialState = {
    currentSlide: 0,
    process: 'loading',
    salad__list: []
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
        default: 
            return state;
    }
}

export default reducer;