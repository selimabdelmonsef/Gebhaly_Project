import { all, put, call, takeLatest } from 'redux-saga/effects';

// async function getCartData(payload) {
//     return Axios.post(api.postPlotterData_api, {
//         "measures": [payload.measures],
//         "dimension": payload.dimension
//     });

// }
function* getCartData(action) {
    // try{
    const cartData = yield call(
        { "data": [action.payload] }
    );
    yield put({
        type: "CART DATA",
        payload: cartData,
    });
}
export default function* rootSaga() {
    yield all([takeLatest("CART DATA", getCartData)]);
}