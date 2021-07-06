import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease, setDiff } from '../modules/counter';

// ********************************
// ********************************
// function CounterContainer({ number, diff, onIncrease, onDecrease, onSetDiff }) {
//   return (
//     <Counter
//       // 상태와
//       number={number}
//       diff={diff}
//       // 액션을 디스패치 하는 함수들을 props로 넣어줍니다.
//       onIncrease={onIncrease}
//       onDecrease={onDecrease}
//       onSetDiff={onSetDiff}
//     />
//   );
// }

// // mapStateToProps 는 리덕스 스토어의 상태를 조회해서 어떤 것들을 props 로 넣어줄지 정의합니다.
// // 현재 리덕스 상태를 파라미터로 받아옵니다.
// const mapStateToProps = (state) => ({
//   number: state.counter.number,
//   diff: state.counter.diff,
// });

// // mapDispatchToProps 는 액션을 디스패치하는 함수를 만들어서 props로 넣어줍니다.
// // dispatch 를 파라미터로 받아옵니다.
// const mapDispatchToProps = (dispatch) => ({
//   onIncrease: () => dispatch(increase()),
//   onDecrease: () => dispatch(decrease()),
//   onSetDiff: (diff) => dispatch(setDiff(diff)),
// });

// ********************************
// ********************************

function CounterContainer({ number, diff, increase, decrease, setDiff }) {
  return (
    <Counter
      // 상태와
      number={number}
      diff={diff}
      // 액션을 디스패치 하는 함수들을 props로 넣어줍니다.
      onIncrease={increase}
      onDecrease={decrease}
      onSetDiff={setDiff}
    />
  );
}

// mapStateToProps 는 리덕스 스토어의 상태를 조회해서 어떤 것들을 props 로 넣어줄지 정의합니다.
// 현재 리덕스 상태를 파라미터로 받아옵니다.
const mapStateToProps = (state) => ({
  number: state.counter.number,
  diff: state.counter.diff,
});

// mapDispatchToProps 는 액션을 디스패치하는 함수를 만들어서 props로 넣어줍니다.
// dispatch 를 파라미터로 받아옵니다.
const mapDispatchToProps = (dispatch) =>
  // bindActionCreators 를 사용하면, 자동으로 액션 생성 함수를 dispatch 가 감싼 상태로 호출 할 수 있습니다.
  bindActionCreators(
    {
      increase,
      decrease,
      setDiff,
    },
    dispatch
  );

// ********************************
// ********************************

// connect 함수에는 mapStateToProps, mapDispatchToProps 를 인자로 넣어주세요.
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

/* 위 코드는 다음과 동일합니다.
  const enhance = connect(mapStateToProps, mapDispatchToProps);
  export defualt enhance(CounterContainer);
*/
