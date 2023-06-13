import * as React from "react"

export default function Todo () {
  const [label, setLabel] = React.useState('Learn React')
  const [completed, setCompleted] = React.useState(false);
  const [editing, setEditing] = React.useState(false)

  const handleCheckboxClick = () => setCompleted(!completed);
  const handleEditClick = () => setEditing(!editing);

  return (
    <label htmlFor="checkbox">
      <div>
        <input 
          type="checkbox" 
          name="checkbox" 
          id="checkbox" 
          checked={completed}
          onChange={handleCheckboxClick}
        />
        <span />
      </div>
      <span>{label}</span>
      <button onClick={handleEditClick}>
        {editing ? 'Save' : 'Edit'}
      </button>
    </label>
  )
}