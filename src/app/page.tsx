'use client';
import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "@/components/Header";
import WeatherForm from "@/components/WeatherForm";
import WeatherDisplay from "@/components/WeatherDisplay";
import theme from "@/styles/theme";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";

interface WeatherData {
  city: string;
  temperature: number;
  description: string;
  icon: string;
}

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    if (city) {
      const fetchWeather = async () => {
        try {
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6db2fb8ea561e6356ed814c241672d1d`);
          const data = response.data;
          setWeatherData({
             city: data.name,
            temperature: data.main.temp,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
          });
        } catch (error) {
          console.error('Error fetching weather data:', error);
          setWeatherData(null);
        }
      };

      fetchWeather();
    }
  }, [city]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container>
        <WeatherForm onCitySubmit={setCity} />
        <WeatherDisplay weatherData={weatherData} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
