import React, { useState } from 'react'

function TaskList({todos, toggleTaskCompletion, editTodo, deleteTodo}) {

    const [edit,setEdit] = useState(false);
    const [newTaskName,setNewTaskName] = useState('');
    const [editTaskId, setEditTaskId] = useState('');

    const handleDone=(taskId)=> {  
      toggleTaskCompletion(taskId)
    };

    const handleEdit = (taskName, taskId) =>{
        setNewTaskName(taskName);
        setEditTaskId(taskId);
        console.log(edit);
        setEdit(true);
    }

    const handleSaveEdit = (taskId) =>{
        editTodo(taskId,newTaskName);
        setEdit(false);
    }

  return (
    <>
     <div className='flex flex-col w-90 sm:w-130 md:w-155 lg:w-300 mx-33 my-2 bg-gray-300 rounded-sm'>
        <p>Task List</p>
          {/* Task Cards */}
        { todos.length > 0 ? ( 
        todos.map((todo)=>(
        <div className='flex flex-row mt-2 mx-4 justify-between outline-none my-4' key={todo.id}>
            <input type="checkbox" name="complete" className=' ' onChange={()=>handleDone(todo.id)}/>

            {
                edit && todo.id === editTaskId ? 
                <input type="text" key={todo.id} className='w-full ml-3 bg-gray-100 p-1 rounded-sm' value={newTaskName} onChange={(e)=>{setNewTaskName(e.target.value)}} />
                : 
                <div className='w-full ml-3 bg-gray-100 p-1 rounded-sm'>
                 <p className={`pl-2 ${todo.completed ? 'line-through' : ''} `}>{todo.task}</p>
                </div>
                
            }

            {/* <div className='w-full ml-3 bg-gray-100 p-1 rounded-sm'>
                {
                    edit ? <input type="text" className='pl-2 outline-none' value={newTaskName} onChange={(e)=>{setNewTaskName(e.target.value)}}/> 
                    : <p className={`pl-2 ${todo.completed ? 'line-through' : ''} `}>{todo.task}</p>
                }
                
            </div> */}

            {
                edit && todo.id === editTaskId ? 
                <div className='pl-2' onClick={()=>handleSaveEdit(todo.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="size-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>

                </div>
                : 
                <div className='pl-2' onClick={()=>handleEdit(todo.task, todo.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                </div>
            }
            <div className='pl-1' onClick={()=>deleteTodo(todo.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="size-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
            </div>
        </div>

        ))
    ) : 'No Task yet.. Add some task!'}

        
     </div>
    </>
  )
}

export default TaskList