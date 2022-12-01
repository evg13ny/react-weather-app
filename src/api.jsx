const rapidApiKey = '5621750e05msh7bd3f106b43c646p11e8ecjsn7b885dd0947c'
export const WEATHER_API_KEY = '020d156006ceb4ebeec5090abd738b57'

export const geoApiOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': `${rapidApiKey}`,
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo'
export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5'