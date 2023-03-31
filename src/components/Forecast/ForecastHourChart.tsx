import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { ForecastDay } from "../../hooks/WeatherData/weatherTypes.js";
import { LineChart } from "./LineChart.js";

interface Props {
  selectedDay: ForecastDay;
}

export const ForecastHourChart = ({ selectedDay: { date, hour } }: Props) => {
  let formattedDate = "aujourd'hui";
  if (date !== format(new Date(), "yyyy-MM-dd")) {
    formattedDate = format(new Date(date), "'le 'EEEE d MMM", { locale: fr });
  }

  return (
    <div className="bg-gray-50 h-72 rounded-md m-1 md:m-1">
      <LineChart hours={hour} day={formattedDate} />
    </div>
  );
};
