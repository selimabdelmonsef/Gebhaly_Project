// import {GET_DIMENSION_MEASURE_DATA, GET_DATA_FAIL, GET_DATA_SUCCESS} from '../../constants/actions_constants'
// const initState = { quantity: 10 };

export default function OrderQuantityReducer(state = 0, action) {
    switch (action.type) {
        case "INCREMENT_ORDER_QUANTITY_DATA":
            return state+1 ;
            case "DECREMENT_ORDER_QUANTITY_DATA":
            return state-1 ;
        default: return state;
    }
}