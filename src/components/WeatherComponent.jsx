import React, { useState } from 'react';
import useWeatherInfo from '../hooks/index';

const WeatherComponent = () => {
    const [city, setCity] = useState('Nairobi');
    const { data, loading, error } = useWeatherInfo(city);

    const handleSearch = (e) => {
        e.preventDefault();
        const form = e.target;
        const city = form.elements.city.value;
        setCity(city);
    };

    return (
        <div className="">
            <div className="container weather mx-auto mt-12">
                <div className="flex justify-center">
                    <div className="w-auto my-auto max-w-md bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
                        <h3 className="text-3xl font-bold text-center text-white mb-6">Weather App</h3>
                        <form onSubmit={handleSearch} className="mb-6">
                            <div className="flex">
                                <input
                                    type="text"
                                    name="city"
                                    className="flex-1 p-2 border-none rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                                    placeholder="Enter city name"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="p-2 bg-indigo-700 text-white rounded-r-lg hover:bg-indigo-800 focus:ring-2 focus:ring-indigo-300 transition duration-300"
                                >
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </form>
                        {loading && (
                            <p className="text-center text-white animate-pulse">
                                <i className="fas fa-spinner fa-spin"></i> Loading...
                            </p>
                        )}
                        {error && (
                            <p className="text-center text-red-400 animate-bounce">
                                <i className="fas fa-exclamation-triangle"></i> Error: {error.message}
                            </p>
                        )}
                        {data && (
                            <div className="text-center text-white">
                                <h4 className="text-2xl font-semibold">{data.name}</h4>
                                <p className="text-xl">
                                    <i className="fas fa-temperature-high"></i> {Math.round(data.main.temp - 273.15)}°C
                                </p>
                                <p className="text-lg">
                                    <i className="fas fa-cloud"></i> {data.weather[0].description}
                                </p>
                                <p className="text-lg">
                                    <i className="fas fa-tint"></i> {data.main.humidity}%
                                </p>
                                <p className="text-lg">
                                    <i className="fas fa-wind"></i> {data.wind.speed} m/s
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="flex justify-center fixed bottom-5 flex-col content-center w-full github">
                <button className="animate-bounce bg-gray-600 text-center mx-auto text-white p-3 rounded-lg"><a href="https://github.com/mbithi002/weatherApp" target='_blank'><i class="fa-brands fa-github mx-2"></i>Open Github repo</a></button>
            </div>
        </div>
    );
};

export default WeatherComponent;
