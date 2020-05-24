import React from 'react';
import CounterContainer from './container/CounterContainer.js';
import TodosContainer from './container/TodosContainer.js';
const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
};

export default App;
