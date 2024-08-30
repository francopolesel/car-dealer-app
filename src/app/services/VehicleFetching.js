export const fetchVehicleTypes = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/vehicles/GetMakesForVehicleType/car?format=json`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.Results || [];
  } catch (error) {
    console.error("Error fetching vehicle types:", error);
    return [];
  }
};

export const fetchVehicleModelsByMakeAndYear = async (makeId, year) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.Results || [];
  } catch (error) {
    console.error("Error fetching vehicle models:", error);
    return [];
  }
};
