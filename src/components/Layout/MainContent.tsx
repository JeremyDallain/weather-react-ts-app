import { useState } from "react";
import { useWeatherData } from "../../hooks/WeatherData/useWeatherData.js";
import { SearchCity } from "../SearchCity/SearchCity.js";
import { Loader } from "../Loader/Loader.js";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage.js";
import { CurrentWeather } from "../Current/CurrentWeather.js";
import { Forecast } from "../Forecast/ForecastContainer.js";

const DEFAULT_CITY = "poitiers";

export const MainContent = () => {
  const [search, setSearch] = useState<string>(DEFAULT_CITY);
  const { weatherData, isLoading, error } = useWeatherData(search);

  return (
    <main className="flex-grow">
      <SearchCity onSearch={(searchText) => setSearch(searchText)} />
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!isLoading && !error && weatherData && (
        <>
          <CurrentWeather
            data={weatherData.current}
            location={weatherData.location}
          />
          <hr className="mt-10 w-1/2 m-auto opacity-25" />
          <Forecast forecastDays={weatherData.forecast.forecastday} />
        </>
      )}
    </main>
  );
};
