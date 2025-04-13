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
    {/* Old UI code */}
      {/* <div className='flex flex-row items-center p-6'> 
        <input type='text' placeholder='Search for a city' 
        value={inputItem} onChange={(e) => setInputItem(e.target.value)} 
        className='p-2 rounded-md w-96 bg-gray-100 text-black focus:outline-none' 
        onKeyDown={handleEnterKey}/>

        <button className='p-2 rounded-md bg-purple-500 text-white cursor-pointer ml-2'>Search</button>
      </div> */}

         <div className='flex flex-row w-65 sm:w-107 lg:w-full sm:ml-2 lg:ml-5 sm:my-5 '>
            <input type="text"
            placeholder='Enter a city name'
            value={inputItem} onChange={(e) => setInputItem(e.target.value)}
            onKeyDown={handleEnterKey}
            className='p-2 rounded-md w-140 h-10 bg-gradient-to-tr inset-shadow-md from-blue-500 to-blue-400 text-white focus:outline-none' 
            />
            {/* <button className='p-2 rounded-md h-10 bg-purple-500 ml-4 text-white cursor-pointer'>Search</button> */}
          </div>
    </>
  )
}

export default SearchUi