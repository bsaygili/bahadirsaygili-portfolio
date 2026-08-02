import Header from "../components/Header";
import Footer from "../components/Footer";
import { applications, articles } from "../data/showcase";
import { Helmet } from "react-helmet-async";
import { useI18n } from "../i18n/I18nProvider";
import { Link } from "react-router-dom";

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
