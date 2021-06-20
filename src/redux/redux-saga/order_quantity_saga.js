import { all, put, call, takeLatest, delay } from 'redux-saga/effects';

function* getOrderQuantitySaga(action) {
    
    // const OrderQuantity = yield call(
    //     { type: 'INCREMENT_ORDER_QUANTITY_DATA' }
    // );
    delay(4000);
    yield call('INCREMENT_ORDER_QUANTITY_DATA', action.payload);
//     const orderQuantity = yield put(
// "INCREMENT_ORDER_QUANTITY_DATA"
//       );
//       yield call (orderQuantity);
}
export default function* rootSaga() {
    yield all([takeLatest("INCREMENT_ORDER_QUANTITY_DATA", getOrderQuantitySaga)]);
}