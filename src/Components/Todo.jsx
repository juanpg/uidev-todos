import * as React from "react"

export default function Todo ({todo, handleUpdateTodo}) {
  const [editing, setEditing] = React.useState(false)

  const handleCheckboxClick = () => handleUpdateTodo({
    ...todo,
    completed: !todo.completed
  });
  const handleEditClick = () => setEditing(!editing);
  const handleUpdateLabel = (e) => handleUpdateTodo({
    ...todo,
    label: e.target.value
  })

  return (
    <li>
      <label htmlFor="checkbox">
        <div>
          <input 
            type="checkbox" 
            name="checkbox" 
            id="checkbox" 
            checked={todo.completed}
            onChange={handleCheckboxClick}
          />
          <span />
        </div>
        {
          editing === true ? (
            <input
              type='text'
              value={todo.label}
              onChange={handleUpdateLabel}
            />
          ) : (
            <span>{todo.label}</span>
          )
        }
      </label>
      <button onClick={handleEditClick}>
        {editing ? 'Save' : 'Edit'}
      </button>
    </li>
  )
}