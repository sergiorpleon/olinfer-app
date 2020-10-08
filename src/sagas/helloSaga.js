import { call, put, takeLatest } from "redux-saga/effects";
import { READ_HELLO_SAGA, READ_HELLO_SUCCESS, READ_HELLO_ERROR
 } from "../actions";


 const loadHello = (name)=>{
    return "Hello "+ name;
  }

export function* readHelloSaga(action) {
    try {
        const hello = yield call(loadHello, action.payload.name)
        yield put({
            type: READ_HELLO_SUCCESS,
            payload: hello
        })
    } catch(error){
        yield put({
            type: READ_HELLO_ERROR,
            payload:{
                title:"Querido usuario, lo sentimos hubo un error",
                debug: error
            }
        })
    }
}

export function * watcherHelloSaga(){
    yield takeLatest(READ_HELLO_SAGA, readHelloSaga)
} 

