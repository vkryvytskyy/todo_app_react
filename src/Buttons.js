import React from 'react'

function Buttons(props) {
  if (props.todos.length) {
    return (
      <div className="buttons">
        <button className="markAll">&#x2714;</button>
        <span>|</span>
        <button className="allItems" onClick={() => props.handleButtons('All')}>All</button>
        <button className="Active" onClick={() => props.handleButtons('Active')}>Active</button>
        <button className="completedItems" onClick={() => props.handleButtons('Completed')}>Completed</button>
      </div>
    );
  }
  return null
}

export default Buttons