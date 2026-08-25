import { useI18n } from "../i18n/I18nProvider";

export default function Qualifications() {
  const { t } = useI18n();
  return (
    <section className="section qualification">
      <h2 className="section__title">{t("qualification.title")}</h2>
      <span className="section__subtitle">{t("qualification.subtitle")}</span>
      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className="qualification__button button--flex qualification__active"
            data-target="#education"
          >
            <i className="uil uil-graduation-cap qualification__icon" />
            Education
          </div>
          <div
            className="qualification__button button--flex"
            data-target="#work"
          >
            <i className="uil uil-suitcase qualification__icon" /> Work
          </div>
        </div>
        <div className="qualification__sections">
          {/* QUALIFICATION CONTENT 2 */}
          <div
            className="qualification__content qualification__active"
            data-content
            id="work"
          >
            {/* QUALIFICATION 3 */}
            <div className="qualification__data">
              <div />
              <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
              </div>
              <div>
                <h3 className="qualification__title">
                  Senior Front-end Developer
                </h3>
                <span className="qualification__subtitle">
                  NİLTEK YAZILIM TEKNOLOJİLERİ - Ankara, Türkiye
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt" /> 2025-Present
                </div>
              </div>
            </div>
            {/* QUALIFICATION 2 */}
            <div className="qualification__data">
              <div />
              <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
              </div>
              <div>
                <h3 className="qualification__title">Front-end Developer</h3>
                <span className="qualification__subtitle">
                  Frumatic - Monaco, Monaco
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt" /> 2022-2025
                </div>
              </div>
            </div>
            {/* QUALIFICATION 1 */}
            <div className="qualification__data">
              <div />
              <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
              </div>
              <div>
                <h3 className="qualification__title">
                  Freelance Front-end Developer
                </h3>
                <span className="qualification__subtitle">
                  Fanus Media - İzmir, Türkiye
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt" /> 2021-2022
                </div>
              </div>
            </div>
            {/* QUALIFICATION 3 */}
            <div className="qualification__data">
              <div />
              <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
              </div>
              <div>
                <h3 className="qualification__title">
                  Planning and Production Engineer
                </h3>
                <span className="qualification__subtitle">
                  Balçık Heating Elements - Ankara
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt" /> 2018-2022
                </div>
              </div>
            </div>
            {/* QUALIFICATION 4 */}
            <div className="qualification__data">
              <div />
              <div>
                <span className="qualification__rounder" />
                {/* <span class="qualification__line"></span> */}
              </div>
              <div>
                <h3 className="qualification__title">Interceptor Controller</h3>
                <span className="qualification__subtitle">
                  Turkish Air Force - Konya
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt" /> 2014-2018
                </div>
              </div>
            </div>
          </div>
          {/* QUALIFICATION CONTENT 1 */}
          <div
            className="qualification__content qualification__active"
            data-content
            id="education"
          >
            {/* QUALIFICATION 1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Vocational School of Justice
                </h3>
                <span className="qualification__subtitle">
                  <i className="uil uil-balance-scale" style={{ marginRight: "0.5rem" }} />
                  Anadol University - Eskişehir
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt" /> 2014-2018
                </div>
              </div>
              <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
              </div>
            </div>
            {/* QUALIFICATION 2 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Industrial Engineer</h3>
                <span className="qualification__subtitle">
                  <i className="uil uil-plane" /> Air Force Academy - İstanbul
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt" /> 2010-2014
                </div>
              </div>
              <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
              </div>
            </div>
            {/* QUALIFICATION 3 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">High School</h3>
                <span className="qualification__subtitle">
                  <i className="uil uil-fire" /> Işıklar Military High School -
                  Bursa
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt" /> 2006-2010
                </div>
              </div>
              <div>
                <span className="qualification__rounder" />
                <span className="qualification__line" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
