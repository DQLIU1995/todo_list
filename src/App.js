import React, { useState } from 'react';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const todosData = [
    { id: '001', name: 'sleep', done: true },
    { id: '002', name: 'eat', done: true },
    { id: '003', name: 'coding', done: false },
    { id: '004', name: 'eat again', done: false },
  ];

  const [todos, setTodo] = React.useState(todosData);

  const addTodo = (todoObj) => {
    setTodo([todoObj, ...todos]);
  };

  const updateTodo = (id, done) => {
    setTodo((prev) =>
      prev.map((todoObj) =>
        todoObj.id === id ? { ...todoObj, done } : todoObj
      )
    );
  };

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((todoObj) => todoObj.id !== id));
  };

  const checkAllTodo = (done) => {
    setTodo((prev) => prev.map((todoObj) => ({ ...todoObj, done })));
  };

  const clearAllDone = () => {
    setTodo((prev) => prev.filter((todoObj) => !todoObj.done));
  };

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header addTodo={addTodo} />
        <List todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        <Footer
          todos={todos}
          checkAllTodo={checkAllTodo}
          clearAllDone={clearAllDone}
        />
      </div>
    </div>
  );
}
