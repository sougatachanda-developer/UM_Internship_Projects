import axios from 'axios'
import { API_KEY, WEATHER_API_URL } from '../utils/config'

export const getWeatherByCity = async (cityName) => {
    const responseData = await axios.get(WEATHER_API_URL,{
        params: {
            q: cityName,
            appid: API_KEY, 
        },
    });
    // console.log(responseData.data);
    return responseData.data;
}