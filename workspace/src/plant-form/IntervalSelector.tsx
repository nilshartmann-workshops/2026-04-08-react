import { ChangeEvent, useId } from "react";

type IntervalSelectorProps = {
  interval?: number;
  onIntervalChange(newInterval: number): void;
};

export default function IntervalSelector({
  interval,
  onIntervalChange,
}: IntervalSelectorProps) {
  const handleIntervalChange = (e: ChangeEvent<HTMLInputElement>) => {
    const valueAsString = e.target.value;

    // alternativ parseInt
    onIntervalChange(Number(valueAsString));
  };

  // Validierung (z.B. keine negativen Zahlen) machen wir später

  const id = useId();

  return (
    <div className={""}>
      <h2>Interval Selector</h2>
      <button
        type="button"
        className={"sm"}
        onClick={() => onIntervalChange(1)}
      >
        Dayly
      </button>
      <button
        type="button"
        className={"sm"}
        onClick={() => onIntervalChange(7)}
      >
        Weekly
      </button>
      <button
        type="button"
        className={"sm"}
        onClick={() => onIntervalChange(14)}
      >
        Biweekly
      </button>
      <input
        id={id}
        type={"number"}
        value={interval || ""}
        onChange={handleIntervalChange}
      />
      <label htmlFor={id}>Interval</label>

      {interval !== undefined && (
        <div className={"px-1 text-sm"}>Alle {interval} Tage gießen</div>
      )}
    </div>
  );
}
