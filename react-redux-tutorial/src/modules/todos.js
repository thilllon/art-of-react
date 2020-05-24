// 액션 / 액션 생성함수(내보내기) / 초기 상태 / 리듀서(내보내기)

// 액션 정의
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경
const INSERT = 'todos/INSERT'; // todo 등록
const TOGGLE = 'todos/TOGGLE'; // todo 체크/해제
const REMOVE = 'todos/REMOVE'; // todo 제거

// 액션 생성함수
let id = 3;

// export const changeInput = (input) => ({ input, type: CHANGE_INPUT });
export const changeInput = (input) => ({ type: CHANGE_INPUT, input });
export const insert = (text) => ({
  type: INSERT,
  todo: {
    id: id++,
    text: text,
    done: false,
  },
});
export const toggle = (id) => ({ type: TOGGLE, id });
export const remove = (id) => ({ type: REMOVE, id });

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
function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((elem) => (elem.id === action.id ? { ...elem, done: !elem.done } : elem)),
      };
    case REMOVE:
      const newTodo = state.todos.filter((elem) => elem.id !== action.id);
      console.info(state.todos);
      console.info(newTodo);

      return {
        ...state,
        todos: newTodo,
      };
    default:
      return state;
  }
}

// 리듀서는 default로 export
export default todos;
