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
    //     console.log(plotterDataResponse);
    //     if(plotterDataResponse.status >=200 && plotterDataResponse.status<300){
    //         yield put({
    //                   type: GET_PLOTTER_DATA_SUCCESS,
    //                   payload: plotterDataResponse.data,
    //                 });
    //     }
    //     else{
    //         yield put({
    //             type: GET_PLOTTER_DATA_FAIL,
    //             payload: "An Error Occured",
    //           });
    //     }
    // }
    // catch(err){
    //     // console.log(err);
    //     yield put({
    //         type: GET_PLOTTER_DATA_FAIL,
    //         payload: "An Error Occured",
    //       });
    // }
}
export default function* rootSaga() {
    yield all([takeLatest("CART DATA", getCartData)]);
}