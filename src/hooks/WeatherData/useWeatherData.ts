import { useState, useEffect } from "react";
import { WeatherData, WeatherDataScheme } from "./weatherTypes.js";
import { dataTest } from "../../data/dataTest";

export const useWeatherData = (search: string) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const lang = "fr";
  const days = 3;

  useEffect(() => {
    const controller = new AbortController();

    const fetchWeatherData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${search}&days=${days}&lang=${lang}`,
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "b2516e7d58msh1180e0f041fd0eep1692f2jsnbf7c2f55b92b",
              "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
            },
            signal: controller.signal,
          }
        );

        if (!response.ok) {
          const data = await response.json();

          // No matching location found.
          if (data.error.code === 1006) {
            throw new Error("Ville introuvable, veuillez réessayer.");
          } else {
            throw new Error(
              "Une erreur est survenue lors de la récupération des données météo."
            );
          }
        }

        const data = await response.json();
        const parsedData = WeatherDataScheme.parse(data);

        setWeatherData(parsedData);
        setIsLoading(false);
        setError(null);
      } catch (error: any) {
        if (error.name === "AbortError") {
          console.log("Request was aborted");
        } else {
          console.log(error);
          setError(error.message);
          setIsLoading(false);
        }
      }
    };
    fetchWeatherData();

    return () => controller.abort();
  }, [search]);

  return { weatherData, isLoading, error };
};
