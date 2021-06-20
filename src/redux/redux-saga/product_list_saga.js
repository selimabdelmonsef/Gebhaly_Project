import Axios from 'axios';
import { api } from '../../constants/apis.js';
import {all, put, call, takeLatest} from 'redux-saga/effects';

async function getProductListData() {
   return Axios.get(api.productList_api);
} 
function* getProductListSaga(action) {
    try{
        const ProductListData= yield call(
            getProductListData
          );
        // console.log("KOLO",ProductListData);
        if(ProductListData.status === 200){ 
            yield put({
                      type: "GET_DATA_SUCCESS",
                      payload: ProductListData.data,
                    });
        }
        else{
            yield put({
                type: "GET_DATA_FAIL",
                payload: "An Error Occured",
              });
        }
    }
    catch(err){
        console.log(err);
        yield put({
            type: "GET_DATA_FAIL",
            payload: "An Error Occured",
          });
    }
      } 
export default function* rootSaga() {
    yield all([takeLatest("GET_PRODUCT_LIST_DATA", getProductListSaga)]);
}