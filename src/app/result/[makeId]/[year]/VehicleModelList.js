import React from "react";
import { fetchVehicleModelsByMakeAndYear } from "@/app/services/VehicleFetching";

export default async function VehicleModelList({ makeId, year }) {
  const models = await fetchVehicleModelsByMakeAndYear(makeId, year);

  if (models.length === 0) {
    return (
      <div className="text-red-500">No models found for this selection.</div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Vehicle Models for {year}
        </h1>
        <ul>
          {models.map((model) => (
            <li key={model.Model_ID} className="mb-4">
              <div className="p-4 bg-blue-50 rounded-lg text-blue-800">
                {model.Make_Name} {model.Model_Name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
