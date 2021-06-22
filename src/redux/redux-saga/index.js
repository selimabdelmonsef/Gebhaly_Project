import { all } from 'redux-saga/effects';

import getProductListSaga from './product_list_saga';
import incrementOrderQuantitySaga from './order_quantity_saga';
import decrementOrderQuantitySaga from './order_quantity_saga';
import getCartData from './cartData_saga';

export default function* rootSaga() {
    yield all([getProductListSaga(), incrementOrderQuantitySaga(), getCartData(), decrementOrderQuantitySaga()]);
}