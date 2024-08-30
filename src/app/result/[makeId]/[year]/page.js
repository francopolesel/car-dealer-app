import React, { Suspense } from "react";
import VehicleModelList from "./VehicleModelList";
import Loading from "@/app/components/Loading";
import { fetchVehicleTypes } from "@/app/services/VehicleFetching";

export async function generateStaticParams() {
  const vehicleTypes = await fetchVehicleTypes();
  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 2014 },
    (_, i) => currentYear - i,
  );

  const params = [];

  for (const type of vehicleTypes) {
    for (const year of years) {
      params.push({
        makeId: type.MakeId.toString(),
        year: year.toString(),
      });
    }
  }

  return params;
}

export default function ResultPage({ params }) {
  const { makeId, year } = params;

  return (
    <Suspense fallback={<Loading />}>
      <VehicleModelList makeId={makeId} year={year} />
    </Suspense>
  );
}
