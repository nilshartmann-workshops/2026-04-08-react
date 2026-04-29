import { afterEach, beforeAll, expect, it } from "vitest";
import { render } from "vitest-browser-react";
import { QueryClientProvider } from "@tanstack/react-query";
import { createQueryClient } from "../create-query-client.tsx";
import { Suspense } from "react";
import PlantList from "./PlantList.tsx";
import { setupWorker } from "msw/browser";
import { delay, http, HttpResponse } from "msw";
import { Plant } from "../types.ts";

const worker = setupWorker(
  http.get("http://localhost:7200/api/plants", async () => {
    const plants: Plant[] = [
      {
        id: "1",
        name: "Aloe Vera",
        location: "Schlafzimmer",
        wateringInterval: 12,
        lastWatered: "2025-06-16",
      },
      {
        id: "2",
        name: "Orchidee Olga",
        location: "Wohnzimmer",
        wateringInterval: 20,
      },
    ];

    await delay(125);

    return HttpResponse.json(plants);
  }),
);

beforeAll(async () => await worker.start());
afterEach(() => worker.resetHandlers());



it("zeigt den Suspense-Fallback und die geladenen Daten", async () => {
  const screen = await render(
    <QueryClientProvider client={createQueryClient()}>
      <PlantList />
    </QueryClientProvider>,
  );

  await expect.element(screen.getByText(/pflanzen werden geladen/i)).toBeInTheDocument();

  await expect.element(screen.getByText(/Orchidee Olga/i)).toBeInTheDocument();
});
