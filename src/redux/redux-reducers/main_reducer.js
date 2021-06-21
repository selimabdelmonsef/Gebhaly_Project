import { combineReducers } from 'redux';
import ProductListReducer from './product_list_reducer';
import OrderQuantityReducer from './order_quantity_reducer';
import CartDataReducer from './cartData_reducer';


 const rootReducer = combineReducers({
    ProductListReducer,
    OrderQuantityReducer,
    CartDataReducer
});
export default rootReducer;