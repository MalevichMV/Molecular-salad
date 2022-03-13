const initialState = {
    currentSlide: 0,
    
    ingredientsProcess: 'loading',
    ingredient__list: [],
    customSalad: [],
    orderCustom: [],

    saladsProcess: 'loading',
    salad__list: [],
    order: {},    

    modal: false,

    name: '',
    phone: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "NEXT_SLIDE":
            return{
                ...state,
                currentSlide: state.currentSlide >= 4 ? 0 : state.currentSlide + 1
            };

        case "SALADS_PROCESS_LOADING":
            return{
                ...state,
                saladsProcess: 'loading'
            };

        case "SALADS_PROCESS_ERROR":
            return{
                ...state,
                saladsProcess: 'error'
            };

        case "SALADS_PROCESS_SUCCESS":
            return{
                ...state,
                saladsProcess: 'success'
            };

        case "NEW_SALADS":
            return{
                ...state,
                salad__list: action.payload
            };
        
        case "INGEDIENTS_PROCESS_LOADING":
            return{
                ...state,
                ingredientsProcess: 'loading'
            };

        case "INGEDIENTS_PROCESS_ERROR":
            return{
                ...state,
                ingredientsProcess: 'error'
            };

        case "INGEDIENTS_PROCESS_SUCCESS":
            return{
                ...state,
                ingredientsProcess: 'success'
            };

        case "NEW_INGEDIENTS":
            return{
                ...state,
                ingredient__list: action.payload
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
        case "CREATE_CUSTOM_SALAD":
            const index = state.customSalad.indexOf(action.payload)
            if (index !== -1) {
                let copy = Object.assign([], state.customSalad)
                copy.splice(index, 1)
                return{
                    ...state,
                    customSalad: copy
                };
            } else {
                return{
                    ...state,
                    customSalad: [...state.customSalad, action.payload] 
                };
            };

        case "ADD_ORDER_CUSTOM_SALAD":
            if (state.customSalad.length > 1) {
                return{
                    ...state,
                    orderCustom: [...state.orderCustom, state.customSalad]
                }
            } else return{...state};
        case "REMOVE_INGEDIENTS":
            if (state.customSalad.length < 2) return{...state};
            let copyIngredient__list = [
                ...state.ingredient__list
            ]
            let copyCustomSalad = Object.assign([], state.customSalad)
            for (let i = 0; i < copyCustomSalad.length; i++)
            {
                for (let j = 0; j < copyIngredient__list.length; j++)
                {
                    if (copyCustomSalad[i] === copyIngredient__list[j].id)
                    {
                        copyIngredient__list[j].quantity--;
                        if (copyIngredient__list[j].quantity === 0)
                        {
                            copyCustomSalad.splice(i, 1)
                        }
                    }
                }
            }
            return {
                ...state,
                ingredient__list: copyIngredient__list,
                customSalad: copyCustomSalad
            };

        case "ADD_INGEDIENTS":
            let copyIngredients = [
                ...state.ingredient__list
            ]
            let copyOrderCustom = [
                ...state.orderCustom
            ]
            for (let i = 0; i < copyOrderCustom[action.payload].length; i++)
            {
                for (let j = 0; j < copyIngredients.length; j++)
                {
                    if (copyOrderCustom[action.payload][i] === copyIngredients[j].id)
                    {
                        copyIngredients[j].quantity++;
                    }
                }
            }
            copyOrderCustom.splice(action.payload, 1)
            return {
                ...state,
                ingredient__list: copyIngredients,
                orderCustom: copyOrderCustom
            };
        case "TOGGLE_MODAL":
            return{
                ...state,
                modal: !state.modal
            }
        case "CHANGE_NAME":
            return{
                ...state,
                name: action.payload
            };

        case "CHANGE_PHONE":
            return{
                ...state,
                phone: action.payload
            };

        default: 
            return state;
    }
}

export default reducer;