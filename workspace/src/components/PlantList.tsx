import { Plant, PlantSchema } from "../types.ts";
import PlantCardList from "./PlantCardList.tsx";
import { useFavoritesStore } from "./useFavoritesStore.ts";
import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import AllPlantsList from "./AllPlantsList.tsx";
import FavoritePlantsList from "./FavoritePlantsList.tsx";
import PlantDetail from "./PlantDetails.tsx";
import { Suspense } from "react";
import { plantsQueryOptions } from "./plantsQueryOptions.ts";
import { ErrorBoundary } from "react-error-boundary";



export default function PlantList() {

  // "Preloading" von Daten:
  // const queryClient = useQueryClient();
  // queryClient.ensureQueryData(plantsQueryOptions());
  //
  // <Route path="/search" component={<Search />} loader={
  //    queryClient.ensureQueryData(plantsQueryOptions());
  // }/>


  return (
      <div className={"PlantList"}>
        <ErrorBoundary
          onError={err => {
            console.error("Fehler", err.message, err.message, err.stack)
          }}
          fallback={<h1>Schade, Laden nicht geklappt 🥺</h1>}>
            <Suspense fallback={<div className={"PlantCard animate-pulse bg-green-400"}>Alle Pflanzen werden geladen...</div>}>
              <AllPlantsList />
            </Suspense>

            <Suspense fallback={<div className={"PlantCard  animate-pulse bg-green-400"}>Lieblingspflanze wird geladen...</div>}>
              <div className={"flex flex-col"}>
                <PlantDetail plantId={"10"} />
                <PlantDetail plantId={"9"} />
              </div>

            </Suspense>



        </ErrorBoundary>


      </div>
  );
}
