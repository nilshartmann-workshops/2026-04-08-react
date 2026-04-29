import { expect, it, vi } from "vitest";
import { render } from "vitest-browser-react";
import IntervalSelector from "./IntervalSelector.tsx";

it("Intervalselector ruft intervalchange-callback auf", async () => {

  const intervalChangeMock = vi.fn();

  const screen = await render(<IntervalSelector
    interval={123}
    onIntervalChange={intervalChangeMock} />
  );

  await expect.element(screen.getByText("123")).toBeInTheDocument();
  await screen.getByRole("spinbutton", {
    name: "Interval"
  }).fill("666");

  expect(intervalChangeMock).toHaveBeenCalledWith(666)
})