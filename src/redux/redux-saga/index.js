import {all} from 'redux-saga/effects';

import getPlotterDataSaga from './product_list_saga'

export default function* rootSaga() {
  yield all([getPlotterDataSaga()]);
}