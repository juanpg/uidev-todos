export default function Todo () {
  return (
    <label htmlFor="checkbox">
      <div>
        <input 
          type="checkbox" 
          name="checkbox" 
          id="checkbox" 
        />
        <span />
      </div>
      <span>Learn React</span>
    </label>
  )
}