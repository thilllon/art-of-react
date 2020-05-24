import { createAction, handleActions } from 'redux-actions';

// 액션 / 액션 생성함수(내보내기) / 초기 상태 / 리듀서(내보내기)

// 액션 정의
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경
const INSERT = 'todos/INSERT'; // todo 등록
const TOGGLE = 'todos/TOGGLE'; // todo 체크/해제
const REMOVE = 'todos/REMOVE'; // todo 제거

// 액션 생성함수
let id = 3;

// export const changeInput = (input) => ({ type: CHANGE_INPUT, input });
// export const insert = (text) => ({
//   type: INSERT,
//   todo: {
//     id: id++,
//     text: text,
//     done: false,
//   },
// });
// export const toggle = (id) => ({ type: TOGGLE, id });
// export const remove = (id) => ({ type: REMOVE, id });

export const changeInput = createAction(CHANGE_INPUT, (input) => input);
export const insert = createAction(INSERT, (text) => ({ id: id++, text: text, done: false }));
export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

// 초기 상태
const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초',
      done: true,
    },
    {
      id: 2,
      text: '리덕스 사용',
      done: false,
    },
  ],
};
// 리듀서: state + action -> new state
// function todos(state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_INPUT:
//       return {
//         ...state,
//         input: action.input,
//       };
//     case INSERT:
//       return {
//         ...state,
//         todos: state.todos.concat(action.todo),
//       };
//     case TOGGLE:
//       return {
//         ...state,
//         todos: state.todos.map((elem) => (elem.id === action.id ? { ...elem, done: !elem.done } : elem)),
//       };
//     case REMOVE:
//       const newTodo = state.todos.filter((elem) => elem.id !== action.id);
//       console.info(state.todos);
//       console.info(newTodo);

//       return {
//         ...state,
//         todos: newTodo,
//       };
//     default:
//       return state;
//   }
// }

// react-actions 사용하는 경우
// 액션생성함수에 파라미터로 들어가는건 전부 action.payload에 담김
// action.todos, action.id 이런건 없고, action.type, action.payload 두개로 나뉨

// const todos = handleActions({
//   [CHANGE_INPUT]: (state, action) => ({ ...state, input: action.payload }),
//   [INSERT]: (state, action) => ({ ...state, todos: state.todos.concat(action.payload) }),
//   [TOGGLE]: (state, action) => ({ ...state, todos: state.todos.map((todo) => (todo.id === action.payload ? { ...todo, done: !todo.done } : todo)) }),
//   [REMOVE]: (state, action) => ({ ...state, todos: state.todos.filter((todo) => todo.id !== action.payload) }),
// });

// 모든 액션생성함수가 action.payload를 쓰는 경우
// 액션생성함수가 파라미터로 어떤 값을 받는지 알기 어려우므로 desctructive alloc 사용
const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: inputText }) => ({ ...state, input: inputText }),
    [INSERT]: (state, { payload: todo }) => ({ ...state, todos: state.todos.concat(todo) }),
    [TOGGLE]: (state, { payload: id }) => ({ ...state, todos: state.todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)) }),
    [REMOVE]: (state, { payload: id }) => ({ ...state, todos: state.todos.filter((todo) => todo.id !== id) }),
  },
  initialState,
);

// 리듀서는 default로 export
export default todos;
