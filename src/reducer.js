const initialState = {
    currentSlide: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "NEXT_SLIDE":
            return{
                ...state,
                currentSlide: state.currentSlide >= 4 ? 0 : state.currentSlide + 1
            };
            default: 
                return state;
    }
}

export default reducer;