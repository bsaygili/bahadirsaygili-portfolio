import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { I18nProvider } from "../i18n/I18nProvider";
import About from "./About";

describe("About", () => {
  it("uses a root-relative CV download url", () => {
    render(
      <I18nProvider>
        <About />
      </I18nProvider>,
    );

    expect(screen.getByRole("link", { name: /download cv/i })).toHaveAttribute(
      "href",
      "/assets/pdf/bahadir_saygili_fe_developer.pdf",
    );
  });
});
