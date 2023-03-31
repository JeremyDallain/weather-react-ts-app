import WeatherIcon from "../../assets/images/weather-icon.png";

export const Header = () => {
  return (
    <header className="flex justify-between h-16 items-center mb-5">
      <img className="h-12" src={WeatherIcon} alt="logo météo" />
      <h1 className="text-4xl text-center">Météo</h1>
    </header>
  );
};
