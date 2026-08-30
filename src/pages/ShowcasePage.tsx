import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { applications, articles } from "../data/showcase";
import { useI18n } from "../i18n/I18nProvider";

export default function ShowcasePage() {
  const { t } = useI18n();
  return (
    <>
      <Helmet>
        <title>{t("seo.showcaseTitle")}</title>
        <meta name="description" content={t("seo.showcaseDescription")} />
        <link rel="canonical" href="https://www.bahadirsaygili.com/showcase" />
        <meta property="og:title" content={t("seo.showcaseTitle")} />
        <meta
          property="og:description"
          content={t("seo.showcaseDescription")}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.bahadirsaygili.com/showcase"
        />
      </Helmet>
      <Header />
      <main className="showcase main">
        <section className="showcase__hero container">
          <span className="showcase__eyebrow">{t("showcase.eyebrow")}</span>
          <h1>{t("showcase.title")}</h1>
          <p>{t("showcase.description")}</p>
        </section>
        <section
          className="showcase__section container"
          aria-labelledby="writing-heading"
        >
          <div className="showcase__heading">
            <div>
              <span>{t("showcase.notes")}</span>
              <h2 id="writing-heading">{t("showcase.latest")}</h2>
            </div>
          </div>
          <div className="article-grid">
            {articles.map((article) => (
              <article className="article-card" key={article.title}>
                <div className="article-card__meta">
                  <time>{article.publishedAt}</time>
                  <span>{article.readingTime}</span>
                </div>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <ul className="showcase__tags" aria-label="Article tags">
                  {article.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <Link
                  to={`/showcase/articles/${article.slug}`}
                  className="showcase__link"
                >
                  {t("showcase.read")} <i className="uil uil-arrow-up-right" />
                </Link>
              </article>
            ))}
          </div>
        </section>
        <section
          className="showcase__section container"
          aria-labelledby="apps-heading"
        >
          <div className="showcase__heading">
            <div>
              <span>{t("showcase.builds")}</span>
              <h2 id="apps-heading">{t("showcase.apps")}</h2>
            </div>
          </div>
          <div className="application-grid">
            {applications.map((app) => (
              <article className="application-card" key={app.title}>
                <div className="application-card__media">
                  <img
                    src={app.image}
                    alt={`${app.title} preview`}
                    loading="lazy"
                  />
                </div>
                <div className="application-card__body">
                  <h3>{app.title}</h3>
                  <p>{app.description}</p>
                  <ul
                    className="showcase__tags"
                    aria-label={`${app.title} technologies`}
                  >
                    {app.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                  {(app.liveUrl || app.sourceUrl) && (
                    <div className="application-card__links">
                      {app.liveUrl && (
                        <a href={app.liveUrl}>{t("showcase.live")}</a>
                      )}
                      {app.sourceUrl && (
                        <a href={app.sourceUrl}>{t("showcase.source")}</a>
                      )}
                    </div>
                  )}
                  {(app.playstoreUrl || app.appStoreUrl) && (
                    <div className="application-card__links">
                      {app.playstoreUrl && (
                        <a
                          className="application-card__store-link"
                          href={app.playstoreUrl}
                        >
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path fill="#00d7fe" d="M3.6 2.4 14 12 3.6 21.6c-.4-.5-.6-1.1-.6-1.8V4.2c0-.7.2-1.3.6-1.8Z" />
                            <path fill="#ffce00" d="m14 12 3.2-3 3.9 2.2c.8.4.8 1.2 0 1.6L17.2 15 14 12Z" />
                            <path fill="#ff3a44" d="m3.6 21.6 10.4-9.6 3.2 3-11.1 6.3c-1 .6-1.9.6-2.5.3Z" />
                            <path fill="#00f076" d="M3.6 2.4c.6-.3 1.5-.3 2.5.3L17.2 9 14 12 3.6 2.4Z" />
                          </svg>
                          <span>{t("showcase.playstore")}</span>
                        </a>
                      )}
                      {app.appStoreUrl && (
                        <a
                          className="application-card__store-link"
                          href={app.appStoreUrl}
                        >
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="currentColor"
                              d="M16.7 12.8c0-2.7 2.2-4 2.3-4.1a5 5 0 0 0-3.9-2.1c-1.6-.2-3.2 1-4 1-1 0-2.4-1-3.8-1A5.7 5.7 0 0 0 2.5 9.5c-2 3.4-.5 8.5 1.4 11.3.9 1.4 2 2.9 3.5 2.8 1.4 0 1.9-.9 3.7-.9 1.7 0 2.2.9 3.7.9s2.5-1.4 3.4-2.8a12 12 0 0 0 1.6-3.3 4.8 4.8 0 0 1-3.1-4.7ZM14 4.9A4.8 4.8 0 0 0 15.1 1a4.9 4.9 0 0 0-3.3 1.8 4.6 4.6 0 0 0-1.2 3.7A4.1 4.1 0 0 0 14 4.9Z"
                            />
                          </svg>
                          <span>{t("showcase.appstore")}</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
