import React from 'react'
import {APP_TITLE, CREATOR_NAME} from '../utils/config'
function HomeLayoutUi() {

  return (
    <>
    <h1 className='text-2xl font-bold text-center'>{APP_TITLE}</h1>
      <div className='flex flex-row'>
        <div className='flex flex-col items-center mx-auto bg-white h-170 w-80 shadow-xl my-6 rounded-l-xl bg-gradient-to-br from-blue-600 to-blue-400'>
          {/* Here the weather for the current / searched city will be displayed */}

          <div className='mt-2'>Celcius-Farenheit</div>
          <div className='flex flex-row'>
            <div className='flex flex-col'>
              <div>City Name</div>
              <div>Current Date</div>
            </div>
            <div>Current Time</div>
          </div>

          <div>Temperature</div>
          <div>Type(Sunny/Cloudy)</div>

        </div>
        <div className='flex mx-auto bg-white h-170 w-180 -ml-80 my-6 rounded-xl border-none bg-gradient-to-br from-blue-400 to-blue-200 shadow-r-xl'>
          {/* Here the forecast / more details for the current / searched city will be displayed */}

          <div className='ml-10 my-5 flex flex-row'>
            <input type="text"
            className='p-2 rounded-md w-140 h-10 bg-gradient-to-tr inset-shadow-md from-blue-500 to-blue-400 text-white focus:outline-none' 
            />
            <button className='p-2 rounded-md h-10 bg-purple-500 ml-4 text-white cursor-pointer'>Search</button>
          </div>

        </div>
      </div>
      <span className='flex text-3xs text-center ml-305 mb-4 -mt-3 w-screen'>
          Made by {CREATOR_NAME}
      </span>
    </>
  )
}

export default HomeLayoutUi