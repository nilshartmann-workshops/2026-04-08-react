# queryOptions – Query-Definition wiederverwenden

## Dateien

- `src/components/plantsQueryOptions.ts` (neu anlegen)
- `src/components/PlantList.tsx`
- `src/components/AllPlantsList.tsx`
- `src/components/FavoritePlantList.tsx`

## Aufgabe

Die Pflanzenliste soll in zwei Komponenten verwendet werden. Damit wir die Query-Beschreibung (`queryKey` und `queryFn`) nicht doppeln müssen, lagern wir die Konfiguration in ein eigenes Modul aus.

## Schritte

### 1. `plantsQueryOptions` extrahieren

- Lege eine neue Datei `src/components/plantsQueryOptions.ts` an und exportiere daraus eine Funktion `plantsQueryOptions`, die ein `queryOptions`-Objekt zurückgibt
  - Das Objekt, das du an `queryOptions` übergibst, ist die Query-Konfiguration, so wie sie aktuell in `PlantList` verwendet wird.

### 2. `AllPlantsList.tsx` anlegen
- Diese Komponente soll die bisherige vollständige, nicht gefilterte Liste der Pflanzen ausgeben
- Verschieb den Code (inklusive des `useSuspenseQuery`) zum Laden und Anzeigen _aller_ Pflanzen in diese neue Komponente
- Verwende für die Query-Beschreibung deine neue `plantsQueryOptions`-Funktion
- ```typescript jsx
   import PlantCardList from "./PlantCardList.tsx";
   import { plantsQueryOptions } from "./plantsQueryOptions.ts";
   import { useSuspenseQuery } from "@tanstack/react-query";

   // AllPlantsList.tsx
   export default function AllPlantsList() {
     const { data: allPlants } = useSuspenseQuery(plantsQueryOptions());

     return (
       <div>
         <h2>Alle Pflanzen</h2>
         <PlantCardList plants={allPlants} />
       </div>
     );
  }
  ```

### 2. `FavoritePlantList` – selbst laden

- `FavoritePlantList` soll die Liste der Kommentare nun ebenfalls (wie `PlantList`) selbst laden.
- Baue das Property `plants` aus `FavoritePlantList` aus und verwende auch dort `useSuspenseQuery`, um die Daten zu laden. 
  - Für die Query-Beschreibung ebenfalls `plantsQueryOptions()` verwenden 

### 3. `PlantList` anpassen

- Die `PlantList` soll jetzt nur noch als "Wrapper" um `AllPlantsList` und `FavoritePlantsList` fungieren
- Die beiden Komponenten laden jeweils ihre Daten selbst
- ```typescript jsx
   import FavoritePlantList from "./FavoritePlantList.tsx";

   import AllPlantsList from "./AllPlantsList.tsx";

   // PlantList.tsx
   export default function PlantList() {
     return (
       <div className={"PlantList"}>
         <AllPlantsList />
         <FavoritePlantList />
       </div>
    );
   }
   ```
- Wenn deine Anwendung funktioniert, kannst du im Netzwerkverkehr schauen, welche Queries ausgeführt werden
  - Wechsel dazu auch mit der TabBar zwischen Liste und Formular hin- und her


## Material

- `queryOptions`: https://tanstack.com/query/latest/docs/framework/react/reference/queryOptions
- Blog Post mit Hintergründen zu `queryOptions`: https://tkdodo.eu/blog/the-query-options-api
- 