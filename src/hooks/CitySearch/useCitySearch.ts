import { useState, useEffect } from "react";
import { z } from "zod";

const DEFAULT_MIN_SEARCH_LENGTH = 3;
const DEFAULT_DEBOUNCE_TIMEOUT = 500;

const CityScheme = z.object({
  name: z.string(),
  region: z.string(),
  country: z.string(),
  lat: z.number(),
  lon: z.number(),
});

const CitySearchResultScheme = z.array(CityScheme);

export type City = z.infer<typeof CityScheme>;

export const useCitySearch = (search: string) => {
  const [suggestions, setSuggestions] = useState<City[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchCities = async () => {
      try {
        if (search.length >= DEFAULT_MIN_SEARCH_LENGTH) {
          const response = await fetch(
            `https://weatherapi-com.p.rapidapi.com/search.json?q=${search}`,
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
            throw new Error("Request failed");
          }

          const data = await response.json();

          const parsedData = CitySearchResultScheme.parse(data);

          setSuggestions(parsedData);
        } else {
          setSuggestions([]);
        }
      } catch (error: any) {
        if (error.name === "AbortError") {
          console.log("Request was aborted");
        } else {
          console.log(error);
        }
      }
    };

    const timer = setTimeout(() => {
      fetchCities();
    }, DEFAULT_DEBOUNCE_TIMEOUT);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [search]);

  return { suggestions, setSuggestions };
};
