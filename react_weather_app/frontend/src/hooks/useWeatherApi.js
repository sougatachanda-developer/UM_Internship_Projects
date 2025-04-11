import React, {useEffect, useState} from 'react'
import { getWeatherByCity } from '../services/weatherApi';

export const useWeatherApi = (city) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        if(!city) return; 
        const fetchData = async () => {
            setLoading(true);
            try{
                const weatherData = await getWeatherByCity(city);
                setData(weatherData);
            }catch(err){
                console.error(err);
            }finally{
                setLoading(true);
            }
        };
        fetchData();
    }, [city]);

    return {
        loading,
        data
    };
};