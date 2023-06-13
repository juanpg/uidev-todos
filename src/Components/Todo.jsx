import * as React from "react"

export default function Todo () {
  const [completed, setCompleted] = React.useState(false);

  const handleCheckboxClick = () => setCompleted(!completed);

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
      <span>Learn React</span>
    </label>
  )
}