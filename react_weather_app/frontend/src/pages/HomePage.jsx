import React from 'react'
import SearchUi from '../components/SearchUi'
import Loader from '../components/Loader'
import WeatherCard from '../components/WeatherCard'
import {useWeatherApi} from '../hooks/useWeatherApi'

function HomePage() {

    const [city, setCity] = React.useState("London")
    const {data} = useWeatherApi(city);

    const handleHomepageSearch = (newCity) => {
      setCity(newCity)
    }

  return (
    <div className='flex flex-col items-center p-6'>
      <h1 className='text-3xl font-bold mb-4'>Weather App</h1> 
      <SearchUi onSearch={handleHomepageSearch}/>   
      {
        data ? <WeatherCard data={data}/> : <Loader /> 
      }
    </div>
  )
}

export default HomePage