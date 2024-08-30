"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { fetchVehicleTypes } from "./services/VehicleFetching";

export default function FilterPage() {
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 2014 },
    (_, i) => currentYear - i,
  );

  useEffect(() => {
    fetchVehicleTypes()
      .then(setVehicleTypes)
      .catch((error) => console.error("Error fetching vehicle types:", error));
  }, []);

  const isNextEnabled = selectedType && selectedYear;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Car Dealer App
        </h1>

        <div className="mb-6">
          <label
            htmlFor="vehicleType"
            className="block mb-2 font-semibold text-gray-700"
          >
            Vehicle Type
          </label>
          <select
            id="vehicleType"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-700"
          >
            <option value="" className="text-gray-500">
              Select a vehicle type
            </option>
            {vehicleTypes.map((type) => (
              <option
                key={type.MakeId}
                value={type.MakeId}
                className="text-gray-700"
              >
                {type.MakeName}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-8">
          <label
            htmlFor="modelYear"
            className="block mb-2 font-semibold text-gray-700"
          >
            Model Year
          </label>
          <select
            id="modelYear"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-700"
          >
            <option value="" className="text-gray-500">
              Select a year
            </option>
            {years.map((year) => (
              <option key={year} value={year} className="text-gray-700">
                {year}
              </option>
            ))}
          </select>
        </div>

        <Link
          href={isNextEnabled ? `/result/${selectedType}/${selectedYear}` : "#"}
          className={`w-full p-3 text-center rounded-lg transition-colors duration-300 ${
            isNextEnabled
              ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          onClick={(e) => !isNextEnabled && e.preventDefault()}
        >
          Next
        </Link>
      </div>
    </div>
  );
}
