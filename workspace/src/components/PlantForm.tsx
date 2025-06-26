import { useState } from "react";

import IntervalSelector from "./IntervalSelector.tsx";

export default function PlantForm() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [wateringInterval, setWateringInterval] = useState(1);

  const onSaveClick = () => {
    // todo
  };

  return (
    <form>
      <div className={"FormControl"}>
        <label>Name der Pflanze</label>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className={"FormControl"}>
        <label>Standort</label>
        <input value={location} onChange={(e) => setLocation(e.target.value)} />
      </div>

      <IntervalSelector
        interval={wateringInterval}
        onIntervalChange={(newWateringInterval) =>
          setWateringInterval(newWateringInterval)
        }
      />

      <div className={"FormButtons"}>
        <button
          type={"button"}
          className={"primary"}
          onClick={() => onSaveClick()}
        >
          Pflanze hinzufügen 🌱
        </button>
      </div>
    </form>
  );
}
