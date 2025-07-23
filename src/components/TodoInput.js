import React, { useState } from 'react';

function TodoInput({ addTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input.trim());
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter a task"
        style={{ marginRight: 10 }}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoInput;
