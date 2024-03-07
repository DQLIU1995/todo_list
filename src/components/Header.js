import React from 'react'
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid'
import './Header.css'

const Header = (props) => {
  const addTodo = props.addTodo

  const handleKeyUp = (event)=>{
    const {keyCode,target} = event
    if(keyCode !== 13) return 
    if(target.value.trim() ===''){
      alert('Please Enter A Valid Todo')
      return
    }
    const todoObj = {id:nanoid(),name:target.value,done:false}

    addTodo(todoObj)
  }


  return (
    <div className="todo-header">
      <input onKeyUp={handleKeyUp} type="text" placeholder="Please Enter Your Todo Name"/>
    </div>)

}; 

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header; 