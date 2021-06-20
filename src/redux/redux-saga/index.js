import {all} from 'redux-saga/effects';

import getProductListSaga from './product_list_saga';
import getOrderQuantitySaga from './order_quantity_saga';

export default function* rootSaga() {
  yield all([getProductListSaga(), getOrderQuantitySaga()]);
}