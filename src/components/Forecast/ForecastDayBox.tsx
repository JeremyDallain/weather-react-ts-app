import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { ForecastDay } from "../../hooks/WeatherData/weatherTypes.js";

interface Props {
  forecastDay: ForecastDay;
  isToday: boolean;
  onChangeDay: (day: ForecastDay) => void;
  isSelected: boolean;
}

export const ForecastDayBox = ({
  forecastDay,
  isToday,
  onChangeDay,
  isSelected,
}: Props) => {
  const formattedDate = format(new Date(forecastDay.date), "EEE d MMM", {
    locale: fr,
  });

  return (
    <>
      <div
        className={` text-gray-800 p-5 m-2 rounded-md flex flex-col items-center max-w-xs w-80 sm:w-full ${
          isSelected ? "bg-gray-50" : "bg-gray-300"
        } cursor-pointer`}
        onClick={() => onChangeDay(forecastDay)}
      >
        <p>{isToday ? "Aujourd'hui" : formattedDate}</p>
        <div className="my-3 flex items-center w-full justify-around">
          <img src={forecastDay.day.condition.icon} />
          <span>
            <span className="text-sm">
              {Math.round(forecastDay.day.mintemp_c)}°
            </span>{" "}
            /{" "}
            <span className="text-md font-medium">
              {Math.round(forecastDay.day.maxtemp_c)}°
            </span>
          </span>
        </div>
        <p>{forecastDay.day.condition.text}</p>
      </div>
    </>
  );
};
