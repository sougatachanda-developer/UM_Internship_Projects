import React from 'react'

function TodoInput({addTodo}) {

    const [input,setInput] = React.useState ('')
    const handleTodoSubmitBtn = () =>{
          if(input.trim()){
            addTodo(input.trim());
            setInput("");
          }
    
      }
  return (
    <>
        <div className=' w-90 sm:w-130 md:w-155 lg:w-300  flex flex-rows mx-33 my-2 items-center'>
          <input type="text" className='p-4 w-full h-10 bg-gray-200 rounded-lg focus:outline-none' value={input} onChange={(e)=>{setInput(e.target.value)}}/>
          <button className='p-2 w-20 ml-2 bg-blue-500 text-white rounded-lg cursor-pointer' type="button" onClick={handleTodoSubmitBtn}>Add</button>
        </div>
    </>
  )
}

export default TodoInput