import { Link, Navigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { articles } from "../data/showcase";

export default function ArticlePage() {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);
  if (!article) return <Navigate to="/showcase" replace />;

  const canonical = `https://www.bahadirsaygili.com/showcase/articles/${article.slug}`;
  return (
    <>
      <Helmet>
        <title>{`${article.title} | Bahadır Saygılı`}</title>
        <meta name="description" content={article.excerpt} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
      </Helmet>
      <Header />
      <main className="article-page main">
        <article className="article-page__container container">
          <Link to="/showcase" className="article-page__back">
            <i className="uil uil-arrow-left" /> Yazılar ve uygulamalar
          </Link>
          <header className="article-page__header">
            <div className="article-card__meta">
              <time>{article.publishedAt}</time>
              <span>{article.readingTime}</span>
            </div>
            <h1>{article.title}</h1>
            <p>{article.excerpt}</p>
            <ul className="showcase__tags" aria-label="Yazı etiketleri">
              {article.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </header>
          <div className="article-page__content">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
