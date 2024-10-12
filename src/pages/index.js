import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.topBanner}>
          <div className={styles.BannerText}>
            <Heading as="h1">Discover the World: Engage, Stay Informed</Heading>
            <p>Welcome to our dynamic news platform, where you can explore a diverse range of topics, from global news to lifestyle, fashion, art, and more. Join us on this exciting journey of discovery, engagement, and staying informed as we uncover the stories that shape our world.</p>
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
                About Us - 5min ⏱️
              </Link>
            </div>
          </div>
          <div className={styles.BannerHot}>
            <div className={styles.media}>
              <Link to="/">
                <img src="https://ichef.bbci.co.uk/news/1536/cpsprodpb/d99d/live/21523c00-76cf-11ef-b02d-c5f3b724a1ea.png.webp" alt="" />
                <Heading as="h2">Hezbollah leader says exploding device attacks crossed 'all red lines'</Heading>
              </Link>
            </div>
            <div className={styles.mediaText}>
              <i>●</i>
              <Link to="">
              <Heading as="h3">'We don’t know if our phones are safe': Lebanon on edgeWhy hundreds of Samsung workers are protesting in India</Heading>
              </Link>
            </div>
            <div className={styles.mediaText}>
              <i>●</i>
              <Link to="">
              <Heading as="h3">'We don’t know if our phones are safe': Lebanon on edgeWhy hundreds of Samsung workers are protesting in India</Heading>
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
