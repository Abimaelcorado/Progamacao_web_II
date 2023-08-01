import React, { useEffect, useState, useCallback } from "react";
import { FiSearch } from "react-icons/fi";

function ApiTemperatura() {
  const [city, setCity] = useState("Corrente");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const apiKey = "e73dd952dc2de06c8589afa6c3b6b58f";

  const fetchWeatherData = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      if (response.ok) {
        setWeatherData(data);
        setError(null);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Erro ao obter dados meteorológicos:", error.message);
      setWeatherData(null);
      setError("Cidade não encontrada.");
    }
  }, [city]);

  useEffect(() => {
    fetchWeatherData();
  }, [fetchWeatherData]);

  const handleSearchClick = () => {
    if (city.trim() !== "") {
      fetchWeatherData();
    } else {
      setError("Digite o nome da cidade.");
    }
  };

  return (
    <>
      <h2>Previsão do tempo</h2>
      <label htmlFor="cityInput">Cidade:</label>
      <input
        id="cityInput"
        placeholder="Digite o nome da cidade"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="button" onClick={handleSearchClick}>
        <FiSearch size={16} color="#FFF" />Pesquisar
      </button>
      {weatherData ? (
        <div>
          <p>Cidade pesquisada: {city}</p>
          <p>País: {weatherData.sys.country}</p>
          <p>Máxima: {weatherData.main.temp_max}°C</p>
          <p>Mínima: {weatherData.main.temp_min}°C</p>
          <p>Temperatura: {weatherData.main.temp}°C</p>
          <p>Umidade: {weatherData.main.humidity}%</p>
          <p>Descrição: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>{error || "Aguardando dados meteorológicos..."}</p>
      )}
    </>
  );
}

export default ApiTemperatura;
