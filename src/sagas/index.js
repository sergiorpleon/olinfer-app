
import { all } from 'redux-saga/effects'
import {watcherHelloSaga} from './helloSaga';


export default function* rootSaga() {
    yield all([
        watcherHelloSaga(),
    ])
  }

