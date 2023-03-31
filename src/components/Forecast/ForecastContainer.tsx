import { useState } from "react";
import { ForecastDay } from "../../hooks/WeatherData/weatherTypes.js";
import { ForecastDayBox } from "./ForecastDayBox.js";
import { ForecastHourChart } from "./ForecastHourChart.js";

interface Props {
  forecastDays: ForecastDay[];
}

export const Forecast = ({ forecastDays }: Props) => {
  const [selectedDay, setselectedDay] = useState<ForecastDay>(forecastDays[0]);


  const onChangeDay = (day: ForecastDay) => {
    setselectedDay(day);
  };

  return (
    <section className="my-20">
      <h2 className="text-3xl font-medium mb-5 text-center">Prévisions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 justify-items-center">
        {forecastDays.map((forecastDay, index) => (
          <ForecastDayBox
            isToday={index === 0}
            key={index}
            forecastDay={forecastDay}
            onChangeDay={onChangeDay}
            isSelected={selectedDay === forecastDay}
          />
        ))}
      </div>
      <ForecastHourChart selectedDay={selectedDay} />
    </section>
  );
};
