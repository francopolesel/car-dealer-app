export const fetchVehicleTypes = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/vehicles/GetMakesForVehicleType/car?format=json`,
  );
  const data = await response.json();
  return data.Results;
};

export const fetchVehicleModelsByMakeAndYear = async (makeId, year) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
  );
  const data = await response.json();
  return data.Results || [];
};
