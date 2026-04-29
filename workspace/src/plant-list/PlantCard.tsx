import dayjs from "dayjs";

import { getDaysUntilWatering } from "../shared/date-utils.ts";
import { useFavoritesStore } from "./useFavoritesStore.ts";
import { useMutation } from "@tanstack/react-query";
import { plantsQueryOptions } from "./plantsQueryOptions.ts";
import PlantForm from "../plant-form/PlantForm.tsx";

type PlantCardProps = {
  id: string;
  name: string;
  location: string;
  wateringInterval: number;
  lastWatered?: string;
};

// "Co-Location"
//   MVC <-- Komponente

export default function PlantCard({
  id,
  name,
  location,
  wateringInterval,
  lastWatered,
}: PlantCardProps) {

  const store = useFavoritesStore();
  const isFavorite = store.favoriteIds.includes(id);

  const lastWateredMutation = useMutation({
    async mutationFn() {
      const payload = {
        lastWatered: new Date().toISOString()
      }

      await fetch(`http://localhost:7200/api/plants/${id}/lastWatered?slow=5000`, {
        method: "PUT",
        headers: { "content-type": "application/json"},
        body: JSON.stringify(payload)
      })

      return;
    },
    onSuccess(a, b, c, context) {
      context.client.invalidateQueries({
        queryKey: ["plants"]
      })
    }
  })




  const wateringInfo =
    wateringInterval === 1
      ? "Jeden Tag gießen!"
      : `Alle ${wateringInterval} Tage gießen`;

  const lastWateredMsg = lastWatered ? (
    <div>
      Zuletzt: {dayjs(lastWatered).locale("de").format("DD.MM.YYYY HH:mm.ss")}
    </div>
  ) : (
    <div>Noch nicht gegossen 🍂</div>
  );

  const daysUntilWatering = lastWatered
    ? getDaysUntilWatering(lastWatered, wateringInterval)
    : null;

  const wateringMsg = daysUntilWatering !== null && (
    <div>
      {daysUntilWatering > 0
        ? `Noch ${daysUntilWatering} Tage bis zum Gießen`
        : daysUntilWatering === 0
          ? "Heute gießen!"
          : `Überfällig seit ${Math.abs(daysUntilWatering)} Tag(en)`}
    </div>
  );

  return (
    <div className={"PlantCard"}>
      <PlantForm />
      <header>
        <h2>{name}</h2>
        <div>📍{location}</div>
        <button
        onClick={() => store.toggleFavorite(id)}
        >{isFavorite ? "Favorit!" : "Kein Favorit :-("}</button>
      </header>
      <section>
        <div>{wateringInfo}</div>
        {lastWateredMsg}
        {wateringMsg}
        <button type={"button"}
                className={"primary"}
                disabled={lastWateredMutation.isPending}
          onClick={() => lastWateredMutation.mutate()}
        >{lastWateredMutation.isPending ?
          "Es wird gegossen!" :
          "Jetzt gegossen! Ich schwör'!"}</button>
      </section>

      {lastWateredMutation.isSuccess && "Es wurde gegossen!"}

    </div>
  );
}
