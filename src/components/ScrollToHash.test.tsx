import { render, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import ScrollToHash from "./ScrollToHash";

describe("ScrollToHash", () => {
  it("scrolls to the section from the current route hash", async () => {
    const scrollIntoView = vi.fn();
    const section = document.createElement("section");
    section.id = "about";
    section.scrollIntoView = scrollIntoView;
    document.body.appendChild(section);

    render(
      <MemoryRouter initialEntries={["/#about"]}>
        <ScrollToHash />
      </MemoryRouter>,
    );
    await waitFor(() => expect(scrollIntoView).toHaveBeenCalled());
    section.remove();
  });
});
