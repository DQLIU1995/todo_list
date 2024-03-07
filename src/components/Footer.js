import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

const Footer = (props) => {
  const checkAllTodo = props.checkAllTodo;
  const clearAllDone = props.clearAllDone;
  const todos = props.todos 

  const doneCount = todos.filter(todoObj => todoObj.done).length
  const total = todos.length 

  const handleCheckAllTodo = (event) =>{
    checkAllTodo(event.target.checked)
  }

  const handleClearAllDone = () =>{
    clearAllDone()
  }


  return (
    <div className="todo-footer">
      <label>
        <input
          type="checkbox"
          onChange={handleCheckAllTodo}
          checked={doneCount === total && total !== 0 ? true : false}
        />
      </label>
      <span>
        <span>Done{doneCount}</span> / all{total}
      </span>
      <button onClick={handleClearAllDone}>Clear All Done Todos</button>
    </div>
  );
};

Footer.propTypes = {
  checkAllTodo: PropTypes.func.isRequired,
  clearAllDone: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
};

export default Footer;
