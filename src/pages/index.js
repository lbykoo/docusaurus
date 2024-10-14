import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate from '@docusaurus/Translate';
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
              <Translate description="The homepage main h1">
                Embrace life: immerse yourself in the world of style!
              </Translate>
            </Heading>
            <p>
              <Translate description="The homepage main p">
                Welcome to our women's only platform, where you can explore global trends, lifestyle, fashion, art and more. Join us on our fashion journey and interact with us to discover the fascination of this colourful world. Whether you are looking for the latest fashion trends or exploring the little blessings in life, we will be your most intimate partner. Here, every woman can find her own style and shape a better life together.
              </Translate>
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
                <Translate description="The homepage main btn1">
                  Submission Entrance
                </Translate>
              </Link>
            </div>
            <div className={styles.buttons}>
              <Link
                className={styles.button2}
                to="/info/category/website-information">
                <Translate description="The homepage main btn2">
                  About Us - 5min
                </Translate> ⏱️
              </Link>
            </div>
          </div>
          <div className={styles.BannerHot}>
            <div className={styles.media}>
              <Link to="/">
                <Image img="https://ichef.bbci.co.uk/news/1536/cpsprodpb/d99d/live/21523c00-76cf-11ef-b02d-c5f3b724a1ea.png.webp" alt="" />
                <Heading as="h2">
                  <Translate description="The homepage main h2">
                    Submission Entrancessdf
                  </Translate>
                </Heading>
              </Link>
            </div>
            <div className={styles.mediaText}>
              <i>●</i>
              <Link to="">
                <Heading as="h3">
                  <Translate description="The homepage main h3-1">
                    Submission Entrancessdf3-1
                  </Translate>
                </Heading>
              </Link>
            </div>
            <div className={styles.mediaText}>
              <i>●</i>
              <Link to="">
                <Heading as="h3">
                  <Translate description="The homepage main h3-2">
                    Submission Entrancessdf3-2
                  </Translate>
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
