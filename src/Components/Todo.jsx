import * as React from "react"

export default function Todo () {
  const [label, setLabel] = React.useState('Learn React')
  const [completed, setCompleted] = React.useState(false);
  const [editing, setEditing] = React.useState(false)

  const handleCheckboxClick = () => setCompleted(!completed);
  const handleEditClick = () => setEditing(!editing);
  const handleUpdateLabel = (e) => setLabel(e.target.value)

  return (
    <div>
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
        {
          editing === true ? (
            <input
              type='text'
              value={label}
              onChange={handleUpdateLabel}
            />
          ) : (
            <span>{label}</span>
          )
        }
      </label>
      <button onClick={handleEditClick}>
        {editing ? 'Save' : 'Edit'}
      </button>
    </div>
  )
}