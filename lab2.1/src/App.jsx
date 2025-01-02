import React, {useState} from 'react';
import TodoForm from './components/todoForm';
import TodoList from './components/todoList';
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, {id: Date.now(), text: task, completed: false}]);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? {...task, completed: !task.completed} : task
      )
    )
  }

  return (
    <>
      <div>
        <h1>Todo-App</h1>
        <TodoForm addTask={addTask}/>
        <TodoList tasks={tasks} deleteTask={deleteTask} toggleComplete={toggleComplete}/>
      </div>
    </>
  )
}

export default App
