const initState = { data: []};
export default function CartDataReducer(state = initState, action) {
    switch (action.type) {
        case "CART_DATA":
            return {
                ...state,
                data: action.payload,
            };
        default: return state;
    }
}