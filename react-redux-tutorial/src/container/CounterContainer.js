import React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase as increaseActionCreator, decrease as decreaseActionCreator } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return <Counter number={number} onIncrease={increase} onDecrease={decrease} />;
};
// ******** type 1 ********
// debugger;
// state: store에 저장된 state
const mapStateToProps = (state) => {
  //   debugger;
  return {
    number: state.counter.number,
  };
};
const mapDispatchToProps = (dispatch) => {
  //   debugger;
  return {
    increase: () => {
      console.info('increase');
      dispatch(increaseActionCreator());
    },
    decrease: () => {
      console.info('decrease');
      dispatch(decreaseActionCreator());
    },
  };
};
const makeContainer = connect(mapStateToProps, mapDispatchToProps);
const reduxCounterContainer = makeContainer(CounterContainer);
export default reduxCounterContainer;

// ## type 2 **********
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

// type 3 ********************
// mapDispatchToProps를 단축표현으로 actionCreator 함수이름만 넣으면 내부적으로 함수로 만들어줌
// export default connect((state) => ({ number: state.counter.number }), {
//   increase,
//   decrease,
// })(CounterContainer);
