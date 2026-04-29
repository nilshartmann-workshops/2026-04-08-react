import { afterEach, beforeEach, expect, it, test, vi } from "vitest";
import { getDaysUntilWatering } from "./date-utils.ts";

function add(a: number, b: number) {
  return a + b;
}


beforeEach(() => {
  // Systemzeit einfrieren, damit Tests immer dasselbe Ergebnis liefern
  vi.useFakeTimers();
  vi.setSystemTime(new Date(2026, 3, 29)); // 20.12.2025 (Monate sind 0-basiert!)
});

afterEach(() => {
  vi.useRealTimers();
});


// @Test
it("Soll funktionieren!", () => {
  const result = add(2,3);

  expect(result).toBeTypeOf("number")
  expect(result).toBe(5)
})

it("gibt anzahl tage zurück", () => {
  const result = getDaysUntilWatering("2026-04-26", 7);
  expect(result).not.toBe(0);
})

// test("Soll funktionieren!", () => {
//   // ...
// })