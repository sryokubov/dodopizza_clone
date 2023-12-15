import { Banner } from '..';

import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Banner />
      <div className='container'>
        <div className={styles.footer__apps}>
          <div className={styles.footer__apps_left}>
            <div className={styles.footer__apps_left_linkSection}>
              <span className={styles.footer__apps_left_linkSection_title}>
                Додо Пицца
              </span>
              <a className={styles.footer__apps_left_linkSection_link}>О нас</a>
              <a className={styles.footer__apps_left_linkSection_link}>
                Додо-книга
              </a>
              <a className={styles.footer__apps_left_linkSection_link}>
                Блог «Сила ума»
              </a>
              <a className={styles.footer__apps_left_linkSection_link}>
                Додо ИС
              </a>
            </div>
            <div className={styles.footer__apps_left_linkSection}>
              <span className={styles.footer__apps_left_linkSection_title}>
                Работа
              </span>
              <a className={styles.footer__apps_left_linkSection_link}>
                В пиццерии
              </a>
            </div>
            <div className={styles.footer__apps_left_linkSection}>
              <span className={styles.footer__apps_left_linkSection_title}>
                Партнерам
              </span>
              <a className={styles.footer__apps_left_linkSection_link}>
                Франшиза
              </a>
              <a className={styles.footer__apps_left_linkSection_link}>
                Инвестиции
              </a>
              <a className={styles.footer__apps_left_linkSection_link}>
                Поставщикам
              </a>
            </div>
            <div className={styles.footer__apps_left_linkSection}>
              <span className={styles.footer__apps_left_linkSection_title}>
                Это интересно
              </span>
              <a className={styles.footer__apps_left_linkSection_link}>
                Почему мы готовим без перчаток?
              </a>
              <a className={styles.footer__apps_left_linkSection_link}>
                Экскурсии и мастер-классы
              </a>
            </div>
          </div>
          <div className={styles.footer__apps_right}>
            <div className={styles.footer__apps_right_contact}>
              <div className={styles.footer__apps_right_contact_num}>
                <a href='tel:1168'>1168</a>
              </div>
              <span className={styles.footer__apps_right_contact_text}>
                Звонок бесплатный
              </span>
            </div>
            <a
              className={styles.footer__apps_right_mail_link}
              href='mailto:feedback@dodopizza.uz'
            >
              feedback@dodopizza.uz
            </a>
          </div>
        </div>
        <div className={styles.footer__info}>
          <div className={styles.footer__info_stats}>
            <div className={styles.footer__info_stats_revenue}>
              <span className={styles.footer__info_stats_revenue_num}>
                2 468 680 400 сум
              </span>
              <span className={styles.footer__info_stats_revenue_text}>
                Выручка узбекской сети в этом месяце. В прошлом —
                <span className={styles.footer__info_stats_revenue_text_money}>
                  5 036 755 950 сум
                </span>
              </span>
            </div>
            <div className={styles.footer__info_stats_revenue}>
              <span className={styles.footer__info_stats_revenue_num}>
                982 пиццерий
              </span>
              <span className={styles.footer__info_stats_revenue_text}>
                в 18 странах, от Великобритании до Нигерии
              </span>
            </div>
          </div>
        </div>
        <div className={styles.footer__social}>
          <div className={styles.footer__social_copyright}>
            <img
              className={styles.footer__social_copyright_img}
              src='/icons/copyright-logo.svg'
              alt='dodo_pizza'
            />
            <span className='copyright-text'>© 2023</span>
          </div>
          <div className={styles.footer__social_bottomLinks}>
            <a href='/tashkent/legal'>Правовая информация</a>
          </div>
          <div className={styles.footer__social_socialLinks}>
            <a className={styles.footer__social_socialLinks_logo} href='#'>
              <img src='/icons/facebook-link.svg' alt='facebook link' />
            </a>
            <a className={styles.footer__social_socialLinks_logo} href='#'>
              <img src='/icons/instagram-link.svg' alt='instagram link' />
            </a>
            <a className={styles.footer__social_socialLinks_logo} href='#'>
              <img src='/icons/youtube-link.svg' alt='youtube link' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
