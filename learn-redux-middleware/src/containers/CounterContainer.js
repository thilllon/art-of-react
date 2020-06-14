import React, { useCallback } from 'react';
// import { bindActionCreators } from 'redux';
import { connect, useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase as increaseActionCreator, decrease as decreaseActionCreator, increase } from '../modules/counter';

// const CounterContainer = ({ number, increase, decrease }) => {
//   return <Counter number={number} onIncrease={increase} onDecrease={decrease} />;
// };

// type 1 ****************
// // debugger;
// // state: store에 저장된 state
// const mapStateToProps = (state) => {
//   //   debugger;
//   return {
//     number: state.counter.number,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   //   debugger;
//   return {
//     increase: () => {
//       console.info('increase');
//       dispatch(increaseActionCreator());
//     },
//     decrease: () => {
//       console.info('decrease');
//       dispatch(decreaseActionCreator());
//     },
//   };
// };
// const makeContainer = connect(mapStateToProps, mapDispatchToProps);
// const reduxCounterContainer = makeContainer(CounterContainer);
// export default reduxCounterContainer;

// ## type 2 ****************
// export default connect(
//   ({counter}) => ({
//     number: state.counter.number,
//   }),
//   (dispatch) =>
//     bindActionCreators(
//       {
//         increase,
//         decrease,
//       },
//       dispatch,
//     ),
// )(CounterContainer);

// type 3 ****************
// mapDispatchToProps를 단축표현으로 actionCreator 함수이름만 넣으면 내부적으로 함수로 만들어줌
// export default connect((state) => ({ number: state.counter.number }), {
//   increase,
//   decrease,
// })(CounterContainer);

// type 4 ****************
// hooks 사용해서 간단하게 수정
const CounterContainer = () => {
  // const 특정상태 = useSelector(스토어에서 상태 선택(select)하는 함수)
  const number = useSelector((state) => state.counter.number);
  // const 디스패치함수(스토어의 내장함수) = useDispatch();
  const dispatch = useDispatch();

  // const onIncrease = () => dispatch(increaseActionCreator());
  // const onDecrease = () => dispatch(decreaseActionCreator());
  // useCallback 사용
  // CounterComponent 랜더링 될때마다 onIncrease, onDecrease 함수 새로 정의되는걸 방지하기 위해
  // useDispatch는 useCallback과 같이 사용 추천!!
  const onIncrease = useCallback(() => dispatch(increaseActionCreator()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decreaseActionCreator()), [dispatch]);
  return <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />;
};
export default CounterContainer;
