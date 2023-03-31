import { format } from "date-fns";
import { ForecastDay } from "../../hooks/WeatherData/weatherTypes.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface Props {
  hours: ForecastDay["hour"];
  day: string;
}

export const LineChart = ({ hours, day }: Props) => {

  const data = {
    labels: hours.map((hour) => format(new Date(hour.time), "H'h'")),
    datasets: [
      {
        label: "",
        data: hours.map((hour) => hour.temp_c),
        fill: true,
        borderColor: "#0278CA",
        tension: 0.2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },
      title: {
        text: `Prévisions de température pour ${day} (par heure)`,
        display: true,
        font: {
          size: 15,
        },
        color: "#0278CA",
        padding: {
          bottom: 10,
        },
      },
      tooltip: {
        displayColors: false,
        callbacks: {
          label: function (context: any) {
            const dataset = context.chart.data.datasets[context.datasetIndex];
            const temperature = dataset.data[context.dataIndex];
            return temperature + "°";
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: function (value: any) {
            return value + "°";
          },
        },
      },
    },
    layout: {
      padding: {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20,
      },
    },
  };

  return <Line data={data} options={options} />;
};
