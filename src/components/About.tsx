import { useI18n } from "../i18n/I18nProvider";

export default function About() {
  const { t } = useI18n();
  const experience = new Date().getFullYear() - 2021;
  return (
    <section className="about section" id="about">
      <h2 className="section__title">{t("about.title")}</h2>
      <span className="section__subtitle">{t("about.subtitle")}</span>
      <div className="about__container container grid">
        <img
          src="/assets/images/profile/profile-pic%20(1).png"
          alt=""
          className="about__img"
        />
        <div className="about__data">
          <p className="about__description">{t("about.description")}</p>
          <div className="about__info">
            <div>
              <span className="about__info-title">{experience}+</span>
              <span className="about__info-name">{t("about.years")}</span>
            </div>
            <div>
              <span className="about__info-title">03+</span>
              <span className="about__info-name">{t("about.projects")}</span>
            </div>
            <div>
              <span className="about__info-title">03+</span>
              <span className="about__info-name">{t("about.companies")}</span>
            </div>
          </div>
          <div className="about__buttons">
            <a
              download
              href="/assets/pdf/bahadir_saygili_fe_developer.pdf"
              className="button button--flex about__button"
            >
              {t("about.cv")}
              <i className="uil uil-file-download button__icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
