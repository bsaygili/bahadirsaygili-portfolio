export default function OfferBanner() {
  return (
    <section className="project section">
      <div className="project__bg">
        <div className="project__container container grid">
          <div className="project__data">
            <h2 className="project__title">You have a new project.</h2>
            <p className="project__description">Let's make it happen.</p>
            <a href="#contact" className="button button--flex button--white">
              Contact Me
              <i className="uil uil-message project__icon button__icon" />
            </a>
          </div>
          <img
            src="/assets/images/profile/project-1.png"
            alt="By CrisNYCa - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=94532194"
            className="project__img"
          />
        </div>
      </div>
    </section>
  );
}
