import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import Image from '@theme/IdealImage';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.topBanner}>
          <div className={styles.BannerText}>
            <Heading as="h1">
              Embrace life: immerse yourself in the world of style!
            </Heading>
            <p>
              Welcome to our women's only platform, where you can explore global trends, lifestyle, fashion, art and more. Join us on our fashion journey and interact with us to discover the fascination of this colourful world. Whether you are looking for the latest fashion trends or exploring the little blessings in life, we will be your most intimate partner. Here, every woman can find her own style and shape a better life together.
            </p>
            <div className={styles.share}>
              <a href=""><span className="fa-brands--facebook-f"></span></a>
              <a href=""><span className="bi--twitter-x"></span></a>
              <a href=""><span className="bxl--instagram"></span></a>
              <a href=""><span className="mingcute--tiktok-fill"></span></a>
              <a href=""><span className="fontisto--youtube-play"></span></a>
            </div>
            <div className={styles.buttons}>
              <Link
                className={styles.button1}
                to="/info/category/submission-entrance">
                Submission Entrance
              </Link>
            </div>
            <div className={styles.buttons}>
              <Link
                className={styles.button2}
                to="/info/category/website-information">
                About Us - 5min
              </Link>
            </div>
          </div>
          <div className={styles.BannerHot}>
            <div className={styles.media}>
              <Link to="/">
                <Image img="https://pic.ladysvoa.com/upload/2024916/BR1yTX8UAoJOA4rUQeXn3.jpeg" alt="Why Ovarian Cancer Is Late Stage Once Detected" />
                <Heading as="h2">
                Why Ovarian Cancer Is Late Stage Once Detected
                </Heading>
              </Link>
            </div>
            <div className={styles.mediaText}>
              <i>●</i>
              <Link to="/sharing/experience/2024-10-16-you-can-put-some-conditioner-in-the-water-when-youre-mopping">
                <Heading as="h3">
                You can put some conditioner in the water when you're mopping.
                </Heading>
              </Link>
            </div>
            <div className={styles.mediaText}>
              <i>●</i>
              <Link to="/health/2024/10/16/fibroids-have-a-high-rate-of-recurrence-how-can-they-be-avoided">
                <Heading as="h3">
                Fibroids have a high rate of recurrence, how can they be avoided?
                </Heading>
              </Link>
            </div>
            <div className={styles.mediaText}>
              <i>●</i>
              <Link to="/ask/2024/10/16/can-women-with-uterine-fibroids-eat-apples">
                <Heading as="h3">
                Can Women with Uterine Fibroids Eat Apples?
                </Heading>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main className={styles.main}>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
