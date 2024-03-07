import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Item.css';

const Item = ({ updateTodo, deleteTodo, todo }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleCheckboxChange = (event) =>{
    updateTodo(todo.id, event.target.checked)
  }
  return (
    <li
      style={{ backgroundColor: isHovering ? '#ddd' : 'white' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <label>
        <input type="checkbox" checked={todo.done} onChange={handleCheckboxChange} />
        <span>{todo.name}</span>
      </label>
      <button
        onClick={handleDelete}
        className="btn btn-danger"
        style={{ display: isHovering ? 'block' : 'none' }}
      >
        删除
      </button>
    </li>
  );
};

Item.propTypes = {
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
};

export default Item;
