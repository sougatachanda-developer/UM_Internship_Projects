import React from 'react'

function WeatherCard({data}) {

    const {name, main, weather} = data;
  return (
    <>
     <div className='bg-white bg-opacity-20 p-6 rounded shadow-lg text-center w-80 text-black'>
        <h2 className='text-xl font-bold'>{name}</h2>
        <p className='text-4xl font-light'>{Math.round(main.temp)/10}°C</p>
        <p className='capitalize'>{weather[0].description}</p>
     </div>
    </>
  )
}

export default WeatherCard