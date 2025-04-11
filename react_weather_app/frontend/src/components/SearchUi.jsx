import React from 'react'

function SearchUi({onSearch}) {

    const [inputItem, setInputItem] = React.useState("")
    const handleSearch = () => {
      if(inputItem.trim()) {
        onSearch(inputItem);
        setInputItem("");
      }
    }

    const handleEnterKey = (e) => {
        if (e.key === "Enter") {
          handleSearch();
        }
      };

  return (
    <>
      <div className='flex flex-row items-center p-6'> 
        <input type='text' placeholder='Search for a city' 
        value={inputItem} onChange={(e) => setInputItem(e.target.value)} 
        className='p-2 rounded-md w-96 bg-gray-100 text-black focus:outline-none' 
        onKeyDown={handleEnterKey}/>

        <button className='p-2 rounded-md bg-purple-500 text-white cursor-pointer ml-2'>Search</button>
      </div>
    </>
  )
}

export default SearchUi