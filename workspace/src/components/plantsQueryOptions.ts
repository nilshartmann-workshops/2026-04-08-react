import { PlantSchema } from "../types.ts";
import { queryOptions } from "@tanstack/react-query";

export function plantsQueryOptions() {
  return queryOptions({
    queryKey: ["plants"],
    queryFn() {

      // const response = await fetch("http://localhost:7200/api/plants");
      // const allPlants = await response.json();

      return fetch("http://localhost:7200/api/plants")
        .then(response => response.json())
        .then(json => PlantSchema
          .array()
          .parse(json)
        );
    }
  })
}

//
// export function plantByIdQueryOptions(plantId: string) {
//   return queryOptions({
//     queryKey: ["plants", plantId],
//     async queryFn() {
//       const response = await fetch("http://localhost:7200/api/plants");
//       const allPlants = await response.json();
//       return PlantSchema.array().parse(allPlants);
//     }
//   })
// }


