import type { FormEvent } from "react";
import { useI18n } from "../i18n/I18nProvider";

export default function Contact() {
  const { t } = useI18n();
  const sendMail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = String(data.get("project") ?? "");
    const body = `Name: ${data.get("name") ?? ""};\nEmail: ${data.get("email") ?? ""}; Message: ${data.get("message") ?? ""}`;
    window.location.href = `mailto:bhdrsaygili@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">{t("contact.title")}</h2>
      <span className="section__subtitle">{t("contact.subtitle")}</span>
      <div className="contact__container container grid">
        <div>
          {[
            ["uil-phone", t("contact.call"), "+090(507)744 0839"],
            ["uil-envelope", t("contact.email"), "bhdrsaygili@gmail.com"],
            ["uil-map-marker", t("contact.location"), "Türkiye - Ankara"],
          ].map(([icon, title, value]) => (
            <div className="contact__information" key={title}>
              <i className={`uil ${icon} contact__icon`} />
              <div>
                <h3 className="contact__title">{title}</h3>
                <span className="contact__subtitle">{value}</span>
              </div>
            </div>
          ))}
        </div>
        <form className="contact__form grid" onSubmit={sendMail}>
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label htmlFor="name" className="contact__label">
                {t("contact.name")}
              </label>
              <input
                name="name"
                id="name"
                className="contact__input"
                required
              />
            </div>
            <div className="contact__content">
              <label htmlFor="email" className="contact__label">
                {t("contact.email")}
              </label>
              <input
                name="email"
                id="email"
                type="email"
                className="contact__input"
                required
              />
            </div>
          </div>
          <div className="contact__content">
            <label htmlFor="project" className="contact__label">
              {t("contact.project")}
            </label>
            <input name="project" id="project" className="contact__input" />
          </div>
          <div className="contact__content">
            <label htmlFor="message" className="contact__label">
              {t("contact.message")}
            </label>
            <textarea
              name="message"
              id="message"
              rows={7}
              className="contact__input"
              required
            />
          </div>
          <div>
            <button type="submit" className="button button--flex">
              {t("contact.send")}
              <i className="uil uil-message button__icon" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
