import { all, put, call, takeLatest } from 'redux-saga/effects';

function* getCartData(action) {
    const cartData = yield call(
        { "data": [action.payload] }
    );
    yield put({
        type: "CART_DATA",
        payload: cartData,
    });
}
export default function* rootSaga() {
    yield all([takeLatest("CART_DATA", getCartData)]);
}