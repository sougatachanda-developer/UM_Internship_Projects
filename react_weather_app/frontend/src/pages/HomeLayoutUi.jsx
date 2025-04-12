import React from 'react'
import {APP_TITLE, CREATOR_NAME} from '../utils/config'
import CustomToggle from '../components/CustomToggle'
import WeatherUI from '../components/WeatherUI'
import SearchUi from '../components/SearchUi'
import {useWeatherApi} from '../hooks/useWeatherApi'
import Loader from '../components/Loader'
import WeatherDetailsUi from './WeatherDetailsUi'

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
      <div className='flex flex-col sm:flex-row'>
        <div className='flex flex-col mx-auto bg-white h-150 sm:h-170 w-96 sm:w-80 shadow-xl my-6 rounded-xl sm:rounded-l-xl bg-gradient-to-br from-blue-600 to-blue-400'>
          {/* Here the weather for the current / searched city will be displayed */}

          <div className='mt-2 flex sm:mx-auto'> {/* mx-30 */}
          <div className='block ml-2 sm:hidden'> 
          <SearchUi onSearch={handleCitySearch}/>
          </div>
            {/* <TailwindToggle /> */}
            <div className='ml-auto mr-2 mt-2 sm:mx-auto'>
            <CustomToggle 
            labels={['°C', '°F']}
            values={['celsius', 'fahrenheit']}
            defaultValue="celsius"
            onToggle={handleToggle}
            />
            </div>
          </div>
{/* Need to add this instead of directly using the data else will give null error */}
          {data ? <WeatherUI data={data} unit={unit} /> : <Loader />}

        </div>
        <div className='flex flex-col mx-auto bg-white h-74 sm:h-170 w-96 sm:w-180 ml-auto -my-80 sm:-ml-80 sm:my-6 rounded-xl border-none bg-gradient-to-br from-blue-400 to-blue-200 shadow-r-xl sm:w-180'>
          {/* Here the forecast / more details for the current / searched city will be displayed */}
          <div className='hidden sm:block'> 
          <SearchUi onSearch={handleCitySearch}/>
          </div>

          <div className='text-2xs text-start mt-2 mx-6 font-semibold hidden sm:block'>More Details of today's weather</div>
          {data ? <WeatherDetailsUi data={data} unit={unit}/> : <Loader /> }
        </div>
      </div>
      <span className='flex text-3xs text-center ml-305 mb-4 -mt-3 w-screen'>
          Made by {CREATOR_NAME}
      </span>
    </>
  )
}

export default HomeLayoutUi