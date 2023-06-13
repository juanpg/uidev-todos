import * as React from 'react'
import Todo from './Todo'

export default function TodoList() {
  const [todo, setTodo] = React.useState({
    id: 1,
    label: 'Learn React',
    completed: false
  });

  const handleUpdateTodo = updatedTodo => setTodo(updatedTodo)

  return (
    <ul>
      <Todo
        todo={todo}
        handleUpdateTodo={handleUpdateTodo}
      />
    </ul>
  )
}