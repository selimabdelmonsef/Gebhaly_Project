import { combineReducers } from 'redux';
import ProductListReducer from './product_list_reducer';
import OrderQuantityReducer from './order_quantity_reducer';


 const rootReducer = combineReducers({
    ProductListReducer,
    OrderQuantityReducer,
});
export default rootReducer;