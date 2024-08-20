import { Card, CardContent, Typography } from '@mui/material';

interface WeatherData {
  city: string;
  temperature: number;
  description: string;
  icon: string;
}

interface WeatherDisplayProps {
  weatherData: WeatherData | null;
}

const WeatherDisplay = ({ weatherData }: WeatherDisplayProps) => {
  if (!weatherData) {
    return null;
  }

  const iconMap: { [key: string]: string } = {
    // Clear weather
    '01d': 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg',
    '01n': 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-night.svg',
  
    // Few clouds
    '02d': 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day.svg',
    '02n': 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-night.svg',
  
    // Scattered clouds
    '03d': 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day.svg',
    '03n': 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-night.svg',
  
    // Broken clouds
    '04d': 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/cloudy.svg',
    '04n': 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/cloudy.svg',
  
    // Shower rain
    '09d': 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/drizzle.svg',
    '09n': 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/drizzle.svg',
  
    // Rain
    '10d': 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/rain.svg',
    '10n': 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/rain.svg',
  
    // Thunderstorm
    '11d': 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms.svg',
    '11n': 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms.svg',
  
    // Snow
    '13d': 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-snow.svg',
    '13n': 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-night-snow.svg',
  
    // Mist, Haze
    '50d': 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/mist.svg',
    '50n': 'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/mist.svg',
  
  };

  console.log('Weather Icon:', weatherData.icon);
  console.log('Mapped Icon URL:', iconMap[weatherData.icon]);

  const iconUrl = iconMap[weatherData.icon];

  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
      <Typography variant="h4">{weatherData.city}</Typography>
        <Typography variant="h5">{weatherData.temperature}°C</Typography>
        <Typography variant="subtitle1">{weatherData.description}</Typography>
        <img
          src={iconUrl}
          alt="weather icon"
          style={{ width: '100px', height: 'auto' }}
        />
      </CardContent>
    </Card>
  );
};

export default WeatherDisplay;