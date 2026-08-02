import { useI18n } from "../i18n/I18nProvider";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="footer">
      {" "}
      <div className="footer__bg">
        {" "}
        <div className="footer__container container grid">
          {" "}
          <div>
            {" "}
            <h1 className="footer__title">Bahadır</h1>{" "}
            <span className="footer__subtitle">{t("footer.role")}</span>{" "}
          </div>{" "}
          <ul className="footer__links">
            {" "}
            <li>
              {" "}
              <a href="/#services" className="footer__link">
                Services
              </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a href="/#portfolio" className="footer__link">
                Portfolio
              </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a href="/#contact" className="footer__link">
                Contact Me
              </a>{" "}
            </li>{" "}
          </ul>{" "}
          <div className="footer__socials">
            {" "}
            <a
              href="https://www.facebook.com/profile.php?id=100005602485109"
              target="_blank"
              className="footer__social"
              rel="noopener"
              title="facebook_link"
            >
              {" "}
              <i className="uil uil-facebook-f" />{" "}
            </a>{" "}
            <a
              href="https://www.instagram.com/bhdrsaygili/"
              target="_blank"
              className="footer__social"
              rel="noopener"
              title="instagram_link"
            >
              {" "}
              <i className="uil uil-instagram" />{" "}
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/bahadir-saygili/"
              target="_blank"
              className="footer__social"
              rel="noopener"
              title="linkedin_link"
            >
              {" "}
              <i className="uil uil-linkedin" />{" "}
            </a>{" "}
            <a
              href="https://github.com/bsaygili"
              target="_blank"
              className="footer__social"
              rel="noopener"
              title="github_link"
            >
              {" "}
              <i className="uil uil-github" />{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
        <p className="footer__copy">
          {" "}
          © bahadırsaygili. {t("footer.rights")}{" "}
          <a
            className="footer__copy"
            href="https://www.termsfeed.com/live/1c78de81-6a55-44f4-be13-5cc8a60db1b5"
            target="_blank"
            rel="noopener"
          >
            {" "}
            {t("footer.privacy")}{" "}
          </a>{" "}
        </p>{" "}
      </div>{" "}
    </footer>
  );
}
