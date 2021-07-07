# redux middleware

https://react.vlpt.us/redux-middleware/

## ducks pattern

action, action creator, reducer in one single file

## middleware 직접만들기

https://redux.js.org/tutorials/fundamentals/part-4-store#middleware

```js
const middleware = (store) => (next) => (action) => {
  // 하고 싶은 작업...
};
```

```js
function middleware(store) {
  return function (next) {
    return function (action) {
      // 하고 싶은 작업...
    };
  };
}
```

```js
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) =>
    (next) =>
    (action) => {
      if (typeof action === 'function') {
        return action(dispatch, getState, extraArgument);
      }

      return next(action);
    };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
```

## thunk

thunk 미들웨어 자체는 dispatch로 plain javascript object가 아닌 함수를 디스패치 해도 에러가 안나게해주는 의미
이때 디스패치로 들어가는 함수의 형태만 지켜주면됨

`너가 지금 바로 액션(플레인 오브젝트) 못만드니까, 일단 디스패치를 같이 넘겨줄게. 너가 할거 다하고 액션 만들 수 있게 되면 넘겨준 디스패치로 액션 날려`

성크함수는 결국 비동기 액션생성-생성함수

```js
// action creator
export const increase = () => {
  return { type: INCREASE };
};
export const decrease = () => ({ type: DECREASE });

// thunk functions
export const increaseAsync = () => {
  return (dispatch) => {
    setTimeout(() => distpatch(decrease()), 1000);
  };
};
```

---

```js
const thunk = (store) => (next) => (action) =>
  typeof action === 'function' ? action(store.dispatch, store.getState) : next(action);
```

```js
const myThunk = () => (dispatch, getState) => {
  dispatch({ type: 'HELLO' });
  dispatch({ type: 'BYE' });
};

dispatch(myThunk());
```
