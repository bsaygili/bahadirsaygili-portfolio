import { useState } from "react";
import { useI18n } from "../i18n/I18nProvider";

const groups = [
  {
    title: "Front-end Developer",
    subtitle: "More than 4 years",
    icon: "uil-brackets-curly",
    skills: [
      ["HTML", 90, "html"],
      ["CSS", 90, "css"],
      ["JavaScript", 85, "js"],
      ["ReactJs", 85, "react"],
      ["VueJs", 65, "vue"],
    ],
  },
  {
    title: "Industrial Engineer",
    subtitle: "More than 3.5 years",
    icon: "uil-brain",
    skills: [
      ["Planning", 90, "planning"],
      ["Production", 85, "production"],
      ["Staff Management", 85, "staff"],
      ["Leadership", 90, "leadership"],
    ],
  },
] as const;

export default function Skills() {
  const { t } = useI18n();
  const [open, setOpen] = useState(0);
  return (
    <section className="skilss section" id="skills">
      <h2 className="section__title">{t("skills.title")}</h2>
      <span className="section__subtitle">{t("skills.subtitle")}</span>
      <div className="skills__container container grid">
        <div>
          {groups.map((group, index) => (
            <div
              className={`skills__content skills__${open === index ? "open" : "close"}`}
              key={group.title}
            >
              <button
                className="skills__header"
                type="button"
                onClick={() => setOpen(index)}
              >
                <i className={`uil ${group.icon} skills__icon`} />
                <span>
                  <span className="skills__title">
                    {t(index === 0 ? "skills.frontend" : "skills.industry")}
                  </span>
                  <span className="skills__subtitle">
                    {t(index === 0 ? "skills.more4" : "skills.more35")}
                  </span>
                </span>
                <i className="uil uil-angle-double-down skills__arrow" />
              </button>
              <div className="skills__list grid">
                {group.skills.map(([name, percent, css]) => (
                  <div className="skills__data" key={name}>
                    <div className="skills__title">
                      <h3 className="skills__name">{name}</h3>
                      <span className="skills__number">{percent}%</span>
                    </div>
                    <div className="skills__bar">
                      <span className={`skills__percentage skills__${css}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
