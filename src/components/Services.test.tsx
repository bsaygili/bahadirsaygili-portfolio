import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Services from "./Services";

describe("Services", () => {
  it("opens and closes a service modal", async () => {
    const user = userEvent.setup();
    render(<Services />);
    await user.click(screen.getAllByRole("button", { name: /view more/i })[0]);
    const dialog = screen.getAllByRole("dialog")[0];
    expect(dialog).toHaveClass("active-modal");
    await user.click(
      screen.getAllByRole("button", { name: /close modal/i })[0],
    );
    expect(dialog).not.toHaveClass("active-modal");
  });
});
