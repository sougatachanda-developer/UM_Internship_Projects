import React from 'react'
import HumidityCard from '../components/HumidityCard'
import WindCard from '../components/WindCard'
import PrecipitationCard from '../components/PrecipitationCard'
import FeelLikeCard from '../components/FeelLikeCard'
import { convertTemperature } from '../utils/convertTemperature'

function WeatherDetailsUi({data, unit}) {

    const {main , wind, clouds} = data;
    const humidity = main.humidity;
    const feels_like = convertTemperature(main.feels_like, unit);
    const wind_speed = wind.speed; // m/s
    const converted_wind_speed = Math.round(wind_speed * 3.6); // km/hr
    const clouds_percentage = clouds.all;
    const precipitation_chance = Math.round(clouds_percentage * (humidity / 100));
  return (
    <>
      {/* Details Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4 sm:mt-4 text-black mx-5">
        
        <HumidityCard humidity={humidity} />
        <WindCard wind_speed={converted_wind_speed}/>
        <PrecipitationCard precipitation={precipitation_chance}/> 
        <FeelLikeCard feellike={feels_like} unit={unit}/>

        
      </div>
    </>
  )
}

export default WeatherDetailsUi