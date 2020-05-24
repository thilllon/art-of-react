import React from 'react';
const TodoItem = ({ todo, onToggle, onRemove }) => {
  const onClickCheck = () => onToggle(todo.id);
  return (
    <div>
      <input type="checkbox" onClick={onClickCheck} checked={todo.done} readOnly={true} id={`chk_${todo.id}`} />
      <label htmlFor={`chk_${todo.id}`} style={{ display: 'inline-block', width: '220px' }}>
        <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.text}</span>
      </label>
      {/* <button onClick={onRemove}>삭제</button> */}
      <button
        onClick={(e) => {
          console.info(e);
          onRemove(todo.id);
        }}
      >
        삭제
      </button>
    </div>
  );
};

const Todos = ({
  input, // 인풋에 입력되는 텍스트
  todos, // 할일 목록있는 객체
  onChangeInput, // 할일 추가후 인풋 초기화
  onInsert, // 할일 추가
  onToggle, // 체크 박스
  onRemove, // 할일 삭제
}) => {
  // debugger;
  const onSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    onInsert(input);
    console.info(input);
    // debugger;
    onChangeInput(''); // 인풋 초기화
  };
  const onChange = (e) => {
    console.info(e.target.value);
    onChangeInput(e.target.value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} type="text" />
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
};

export default Todos;
