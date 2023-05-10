// import React from 'react'
import { put, takeEvery } from "redux-saga/effects";
import { PRODUCT_DATA, SET_PRODUCT_DATA,SEARCH_DATA } from "./constant";

function* getProducts() {
  let data = yield fetch("https://jsonplaceholder.typicode.com/users");
  data = yield data.json();
  console.warn("action is called", data);
  yield put({ type: SET_PRODUCT_DATA, data });
}
function* searchProducts(data) {
  console.warn("action is called", data.query);
  let result = yield fetch(`https://jsonplaceholder.typicode.com/users?q=${data.query}`);
  result = yield  result.json();
  console.warn("action is called",  result);
  yield put({ type: SET_PRODUCT_DATA, data:  result });
}
export default function* productSaga() {
  yield takeEvery(PRODUCT_DATA, getProducts);
  yield takeEvery(SEARCH_DATA, searchProducts);

}
