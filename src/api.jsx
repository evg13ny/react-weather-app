const rapidApiKey = 'put your GeoDB key here'
export const WEATHER_API_KEY = 'put your OpenWeatherMap key here'

export const geoApiOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': `${rapidApiKey}`,
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo'
export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5'