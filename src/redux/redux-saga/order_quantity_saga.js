import { all, put, call, takeLatest, delay } from 'redux-saga/effects';

function* incrementOrderQuantitySaga(action) {
    delay(4000);
    yield call('INCREMENT_ORDER_QUANTITY_DATA', action.payload);
}

function* decrementOrderQuantitySaga(action) {
    delay(4000);
    yield call('DECREMENT_ORDER_QUANTITY_DATA', action.payload);
}
export default function* rootSaga() {
    yield all([takeLatest("INCREMENT_ORDER_QUANTITY_DATA", incrementOrderQuantitySaga,
        'DECREMENT_ORDER_QUANTITY_DATA', decrementOrderQuantitySaga)]);
}