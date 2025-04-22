import React, { useEffect, useState } from 'react'
import TaskList from './components/TaskList'
import TodoInput from './components/TodoInput'

function App() {

  const [todos,setTodos] = useState([])

  useEffect(()=>{
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || []
    if(savedTodos){
    setTodos(savedTodos);
    }
  },[])

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  const addTodo = (taskName) =>{
      const newTodoTask = {
        id: Math.random(1-100)*10,
        task: taskName,
        completed:false
      };

      setTodos([...todos,newTodoTask]);
      
  }

  const toggleTaskCompletion = (taskId) =>{
    //console.log(taskId);
    setTodos(
      todos.map((todo)=>(
        todo.id === taskId ? {...todo, completed: !todo.completed} : todo
      ))
    )
  }

  const editTodo = (taskId, taskName) =>{
    setTodos(
      todos.map((todo)=>(
        todo.id === taskId ? {...todo, task: taskName} : todo
      ))
    )
  }

  const deleteTodo = (taskId) =>{
    const updatedTodo = todos.filter((todo)=> todo.id !== taskId);
    setTodos(updatedTodo);
  }

  
  return (
    <>
      <div className='flex flex-col bg-gray-400 w-screen h-screen'>
        <p className='flex justify-center items-center mt-2 text-lg font-bold'>Todo App</p>
        <TodoInput addTodo={addTodo} />

        {/* Section where all the tasks will be displayed */}
        <TaskList todos={todos} toggleTaskCompletion={toggleTaskCompletion} editTodo={editTodo} deleteTodo={deleteTodo} />

        <p className='flex justify-center items-center mt-2 text-sm font-bold'>Made by Sougata</p>
      </div>
    </>
  )
}

export default App
