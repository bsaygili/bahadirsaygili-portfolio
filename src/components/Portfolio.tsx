import { useI18n } from "../i18n/I18nProvider";

export default function Portfolio() {
  const { t } = useI18n();
  return (
    <section className="portfolio section" id="portfolio">
      {" "}
      <h2 className="section__title">{t("portfolio.title")}</h2>{" "}
      <span className="section__subtitle">{t("portfolio.subtitle")}</span>{" "}
      <div className="portfolio__container container swiper">
        {" "}
        <div className="swiper-wrapper">
          {" "}
          {/* PORTFOLIO 1 */}{" "}
          <div className="portfolio__content grid swiper-slide">
            {" "}
            <img
              src="assets/images/portfolio/budgettracker.png"
              alt="Budget Tracker"
              className="portfolio__img"
            />{" "}
            {/* buraya resim gelecek */}{" "}
            <div className="portfolio__data">
              {" "}
              <h3 className="portfolio__title">Budget Tracker App</h3>{" "}
              <p className="portfolio__description">
                {" "}
                This app let you track your budget. <br /> Built with: <br />{" "}
                React, React-Context, MongoDb{" "}
              </p>{" "}
              <a
                href="https://github.com/bsaygili/budget-tracker-app"
                target="_blank"
                className="button button--flex button--small portfolio__button"
                rel="noopener"
              >
                Github
                <i className="uil uil-github button__icon" />
              </a>{" "}
            </div>{" "}
          </div>{" "}
          {/* PORTFOLIO 2 */}{" "}
          <div className="portfolio__content grid swiper-slide">
            {" "}
            <img
              src="assets/images/portfolio/ihmg-health-company.png"
              alt="IHMG Website"
              className="portfolio__img"
            />{" "}
            {/* buraya resim gelecek */}{" "}
            <div className="portfolio__data">
              {" "}
              <h3 className="portfolio__title">IHMG Health Co.</h3>{" "}
              <p className="portfolio__description">
                {" "}
                This website for health company and includes videos for
                background. It has about, projects, solutions sections. <br />
                Built with: <br /> React, JavaScript, HTML, CSS{" "}
              </p>{" "}
              <a
                href="#"
                className="button button--flex button--small portfolio__button"
              >
                Github
                <i className="uil uil-github button__icon" />
              </a>{" "}
            </div>{" "}
          </div>{" "}
          {/* PORTFOLIO 3 */}{" "}
          <div className="portfolio__content grid swiper-slide">
            {" "}
            <img
              src="assets/images/portfolio/stream-app.gif"
              alt="Stream-Live App"
              className="portfolio__img"
            />{" "}
            {/* buraya resim gelecek */}{" "}
            <div className="portfolio__data">
              {" "}
              <h3 className="portfolio__title">Gamer Broadcast App</h3>{" "}
              <p className="portfolio__description">
                {" "}
                It is a live broadcast application. Users can regiser with
                google account. Registered users can watch stream or open to
                live stream. Besides users can add, edit or delete their
                streams. <br /> Built with: <br /> React, React-Redux, HTML,
                JavaScript, Semantic-UI, OBS (Open Broadcaster Software), Google
                Auth.{" "}
              </p>{" "}
              <a
                href="https://github.com/bsaygili/broad_cast-app"
                className="button button--flex button--small portfolio__button"
              >
                Github
                <i className="uil uil-github button__icon" />
              </a>{" "}
            </div>{" "}
          </div>{" "}
          {/* PORTFOLIO 4 */}{" "}
          <div className="portfolio__content grid swiper-slide">
            {" "}
            <img
              src="assets/images/portfolio/search-video-app.png"
              alt="Youtube Video Search App"
              className="portfolio__img"
            />{" "}
            {/* buraya resim gelecek */}{" "}
            <div className="portfolio__data">
              {" "}
              <h3 className="portfolio__title">Video Search on Youtube</h3>{" "}
              <p className="portfolio__description">
                {" "}
                Website adaptable to all devices. A tinny application for
                searching videos on youtube. This app let you look for videos
                and to list that has five items. Vidoes come from youtube and
                also you can watch, play or pause it. <br /> Built with: <br />{" "}
                HTML, CSS, Javascript, React, React-Hooks, Semantic-UI,
                Youtube-Api.{" "}
              </p>{" "}
              <a
                href="https://github.com/bsaygili/youtube-search-react-app"
                className="button button--flex button--small portfolio__button"
              >
                Github
                <i className="uil uil-github button__icon" />
              </a>{" "}
              <a
                href="https://searchvideoonyt.netlify.app/"
                target="_blank"
                className="button button--flex button--small portfolio__button"
                rel="noopener"
              >
                Live Demo
                <i className="uil uil-globe button__icon" />
              </a>{" "}
            </div>{" "}
          </div>{" "}
          {/* PORTFOLIO 5 */}{" "}
          <div className="portfolio__content grid swiper-slide">
            {" "}
            <img
              src="assets/images/portfolio/search-images-app.png"
              alt="Search Images"
              className="portfolio__img"
            />{" "}
            {/* buraya resim gelecek */}{" "}
            <div className="portfolio__data">
              {" "}
              <h3 className="portfolio__title">
                Image Search on unsplash.com
              </h3>{" "}
              <p className="portfolio__description">
                {" "}
                A little application for searching pictures on unsplash.com.
                This app let you look for pictures and to list that has ten
                items. Images come from unsplash. <br /> Built with: <br />{" "}
                HTML, CSS, Javascript, React, Semantic-UI, unsplash-api.{" "}
              </p>{" "}
              <a
                href="https://github.com/bsaygili/search-images-app"
                target="_blank"
                className="button button--flex button--small portfolio__button"
                rel="noopener"
              >
                Github
                <i className="uil uil-github button__icon" />
              </a>{" "}
              <a
                href="https://imagesearchunsplash.netlify.app/"
                target="_blank"
                className="button button--flex button--small portfolio__button"
                rel="noopener"
              >
                Live Demo
                <i className="uil uil-globe button__icon" />
              </a>{" "}
            </div>{" "}
          </div>{" "}
          {/* PORTFOLIO 6 */}{" "}
          <div className="portfolio__content grid swiper-slide">
            {" "}
            <img
              src="assets/images/portfolio/cyber-security-dashboard.png"
              alt="Wallids Cyber Security"
              className="portfolio__img"
            />{" "}
            {/* buraya resim gelecek */}{" "}
            <div className="portfolio__data">
              {" "}
              <h3 className="portfolio__title">
                {" "}
                DashBoard - Cyber Securtiy Admin Panel{" "}
              </h3>{" "}
              <p className="portfolio__description">
                {" "}
                A dashboard is for admin who tracks cyber attacks from unknown
                sources. User can easily understand data from graphics and can
                be classified according to their security level. <br /> Built
                with: <br /> React, Material-UI, ReactCharts, Javascript, HTML,
                CSS.{" "}
              </p>{" "}
              <a
                href="https://github.com/bsaygili/wallids-dashboard"
                className="button button--flex button--small portfolio__button"
              >
                Github
                <i className="uil uil-github button__icon" />
              </a>{" "}
            </div>{" "}
          </div>{" "}
          {/* PORTFOLIO 7 */}{" "}
          <div className="portfolio__content grid swiper-slide">
            {" "}
            <img
              src="assets/images/portfolio/weather-forecast-extension.png"
              alt="Weather Forecast Extension"
              className="portfolio__img"
            />{" "}
            {/* buraya resim gelecek */}{" "}
            <div className="portfolio__data">
              {" "}
              <h3 className="portfolio__title">
                {" "}
                Chrome Extension: Daily Weather Forecast{" "}
              </h3>{" "}
              <p className="portfolio__description">
                {" "}
                I developed a Chrome extension. It shows the daily weather
                conditions according to the entered city name. I had a lot of
                fun coding. <br /> Built with: <br />
                Javascript, HTML, CSS, OpenWeatherMap Api{" "}
              </p>{" "}
              <a
                href="https://github.com/bsaygili/weather-forecast-chrome-extensions"
                className="button button--flex button--small portfolio__button"
              >
                Github
                <i className="uil uil-github button__icon" />
              </a>{" "}
            </div>{" "}
          </div>{" "}
          {/* PORTFOLIO 8 */}{" "}
          <div className="portfolio__content grid swiper-slide">
            {" "}
            <img
              src="assets/images/portfolio/weather-forecast.png"
              alt="Weather Forecast"
              className="portfolio__img"
            />{" "}
            {/* buraya resim gelecek */}{" "}
            <div className="portfolio__data">
              {" "}
              <h3 className="portfolio__title">Daily Weather Forecast</h3>{" "}
              <p className="portfolio__description">
                {" "}
                I developed a weather forecast application. It shows the daily
                weather conditions according to the entered city name. <br />{" "}
                Built with: <br />
                React, Javascript, HTML, CSS, OpenWeatherMap Api{" "}
              </p>{" "}
              <a
                href="https://github.com/bsaygili/weather-forecast-app"
                className="button button--flex button--small portfolio__button"
              >
                Github
                <i className="uil uil-github button__icon" />
              </a>{" "}
              <a
                href="https://dailyweatherforecast.netlify.app/"
                target="_blank"
                className="button button--flex button--small portfolio__button"
                rel="noopener"
              >
                Live Demo
                <i className="uil uil-globe button__icon" />
              </a>{" "}
            </div>{" "}
          </div>{" "}
          {/* PORTFOLIO 9 */}{" "}
          <div className="portfolio__content grid swiper-slide">
            {" "}
            <img
              src="assets/images/portfolio/starbucks-clone-css.png"
              alt="Starbucks Clone"
              className="portfolio__img"
            />{" "}
            {/* buraya resim gelecek */}{" "}
            <div className="portfolio__data">
              {" "}
              <h3 className="portfolio__title">Starbuks CSS Clone</h3>{" "}
              <p className="portfolio__description">
                {" "}
                In this project, i try to develop my responsive design and CSS
                habits. Firstly, i watch tutorials and than close it. So, i am
                coding myself entire project. <br /> Built with: <br />
                Javascript, HTML, CSS.{" "}
              </p>{" "}
              <a
                href="https://github.com/bsaygili/starbucks-clone"
                className="button button--flex button--small portfolio__button"
              >
                Github
                <i className="uil uil-github button__icon" />
              </a>{" "}
            </div>{" "}
          </div>{" "}
          {/* PORTFOLIO 10 */}{" "}
          <div className="portfolio__content grid swiper-slide">
            {" "}
            <img
              src="assets/images/portfolio/qr-code-genarator.png"
              alt="QR Code Generator"
              className="portfolio__img"
            />{" "}
            {/* buraya resim gelecek */}{" "}
            <div className="portfolio__data">
              {" "}
              <h3 className="portfolio__title">QR Code Generator</h3>{" "}
              <p className="portfolio__description">
                {" "}
                In this project, user enter text or URL. And application convert
                QR Code using qr Code generator api. Very basic application but
                it helps me to how to access api or to handle api-request
                without axios. Bonus: i build extension which is usable from
                github(download extension-pack). Enjoy it! <br /> Built with:{" "}
                <br />
                React, javascript, HTML, CSS,{" "}
              </p>{" "}
              <a
                href="https://github.com/bsaygili/qrCode-generator-app_and_extension"
                className="button button--flex button--small portfolio__button"
              >
                Github
                <i className="uil uil-github button__icon" />
              </a>{" "}
            </div>{" "}
          </div>{" "}
          {/* PORTFOLIO 1 */}{" "}
          <div className="portfolio__content grid swiper-slide">
            {" "}
            <img
              src="assets/images/portfolio/home-library.png"
              alt="My Home Library"
              className="portfolio__img"
            />{" "}
            {/* buraya resim gelecek */}{" "}
            <div className="portfolio__data">
              {" "}
              <h3 className="portfolio__title">My Home Library</h3>{" "}
              <p className="portfolio__description">
                {" "}
                this project shows a Library to user and makes a get-request
                from example-data API. On the oher hand this app allows to user
                add or remove books to/from favorites list. <br /> Built with:{" "}
                <br />
                React, axios, javascript, HTML, CSS,{" "}
              </p>{" "}
              <a
                href="https://github.com/bsaygili/home-library-app"
                className="button button--flex button--small portfolio__button"
              >
                Github
                <i className="uil uil-github button__icon" />
              </a>{" "}
            </div>{" "}
          </div>{" "}
          {/* PORTFOLIO 12 */}{" "}
          <div className="portfolio__content grid swiper-slide">
            {" "}
            <img
              src="assets/images/portfolio/portfolio-3.jfif"
              alt=""
              className="portfolio__img"
            />{" "}
            {/* buraya resim gelecek */}{" "}
            <div className="portfolio__data">
              {" "}
              <h3 className="portfolio__title">E-commerce Website</h3>{" "}
              <p className="portfolio__description">
                {" "}
                Website adaptable to all devices, with ui components and
                animated interactions{" "}
              </p>{" "}
              <a
                href="#"
                className="button button--flex button--small portfolio__button"
              >
                Github
                <i className="uil uil-github button__icon" />
              </a>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="swiper-button-next">
          {" "}
          <i className="uil uil-angle-right-b swiper-portfolio-icon" />{" "}
        </div>{" "}
        <div className="swiper-button-prev">
          {" "}
          <i className="uil uil-angle-left-b swiper-portfolio-icon" />{" "}
        </div>{" "}
        <div className="swiper-pagination" />{" "}
      </div>{" "}
    </section>
  );
}
