import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

function Header({placeholder}) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  function onSearchInputChange(e) {
    setSearchInput(e.target.value);
  }
  function handleRangeSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
    console.log(ranges);
  }
  function search() {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  }
  const InitSelectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md md:px-10">
      {/* Left */}
      <div className="relative flex items-center h-10 my-auto cursor-pointer">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          onClick={() => router.push("/")}
        />
      </div>
      {/* Middle */}
      <div className="flex items-center justify-between py-2 rounded-full md:border-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={onSearchInputChange}
          placeholder={placeholder || "Start your search"}
          type="text"
          className="flex-grow pl-5 bg-transparent border-0 outline-none "
        />
        <SearchIcon className="hidden h-8 p-2 text-white bg-red-400 rounded-full cursor-pointer md:mx-2 md:inline-flex" />
      </div>
      {/* Right */}
      <div className="flex items-center justify-end space-x-4 text-gray-500">
        <p className="hidden md:inline">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center p-2 space-x-2 border-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[InitSelectionRange]}
            onChange={handleRangeSelect}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
          />
          <div className="flex items-center mb-4 border-b">
            <h2 className="flex-grow text-2xl font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              value={noOfGuests}
              min={1}
              onChange={(e) => setNoOfGuests(e.target.value)}
              className="w-12 pl-2 text-red-400 outline-none"
            />
          </div>
          <div className="flex">
            <button
              className="flex-1 text-gray-500"
              onClick={(e) => setSearchInput("")}
            >
              Cancel
            </button>
            <button className="flex-1 text-red-400" onClick={search}>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
