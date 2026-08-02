import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useI18n, type Locale } from "../i18n/I18nProvider";

const links = [
  ["home", "uil-estate", "nav.home"],
  ["about", "uil-user", "nav.about"],
  ["skills", "uil-file-alt", "nav.skills"],
  ["services", "uil-briefcase-alt", "nav.services"],
  ["portfolio", "uil-scenery", "nav.portfolio"],
  ["/showcase", "uil-book-open", "nav.showcase"],
  ["contact", "uil-envelope", "nav.contact"],
];

const languages: Array<{ code: Locale; label: string; native: string }> = [
  { code: "en", label: "EN", native: "English" },
  { code: "tr", label: "TR", native: "Türkçe" },
  { code: "de", label: "DE", native: "Deutsch" },
  { code: "ar", label: "AR", native: "العربية" },
];

export default function Header() {
  const { locale, setLocale, t } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [dark, setDark] = useState(
    () => localStorage.getItem("selected-theme") === "dark",
  );

  useEffect(() => {
    document.body.classList.toggle("dark-theme", dark);
    localStorage.setItem("selected-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link to="/#home" className="nav__logo">
          Bahadır
        </Link>
        <div
          className={`nav__menu${menuOpen ? " show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list grid">
            {links.map(([id, icon, label], index) => (
              <li className="nav__item" key={id}>
                <Link
                  to={id.startsWith("/") ? id : `/#${id}`}
                  className={`nav__link${index === 0 ? " active-link" : ""}`}
                  onClick={() => setMenuOpen(false)}
                >
                  <i className={`uil ${icon} nav__icon`} />
                  {t(label)}
                </Link>
              </li>
            ))}
          </ul>
          <button
            className="uil uil-times nav__close"
            type="button"
            aria-label={t("nav.close")}
            onClick={() => setMenuOpen(false)}
          />
        </div>
        <div className="nav__btns">
          <div
            className="language-picker"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget))
                setLanguageOpen(false);
            }}
          >
            <button
              className="language-picker__trigger"
              type="button"
              aria-label={t("nav.language")}
              aria-haspopup="menu"
              aria-expanded={languageOpen}
              onClick={() => setLanguageOpen((value) => !value)}
            >
              <i className="uil uil-globe" aria-hidden="true" />
              <span>{locale.toUpperCase()}</span>
              <i
                className={`uil uil-angle-down language-picker__chevron${languageOpen ? " is-open" : ""}`}
                aria-hidden="true"
              />
            </button>
            {languageOpen && (
              <div
                className="language-picker__menu"
                role="menu"
                aria-label={t("nav.language")}
              >
                {languages.map((language) => (
                  <button
                    key={language.code}
                    type="button"
                    role="menuitemradio"
                    aria-checked={locale === language.code}
                    className={`language-picker__option${locale === language.code ? " is-active" : ""}`}
                    onClick={() => {
                      setLocale(language.code);
                      setLanguageOpen(false);
                    }}
                  >
                    <span className="language-picker__code">
                      {language.label}
                    </span>
                    <span>{language.native}</span>
                    {locale === language.code && (
                      <i className="uil uil-check" aria-hidden="true" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            className={`uil ${dark ? "uil-sun" : "uil-moon"} change-theme`}
            type="button"
            aria-label={t("nav.theme")}
            onClick={() => setDark((value) => !value)}
          />
          <button
            className="nav__toggle"
            type="button"
            aria-label={t("nav.open")}
            onClick={() => setMenuOpen(true)}
          >
            <i className="uil uil-apps" />
          </button>
        </div>
      </nav>
    </header>
  );
}
