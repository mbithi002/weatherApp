import { useEffect, useState } from 'react';

const useWeatherInfo = (city) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            const apiKey = '95354b85ef7c5cc327816092c2bbb28e';
            const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchWeatherData();
    }, [city]);

    return { data, loading, error };
};

export default useWeatherInfo;
