// 리덕스 모듈에서 짜야하는거 4가지
// ******************************
// 액션타입
// 액션 생성함수(나중에 디스패치되는 거)
// 초기 상태
// 리듀서
// ******************************

// 액션타입
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 초기 상태
const initialState = {
  number: 0,
};

// 리듀서
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return { ...state, number: state.number + 1 };
    case DECREASE:
      return { ...state, number: state.number - 1 };
    default:
      return { ...state };
  }
}

// export const counter;
export default counter;
