import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer, { rootSaga } from './modules';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, sagaMiddleware)));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// debugger;
// class A extends Object {
//   showA() {}
// }
// class B extends A {
//   showB() {}
// }
// class C extends B {
//   showC() {}
// }
// var a = new A();
// var b = new B();
// var c = new C();
// console.info(a.__proto__);
// console.info(a.prototype);
// console.info(a.constructor);
