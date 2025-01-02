import React from 'react';
import TodoItem from './todoItem';

function TodoList({tasks, deleteTask, toggleComplete}){
    return(
        <ul>
            {tasks.map((task)=>(
                    <TodoItem 
                    key={task.id}
                    task={task} 
                    deleteTask={deleteTask}
                    toggleComplete={toggleComplete}
                    />
                ))}
        </ul>
    );
}

export default TodoList;