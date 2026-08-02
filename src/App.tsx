import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AOS from "aos";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Qualifications from "./components/Qualifications";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import OfferBanner from "./components/OfferBanner";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ShowcasePage from "./pages/ShowcasePage";
import ArticlePage from "./pages/ArticlePage";
import ScrollToHash from "./components/ScrollToHash";
import { useI18n } from "./i18n/I18nProvider";

function HomePage() {
  const { t } = useI18n();
  useEffect(() => {
    const cleanups: Array<() => void> = [];
    document.querySelectorAll<HTMLElement>("[data-target]").forEach((tab) => {
      const activate = () => {
        document
          .querySelectorAll("[data-content], [data-target]")
          .forEach((node) => node.classList.remove("qualification__active"));
        const target = tab.dataset.target;
        if (target)
          document
            .querySelector(target)
            ?.classList.add("qualification__active");
        tab.classList.add("qualification__active");
      };
      tab.addEventListener("click", activate);
      cleanups.push(() => tab.removeEventListener("click", activate));
    });
    document.querySelector("#work")?.classList.remove("qualification__active");

    const onScroll = () => {
      document
        .querySelector("#header")
        ?.classList.toggle("scroll-header", scrollY >= 80);
      document
        .querySelector("#scroll-up")
        ?.classList.toggle("show-scroll", scrollY >= 560);
      document
        .querySelectorAll<HTMLElement>("section[id]")
        .forEach((section) => {
          const active =
            scrollY > section.offsetTop - 50 &&
            scrollY <= section.offsetTop - 50 + section.offsetHeight;
          document
            .querySelector(`.nav__menu a[href*="${section.id}"]`)
            ?.classList.toggle("active-link", active);
        });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    AOS.init({ duration: 800, once: true });

    const swipers = [
      new Swiper(".portfolio__container", {
        modules: [Navigation, Pagination],
        cssMode: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".portfolio__container .swiper-pagination",
          clickable: true,
        },
      }),
      new Swiper(".testimonial__container", {
        modules: [Pagination],
        loop: true,
        grabCursor: true,
        spaceBetween: 60,
        pagination: {
          el: ".swiper-pagination-testimonial",
          clickable: true,
          dynamicBullets: true,
        },
        breakpoints: { 600: { slidesPerView: 2 } },
      }),
    ];

    return () => {
      window.removeEventListener("scroll", onScroll);
      cleanups.forEach((cleanup) => cleanup());
      swipers.forEach((swiper) => swiper.destroy(true, true));
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>{t("seo.homeTitle")}</title>
        <meta name="description" content={t("seo.homeDescription")} />
        <link rel="canonical" href="https://www.bahadirsaygili.com/" />
        <meta property="og:title" content={t("seo.homeTitle")} />
        <meta property="og:description" content={t("seo.homeDescription")} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.bahadirsaygili.com/" />
      </Helmet>
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Skills />
        <Qualifications />
        <Services />
        <Portfolio />
        <OfferBanner />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <a
        href="#"
        className="scrollup"
        id="scroll-up"
        aria-label="Scroll to top"
      >
        <i className="uil uil-arrow-circle-up scrollup__icon" />
      </a>
    </>
  );
}

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/showcase" element={<ShowcasePage />} />
        <Route path="/showcase/articles/:slug" element={<ArticlePage />} />
      </Routes>
    </>
  );
}
