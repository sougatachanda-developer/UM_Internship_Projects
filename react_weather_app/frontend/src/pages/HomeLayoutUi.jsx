import React from 'react'
import {APP_TITLE, CREATOR_NAME} from '../utils/config'
import CustomToggle from '../components/CustomToggle'
import WeatherUI from '../components/WeatherUI'
import SearchUi from '../components/SearchUi'
import {useWeatherApi} from '../hooks/useWeatherApi'
import Loader from '../components/Loader'

function HomeLayoutUi() {

  const [city, setCity] = React.useState("London")
  const {data} = useWeatherApi(city);
  const [unit, setUnit] = React.useState("celsius");

  // console.log(data)

  const handleCitySearch = (newCity) => {
    setCity(newCity)
  }

  const handleToggle = (value) => {
    console.log(value);
    setUnit(value);
  }

  return (
    <>
    <h1 className='text-2xl font-bold text-center'>{APP_TITLE}</h1>
      <div className='flex flex-row'>
        <div className='flex flex-col mx-auto bg-white h-170 w-80 shadow-xl my-6 rounded-l-xl bg-gradient-to-br from-blue-600 to-blue-400'>
          {/* Here the weather for the current / searched city will be displayed */}

          <div className='mt-2 mx-30'>
            {/* <TailwindToggle /> */}
            <CustomToggle 
            labels={['°C', '°F']}
            values={['celsius', 'fahrenheit']}
            defaultValue="celsius"
            onToggle={handleToggle}
            />
          </div>
{/* Need to add this instead of directly using the data else will give null error */}
          {data ? <WeatherUI data={data} unit={unit} /> : <Loader />}

        </div>
        <div className='flex mx-auto bg-white h-170 w-180 -ml-80 my-6 rounded-xl border-none bg-gradient-to-br from-blue-400 to-blue-200 shadow-r-xl'>
          {/* Here the forecast / more details for the current / searched city will be displayed */}

          <SearchUi onSearch={handleCitySearch}/>

        </div>
      </div>
      <span className='flex text-3xs text-center ml-305 mb-4 -mt-3 w-screen'>
          Made by {CREATOR_NAME}
      </span>
    </>
  )
}

export default HomeLayoutUi