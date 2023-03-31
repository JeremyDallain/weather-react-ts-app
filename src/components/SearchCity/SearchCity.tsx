import { useState } from "react";
import { useCitySearch } from "../../hooks/CitySearch/useCitySearch.js";
import { ImSearch } from "react-icons/im";

interface Props {
  onSearch: (searchText: string) => void;
}

export const SearchCity = ({ onSearch }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { suggestions, setSuggestions } = useCitySearch(searchTerm);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm) {
      onSearch(searchTerm);
      setSearchTerm("");
      setSuggestions([]);
    }
  };

  const handleClick = ({ name }: { name: string }) => {
    onSearch(name);
    setSearchTerm("");
    setSuggestions([]);
  };

  return (
    <section className="relative my-10">
      <form
        className="flex justify-center items-center relative max-w-xl mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          className="border-2 border-gray-300 bg-white h-10 pl-4 pr-10 rounded-lg text-sm w-full text-black"
          id="search"
          value={searchTerm}
          type="text"
          placeholder=" Rechercher une ville..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2">
          <ImSearch color="grey" className="" />
        </button>
        {suggestions.length > 0 && (
          <div className="absolute top-full w-full">
            <ul className="text-black max-w-xl bg-white  mt-1 divide-y divide-gray-200 border-2 border-gray-300 rounded-sm">
              {suggestions.map((city, index) => (
                <li
                  className="px-4 py-1 hover:bg-gray-200 cursor-pointer"
                  key={index}
                  onClick={() => handleClick(city)}
                >
                  <span className="font-medium">{city.name}</span> -{" "}
                  {city.country}
                </li>
              ))}
            </ul>
          </div>
        )}
      </form>
    </section>
  );
};
