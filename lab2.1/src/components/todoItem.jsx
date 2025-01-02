import React from 'react';

function TodoItem({task, deleteTask, toggleComplete}){
    return(
        <li style={{textDecoration: task.completed ? 'line-through' : 'none'}}>
            {task.text}
            <button onClick={() => toggleComplete(task.id)}>mark as done</button>
            <button onClick={() => deleteTask(task.id)}>delete</button>
        </li>
    );
}

export default TodoItem;