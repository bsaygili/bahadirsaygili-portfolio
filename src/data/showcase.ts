import { fourLanguageApps } from "./four_language_apps";
import { samsungTizenArticle } from "./ip_tV_tizen_tv_os";
import { localTvArticle } from "./localTV_article";
import { migratingFromHTMLToReactArticle } from "./migrating_from_HTML_to_react";
import { Application, Article } from "./types";
import { vitestArticle } from "./vitest_article";

export const articles: Article[] = [
  samsungTizenArticle,
  localTvArticle,
  migratingFromHTMLToReactArticle,
  fourLanguageApps,
  vitestArticle,
];

export const applications: Application[] = [
  {
    title: "Altınbaşak Çocuk Akademi",
    description:
      "A React Native application for managing student records, attendance, and communication with parents.",
    image:
      "https://play-lh.googleusercontent.com/YFQXQxpcvLe6pMxul8-15NgL6-r-S5tX2eyD7cUj0mNZE7iZzHaKEm19YdSOXB1K1R5YpqTgUpu1nRv8StKGHw=w240-h480-rw",
    technologies: ["React Native", "API", "TypeScript"],
    appStoreUrl:
      "https://apps.apple.com/tr/app/alt%C4%B1nba%C5%9Fak-%C3%A7ocuk-akademi/id6753710494",
    playstoreUrl:
      "https://play.google.com/store/apps/details?id=com.altinbasakcocukakademi",
  },
  {
    title: "Local TV",
    description:
      "A React Native application for streaming local TV channels with a focus on performance and user experience.",
    image: "/assets/images/portfolio/local_tv.png",
    technologies: ["React Native", "API", "TypeScript"],
  },
  {
    title: "Weather Forecast",
    description:
      "A responsive weather experience focused on quick, readable forecasts.",
    image: "/assets/images/portfolio/weather-forecast.png",
    technologies: ["React", "API", "CSS"],
  },
  {
    title: "Budget Tracker",
    description:
      "A simple application for tracking spending and keeping personal budgets visible.",
    image: "/assets/images/portfolio/budgettracker.png",
    technologies: ["TypeScript", "React", "Local Storage"],
  },
  {
    title: "Home Library",
    description:
      "A personal library interface for organizing books and favorites.",
    image: "/assets/images/portfolio/home-library.png",
    technologies: ["React", "JavaScript", "CSS"],
  },
];
