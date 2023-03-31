import { ImInfo } from "react-icons/im";
import { Current, LocationInfo } from "../../hooks/WeatherData/weatherTypes.js";
import { WindArrow } from "../WindArrow/WindArrow.js";

interface Props {
  data: Current;
  location: LocationInfo;
}

export const CurrentWeather = ({
  data: { condition, temp_c, wind_kph, wind_degree },
  location: { name, region, country, lat, lon },
}: Props) => {
  return (
    <section>
      <div className="grid grid-cols-2 md:grid-cols-3 items-center gap-x-6 h-96">
        <div className="text-center">
          <span className="text-6xl">{temp_c}°</span>
        </div>
        <div className="col-span-2 row-start-1 md:col-span-1 md:col-start-2">
          <p className="text-center">Actuellement à</p>
          <div className="flex items-center justify-center mb-2">
            <h2 className="md:text-4xl text-4xl">{name}</h2>
            <span className="ml-2">
              <ImInfo
                color="white"
                className="hover:text-blue-600 cursor-pointer"
                title={`Latitude : ${lat} - Longitude : ${lon}`}
              />
            </span>
          </div>
          <p className="text-center">
            {region} - {country}
          </p>
          <div className="mb-10">
            <img
              src={condition.icon}
              alt="Condition Icon"
              className="mx-auto mt-10 mb-3"
            />
            <p className="text-center text-lg">{condition.text}</p>
          </div>
        </div>
        <div className="text-center flex justify-center items-center">
          <WindArrow degree={wind_degree} />
          <span className="text-xl ml-2">
            <span className="font-medium">{wind_kph}</span> km/h
          </span>
        </div>
      </div>
    </section>
  );
};
