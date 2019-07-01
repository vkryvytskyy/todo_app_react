import React from "react"

function TodoItem(props) {

    return (
        <div
            hidden={props.item.hidden}  
            className='container'
        >
            <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}
                hidden={props.item.hidden}
            />
            <p
                className={props.item.completed ? "completed" : null}
                hidden={props.item.hidden}
            >
                {props.item.text}
            </p>
            <button
                className='delete'
                onClick={() => props.handleDelete(props.item)}
                hidden={props.item.hidden}
            >
                -
            </button>
        </div>
        </div>
            
    )
}

export default TodoItem