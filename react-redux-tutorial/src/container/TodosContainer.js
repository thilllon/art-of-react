import React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Todos from '../components/Todos';
import { changeInput, insert, toggle, remove } from '../modules/todos';

const TodosContainer = ({ input, todos, changeInput, insert, toggle, remove }) => (
  <Todos
    input={input}
    todos={todos}
    onChangeInput={changeInput}
    onInsert={insert}
    onToggle={toggle}
    onRemove={remove}
  />
);
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
export default connect(
  // destructive allocation
  ({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  {
    changeInput,
    insert,
    toggle,
    remove,
  },
)(TodosContainer);
