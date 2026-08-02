import { useEffect, useState } from "react";
import { useI18n } from "../i18n/I18nProvider";

function useTypewriter(titles: string[]) {
  const [text, setText] = useState("");
  const [word, setWord] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const target = titles[word % titles.length];
    const timeout = window.setTimeout(
      () => {
        if (text === target && !deleting) return setDeleting(true);
        if (text === "" && deleting) {
          setDeleting(false);
          setWord((value) => value + 1);
          return;
        }
        setText(target.slice(0, text.length + (deleting ? -1 : 1)));
      },
      text === target ? 1000 : deleting ? 80 : 140,
    );
    return () => window.clearTimeout(timeout);
  }, [text, word, deleting]);
  return text;
}

export default function Hero() {
  const { t } = useI18n();
  const title = useTypewriter([
    t("hero.name"),
    t("hero.frontend"),
    t("hero.engineer"),
  ]);
  return (
    <section className="home section" id="home">
      {" "}
      <div className="home__container container grid">
        {" "}
        <div className="home__content grid">
          {" "}
          <div className="home__social grid">
            {" "}
            <a
              href="https://www.linkedin.com/in/bahadir-saygili/"
              target="_blank"
              className="home__social-icon"
              rel="noopener"
              title="linkedin"
            >
              <i className="uil uil-linkedin" />
            </a>{" "}
            <a
              href="https://github.com/bsaygili"
              className="home__social-icon"
              target="_blank"
              rel="noopener"
              title="github"
            >
              <i className="uil uil-github" />
            </a>{" "}
          </div>{" "}
          <div className="home__img">
            {" "}
            <svg
              className="home__blob"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <mask id="mask0" style={{ maskType: "alpha" }}>
                {" "}
                <path
                  fill="#8A3FFC"
                  d="M50.4,-47C65.9,-34.9,79.4,-17.4,76.5,-2.9C73.6,11.7,54.3,23.3,38.8,31.3C23.3,39.3,11.7,43.7,0.5,43.2C-10.6,42.7,-21.2,37.2,-27.8,29.2C-34.4,21.2,-37,10.6,-41.1,-4.1C-45.3,-18.9,-51,-37.8,-44.4,-49.9C-37.8,-62,-18.9,-67.4,-0.7,-66.7C17.4,-66,34.9,-59.2,50.4,-47Z"
                  transform="translate(100 100)"
                />{" "}
              </mask>{" "}
              <g mask="url(#mask0)">
                {" "}
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />{" "}
                <image
                  className="home__blob-img"
                  x={38}
                  y={15}
                  href="assets/images/profile/profilpic-rbg.png"
                />{" "}
              </g>{" "}
            </svg>{" "}
          </div>{" "}
          <div className="home__data">
            {" "}
            <h1 className="home__title">
              {" "}
              {t("hero.greeting")}{" "}
              <span className="text-rotate">
                <span className="wrap">{title}</span>
              </span>{" "}
            </h1>{" "}
            <h3 className="home__subtitle">{t("hero.role")}</h3>{" "}
            <p className="home__description">{t("hero.description")}</p>{" "}
            <a href="#contact" className="button button--flex">
              {" "}
              {t("hero.contact")} <i className="uil uil-message button__icon" />
            </a>{" "}
          </div>{" "}
        </div>{" "}
        <div className="home__scroll">
          {" "}
          <a href="#about" className="home__scroll-button button--flex">
            <i className="uil uil-mouse-alt-2 home__scroll-mouse" />{" "}
            <span className="home__scroll-name">{t("hero.scroll")}</span>{" "}
            <i className="uil uil-arrow-down home__scroll-arrow" />
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
