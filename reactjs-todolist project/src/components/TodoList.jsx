import React from 'react'

export default function TodoList() {
    let todos = [
    'Go to the gym',
    'Eat more fruits',
    'Watch Dillon'
  ]

    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => {
                return (
                    <li key ={todoIndex}>{todo}</li>
                )
            })}
        </ul>
  )
}
