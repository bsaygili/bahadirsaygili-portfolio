import { useState } from "react";
import { useI18n } from "../i18n/I18nProvider";

const services = [
  {
    title: (
      <>
        Front-end
        <br />
        Developer
      </>
    ),
    icon: "uil-arrow",
    items: [
      "Optimize applications for maximum speed.",
      "Design mobile-based features.",
      "Collaborate with back-end developers and web designers to improve usability.",
      "Stay up-to-date on emerging technologies.",
    ],
  },
  {
    title: (
      <>
        Industrial
        <br />
        Engineering
      </>
    ),
    icon: "uil-head-side",
    items: [
      "Having assimilated the concept of CRM, prone to teamwork.",
      "High communication skills, result oriented and problem solving ability.",
      "Ability to use technical software, read drawings, and prepare presentations.",
      "Basic AutoCAD knowledge.",
    ],
  },
];

export default function Services() {
  const { t } = useI18n();
  const [active, setActive] = useState<number | null>(null);
  return (
    <section className="services section" id="services">
      <h2 className="section__title">{t("services.title")}</h2>
      <span className="section__subtitle">{t("services.subtitle")}</span>
      <div className="services__container container grid">
        {services.map((service, index) => (
          <div className="services__content" key={index}>
            <div>
              <i className={`uil ${service.icon} services__icon`} />
              <h3 className="services__title">
                {t(index === 0 ? "services.frontend" : "services.industry")}
              </h3>
            </div>
            <button
              type="button"
              className="button button--flex button--small button--link services__button"
              onClick={() => setActive(index)}
            >
              {t("services.more")}
              <i className="uil uil-angle-double-right button__icon" />
            </button>
            <div
              className={`services__modal${active === index ? " active-modal" : ""}`}
              role="dialog"
              aria-modal="true"
            >
              <div className="services__modal-content">
                <h4 className="services__modal-title">
                  {t(index === 0 ? "services.frontend" : "services.industry")}
                </h4>
                <button
                  type="button"
                  className="uil uil-times services__modal-close"
                  aria-label={t("services.close")}
                  onClick={() => setActive(null)}
                />
                <ul className="services__modal-services grid">
                  {service.items.map((item) => (
                    <li className="services__modal-service" key={item}>
                      <i className="uil uil-check services__modal-icon" />
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
