import { z } from "zod";

const LocationScheme = z.object({
  name: z.string(),
  region: z.string(),
  country: z.string(),
  lat: z.number(),
  lon: z.number(),
});

const CurrentScheme = z.object({
  temp_c: z.number(),
  condition: z.object({
    text: z.string(),
    icon: z.string(),
  }),
  wind_kph: z.number(),
  wind_degree: z.number(),
  humidity: z.number(),
});

const HourScheme = z.object({
  time: z.string(),
  temp_c: z.number(),
  condition: z.object({
    text: z.string(),
    icon: z.string(),
  }),
  wind_kph: z.number(),
  wind_degree: z.number(),
  humidity: z.number(),
});

const DayScheme = z.object({
  maxtemp_c: z.number(),
  mintemp_c: z.number(),
  avgtemp_c: z.number(),
  condition: z.object({
    text: z.string(),
    icon: z.string(),
  }),
});

const ForecastDayScheme = z.object({
  date: z.string(),
  day: DayScheme,
  hour: z.array(HourScheme),
});

export const WeatherDataScheme = z.object({
  location: LocationScheme,
  current: CurrentScheme,
  forecast: z.object({
    forecastday: z.array(ForecastDayScheme),
  }),
});

export type Current = z.infer<typeof CurrentScheme>;
export type LocationInfo = z.infer<typeof LocationScheme>;
export type HourReport = z.infer<typeof HourScheme>;
export type DayReport = z.infer<typeof DayScheme>;
export type ForecastDay = z.infer<typeof ForecastDayScheme>;
export type WeatherData = z.infer<typeof WeatherDataScheme>;