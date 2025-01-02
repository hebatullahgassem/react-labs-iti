import React, { useState } from 'react';

function TodoForm({addTask}){
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(task.trim()){
            addTask(task);
            setTask('');
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder='enter task' required/>
            <button type="submit">Add</button>
        </form>
    );
}

export default TodoForm;