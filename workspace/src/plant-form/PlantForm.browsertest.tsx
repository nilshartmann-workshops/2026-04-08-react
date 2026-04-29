import { it } from "vitest";
import { render } from "vitest-browser-react";
import PlantForm from "./PlantForm.tsx";

it("formular works!", async () => {
  const screen = await render(<PlantForm />);

  await screen.getByRole("spinbutton", {
    name: "Interval"
  }).fill("666");

})