import React from 'react'
import { useSelector } from 'react-redux'

function DisplayTodos() {
    const todos=useSelector(state => state.todos)
    console.log(todos,"todos");
  return (
    <>
    <div>Todos</div>
    <h1>{todos.map((item)=>(
        item.text
    ))}</h1>
  
    </>
  )
}

export default DisplayTodos