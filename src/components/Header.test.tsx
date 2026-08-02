import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";
import { I18nProvider } from "../i18n/I18nProvider";

const renderHeader = () =>
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  );

describe("Header", () => {
  it("opens and closes the mobile menu", async () => {
    const user = userEvent.setup();
    renderHeader();
    const menu = document.querySelector("#nav-menu");
    await user.click(screen.getByRole("button", { name: /open menu/i }));
    expect(menu).toHaveClass("show-menu");
    await user.click(screen.getByRole("button", { name: /close menu/i }));
    expect(menu).not.toHaveClass("show-menu");
  });

  it("persists the selected dark theme", async () => {
    const user = userEvent.setup();
    renderHeader();
    await user.click(screen.getByRole("button", { name: /toggle theme/i }));
    expect(document.body).toHaveClass("dark-theme");
    expect(localStorage.getItem("selected-theme")).toBe("dark");
  });

  it("links showcase navigation back to home sections", () => {
    renderHeader();
    expect(screen.getByRole("link", { name: /about/i })).toHaveAttribute(
      "href",
      "/#about",
    );
    expect(
      screen.getByRole("link", { name: /writing & apps/i }),
    ).toHaveAttribute("href", "/showcase");
  });

  it("switches language and enables RTL for Arabic", async () => {
    const user = userEvent.setup();
    render(
      <I18nProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </I18nProvider>,
    );
    await user.click(screen.getByRole("button", { name: /language/i }));
    await user.click(screen.getByRole("menuitemradio", { name: /العربية/i }));
    expect(document.documentElement).toHaveAttribute("lang", "ar");
    expect(document.documentElement).toHaveAttribute("dir", "rtl");
    expect(localStorage.getItem("locale")).toBe("ar");
    expect(screen.getByRole("link", { name: "الرئيسية" })).toBeInTheDocument();
  });
});
