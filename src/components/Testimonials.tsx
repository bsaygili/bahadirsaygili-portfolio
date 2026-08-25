import { useI18n } from "../i18n/I18nProvider";

export default function Testimonials() {
  const { t } = useI18n();
  return (
    <section className="testimonial section">
      <h2 className="section__title">{t("testimonial.title")}</h2>
      <span className="section__subtitle">{t("testimonial.subtitle")}</span>
      <div className="testimonial__container container swiper">
        <div className="swiper-wrapper">
          {/*TESTIMONIAL 01  */}
          <div className="testimonial__content swiper-slide">
            <div className="testimonial__data">
              <div className="testimonial__header">
                <img
                  src="/assets/images//friends/rifatcangurbuz.jfif"
                  alt=""
                  className="testimonial__img"
                />
                <div>
                  <h3 className="testimonial__name">Rıfat Can GÜRBÜZ</h3>
                  <span className="testimonial__client">Co-worker</span>
                </div>
              </div>
              <div>
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
              </div>
            </div>
            <p className="testimonial__description">
              Bahadır has an excellent perspective. Working together is very
              exciting. He is very talented and highly motivated.
            </p>
          </div>
          {/*TESTIMONIAL 02  */}
          <div className="testimonial__content swiper-slide">
            <div className="testimonial__data">
              <div className="testimonial__header">
                <img
                  src="/assets/images/friends/batuhanyilmaz.jfif"
                  alt=""
                  className="testimonial__img"
                />
                <div>
                  <h3 className="testimonial__name">A. Batuhan YILMAZ</h3>
                  <span className="testimonial__client">Co-worker</span>
                </div>
              </div>
              <div>
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
              </div>
            </div>
            <p className="testimonial__description">
              Bahadır has a strong communication and a very broad vision. He is
              very enthusiastic about learning new technologies.
            </p>
          </div>
          {/*TESTIMONIAL 03  */}
          <div className="testimonial__content swiper-slide">
            <div className="testimonial__data">
              <div className="testimonial__header">
                <img
                  src="/assets/images/friends/bugracelikcan.jfif"
                  alt=""
                  className="testimonial__img"
                />
                <div>
                  <h3 className="testimonial__name">Buğra ÇELİKCAN</h3>
                  <span className="testimonial__client">Co-worker</span>
                </div>
              </div>
              <div>
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
              </div>
            </div>
            <p className="testimonial__description">
              Bahadır has an endless energy. He is a person who always obeys the
              rules in his work. Working hours are just numbers for him.
            </p>
          </div>
          {/*TESTIMONIAL 04  */}
          <div className="testimonial__content swiper-slide">
            <div className="testimonial__data">
              <div className="testimonial__header">
                <img
                  src="/assets/images/friends/burakcelik.jfif"
                  alt=""
                  className="testimonial__img"
                />
                <div>
                  <h3 className="testimonial__name">Burak ÇELİK</h3>
                  <span className="testimonial__client">Co-worker</span>
                </div>
              </div>
              <div>
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
              </div>
            </div>
            <p className="testimonial__description">
              Bahadır has a different perspective on design. Someone who writes
              Javascript with passion. Coding is not just a job for him, it's a
              dedication.
            </p>
          </div>
          {/*TESTIMONIAL 05  */}
          <div className="testimonial__content swiper-slide">
            <div className="testimonial__data">
              <div className="testimonial__header">
                <img
                  src="/assets/images/friends/oguzkocalar.jfif"
                  alt=""
                  className="testimonial__img"
                />
                <div>
                  <h3 className="testimonial__name">Oğuz KOCALAR</h3>
                  <span className="testimonial__client">Co-worker</span>
                </div>
              </div>
              <div>
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
              </div>
            </div>
            <p className="testimonial__description">
              Bahadır helped me a lot as long as we worked together. We learned
              a lot from each other about production management. Personnel
              management and leadership are among its leading features.
            </p>
          </div>
          {/*TESTIMONIAL 06  */}
          <div className="testimonial__content swiper-slide">
            <div className="testimonial__data">
              <div className="testimonial__header">
                <img
                  src="/assets/images/friends/ozguratasoy.jpg"
                  alt=""
                  className="testimonial__img"
                />
                <div>
                  <h3 className="testimonial__name">Özgür ATASOY</h3>
                  <span className="testimonial__client">Former Manager</span>
                </div>
              </div>
              <div>
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
              </div>
            </div>
            <p className="testimonial__description">
              What I see as a manager is that; He is someone who tries to do the
              given work on time and gives timely feedback. His willingness and
              appetite in his duties makes working together enjoyable.
            </p>
          </div>
          {/*TESTIMONIAL 07  */}
          <div className="testimonial__content swiper-slide">
            <div className="testimonial__data">
              <div className="testimonial__header">
                <img
                  src="/assets/images/friends/safaerden.jfif"
                  alt=""
                  className="testimonial__img"
                />
                <div>
                  <h3 className="testimonial__name">Safa ERDEN</h3>
                  <span className="testimonial__client">Team Leader</span>
                </div>
              </div>
              <div>
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
              </div>
            </div>
            <p className="testimonial__description">
              Bahadır is a team player. His support was always on point and on
              time in the missing points in the team. He is highly communicative
              and has strong dialogues.
            </p>
          </div>
          {/*TESTIMONIAL 08  */}
          <div className="testimonial__content swiper-slide">
            <div className="testimonial__data">
              <div className="testimonial__header">
                <img
                  src="/assets/images/friends/tarikagridag.jpg"
                  alt=""
                  className="testimonial__img"
                />
                <div>
                  <h3 className="testimonial__name">L.Tarık AĞRIDAĞ</h3>
                  <span className="testimonial__client">Co-worker</span>
                </div>
              </div>
              <div>
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
                <i className="uil uil-star testimonial__icon-star" />
              </div>
            </div>
            <p className="testimonial__description">
              He has a great deal of hard will and determination in terms of
              self dicipline. Besides He has made me gained a lot of experiences
              about life and occupation.
            </p>
          </div>
        </div>
        <div className="swiper-pagination swiper-pagination-testimonial" />
      </div>
    </section>
  );
}
