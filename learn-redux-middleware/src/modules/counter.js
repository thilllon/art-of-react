import { createAction, handleActions } from 'redux-actions';
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

// action definition
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_AYNC = 'counter/INCREASE_ASYNC';
const DECREASE_AYNC = 'counter/DECREASE_ASYNC';
// action creator
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
// 마우스 클릭이벤트가 payload에 들어가지 않도록 두번째 파라미터에 추가
export const increaseAsync = createAction(INCREASE_AYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_AYNC, () => undefined);

function* increaseSaga() {
  yield delay(1000); // 1초 기다림
  yield put(increase()); // 증가 액션 디스패치
}
function* decreaseSaga() {
  yield delay(1000); // 1초 기다림
  yield put(decrease()); // 감소 액션 디스패치
}
export function* counterSaga() {
  // takeEvery는 들어오는 모든 액션에 대해 특정 작업 처리
  yield takeEvery(INCREASE_AYNC, increaseSaga);
  // takeLastest는 기존에 진행중이던 작업이 있으면 취소하고 가장 마지막 실행 작업 수행
  yield takeLatest(DECREASE_AYNC, decreaseSaga);
}
// reducer with initial state
const initialState = 0;
const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState,
);
export default counter;
