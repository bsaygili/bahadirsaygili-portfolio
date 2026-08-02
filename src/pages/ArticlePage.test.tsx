import { render, screen, waitFor } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it } from "vitest";
import ArticlePage from "./ArticlePage";
import { articles } from "../data/showcase";

describe("ArticlePage", () => {
  it("renders an article selected by its slug", async () => {
    const article = articles[0];
    render(
      <HelmetProvider>
        <MemoryRouter initialEntries={[`/showcase/articles/${article.slug}`]}>
          <Routes>
            <Route path="/showcase/articles/:slug" element={<ArticlePage />} />
          </Routes>
        </MemoryRouter>
      </HelmetProvider>,
    );
    expect(
      screen.getByRole("heading", { name: article.title }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: article.sections[0].heading }),
    ).toBeInTheDocument();
    await waitFor(() =>
      expect(document.title).toBe(`${article.title} | Bahadır Saygılı`),
    );
  });
});
