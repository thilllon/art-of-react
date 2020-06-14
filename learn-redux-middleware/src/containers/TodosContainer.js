import React, { useCallback } from 'react';
// import { bindActionCreators } from 'redux';
import { connect, useSelector, useDispatch } from 'react-redux';
import Todos from '../components/Todos';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import useActions from '../lib/useActions';

// 리덕스를 쓰면 props를 넘겨주는게 아니라 connect에서 필요한 상태값들을 해당 컴포넌트 코드에서 직접 선택할 수 있음
// 리덕스 안쓰면 props를 고치는 경우 상위 컴포넌트에서 props를 또 넣어줘야해서 두 코드 파일을 건드려야함
// 모든 컴포넌트가 store와 연결되어 있으니까, 컴포넌트 본인이 필요한건 그 코드안에서 모두 해결 가능

// const TodosContainer = (props) => {
//   // console.info(props);  debugger;
//   // App.js에서 TodosContainer에 아무것도 props으로 넘겨주지 않았지만
//   // connect 이용해서 리덕스스토어와 TodosContainer가 연결되었음
//   // TodosContainer는 state와 dispatch를 이제 props로 받게됨
//   // --> connect 함수의 역할

//   const { input, todos, changeInput, insert, toggle, remove } = props;
//   return (
//     <Todos
//       input={input}
//       todos={todos}
//       onChangeInput={changeInput}
//       onInsert={insert}
//       onToggle={toggle}
//       onRemove={remove}
//     />
//   );
// };

// type 1 ********
// debugger;
// state: store에 저장된 state
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

// export default connect(mapStateToProps, mapDispatchToProps);

// type 3 ********
// export default connect(
//   // destructive allocation
//   ({ todos }) => ({
//     input: todos.input,
//     todos: todos.todos,
//   }),
//   {
//     changeInput,
//     insert,
//     toggle,
//     remove,
//   },
// )(TodosContainer);

// type 4 ********
// hooks로 변경
// hooks를 안쓸때는 TodosContainer에 인풋 파라미터들이 있음
// hooks를 쓰면, TodosContainer 안에서 필요한 데이터는 함수 안에서 useSelector로 store에서 바로 가져와서 사용하면됨
// 훨씬 편함
//
// connect 함수를 쓰지 않는 경우 주의점
// 상위 컴포넌트 랜더링시, 현재 컴포넌트 props에 변화 없어도 자동 리랜더링 됨
// 항상 React.memo로 props 변화 없을 시 랜더링 되지 않도록 막아야함
const TodosContainer = React.memo(() => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));

  // const dispatch = useDispatch();
  // const onChangeInput = useCallback((input) => dispatch(changeInput(input)), [dispatch]);
  // const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
  // const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  // const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);

  // useActions안에 이미 useMemo 처리가 되어있음
  const [onChangeInput, onInsert, onToggle, onRemove] = useActions([changeInput, insert, toggle, remove], []);
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
});

// export default React.memo(TodosContainer);
export default TodosContainer;
