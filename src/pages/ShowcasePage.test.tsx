import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ShowcasePage from "./ShowcasePage";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import { applications, articles } from "../data/showcase";

describe("ShowcasePage", () => {
  it("renders writing and application collections", () => {
    render(
      <HelmetProvider>
        <MemoryRouter>
          <ShowcasePage />
        </MemoryRouter>
      </HelmetProvider>,
    );
    expect(
      screen.getByRole("heading", { name: /writing & applications/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /latest writing/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Weather Forecast" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Budget Tracker" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Home Library" }),
    ).toBeInTheDocument();
    expect(document.title).toBe("Writing & Applications | Bahadır Saygılı");
    expect(screen.getAllByRole("article")).toHaveLength(
      articles.length + applications.length,
    );
    expect(
      screen.getAllByRole("link", { name: /read article/i })[0],
    ).toHaveAttribute("href", `/showcase/articles/${articles[0].slug}`);
  });
});
