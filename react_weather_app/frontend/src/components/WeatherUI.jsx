import React from 'react'
import { formatTimeDate } from '../utils/formatTimeDate'
import { convertTemperature } from '../utils/convertTemperature'

function WeatherUI({data, unit}) {

    const {name, main, weather, sys, dt} = data;
    const {temp} = main;

    //const temp_convert = Math.round(temp - 273.15); //Kelvin --> Celsius
    const converted_temp = convertTemperature(temp, unit);
    const main_description = weather[0].main;
    const icon = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    const {day, month} = formatTimeDate(dt);
  return (
    <>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-col ml-10 mt-25 text-left'>
              <div className='text-xl font-semibold text-space-3'>{name}, {sys.country}</div>
              <div className='text-xs font-normal mt-1'>Today {day} {month}</div>
        </div>

        {/* <div>Current Time</div> */}
       </div>

     <div className='text-7xl font-bold text-space-3 mt-14 ml-17'>{converted_temp}°</div>
     <div className='flex text-lg font-light text-space-3 mt-2 ml-16'>
        <span><img src={icon} className='w-9 h-9 item-center -mt-1'/></span> {main_description}
     </div>  
    </>
  )
}

export default WeatherUI