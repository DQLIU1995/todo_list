import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import './List.css';

const List = ({updateTodo, deleteTodo, todos}) => {
  return (
    <ul className="todo-main">
      {todos.map((todo) => {
        return (
          <Item
            key={todo.id}
            {...todo}
            todo={todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
};

List.propTypes = {
  updateTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
};

export default List;
