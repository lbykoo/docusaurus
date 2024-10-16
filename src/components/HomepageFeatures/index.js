import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import Image from '@theme/IdealImage';

const TuiList = [
  {
    title: 'Uterine Fibroids Treatment, New Choices Led by Innovative Technology',
    img: 'https://pic.ladysvoa.com/upload/2024916/FOEOV4ix4KKIWCbooHNfN.jpeg',
    link: '/news/2024/10/16/uterine-fibroids-treatment-new-choices-led-by-innovative-technology',
    des:`Uterine fibroids, as a kind of benign tumour commonly found in women of childbearing age, are not life-threatening in most cases, but the irregular menstruation, abdominal pain, frequent urination and other symptoms caused by fibroids have really brought troubles to the life of many women. `
  },
  
];
const FeatureList = [
  {
    title: 'Full-body exercises you can do before giving birth',
    link: '/parenting/2024/10/16/full-body-exercises-you-can-do-before-giving-birth',
  },
  
];
function Tui({ title, img, link,des }) {
  return (
    <div className={styles.imtems}>
      <div className={styles.img}>
        <Link to={link}>
          <Image img={img} alt={title} />
        </Link>
      </div>
      <div className={styles.text}>
        <Link to={link}>
                <Heading as="h3">
                {title}
                </Heading>
              </Link>
              <p>{des}</p>
        </div>      
    </div>
  );
}
function Feature({ title, link }) {
  return (
    <Link to={link}>{title}</Link>
  );
}
export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={styles.zuo}>
            <h2>推荐</h2>
            <div className={styles.item}>
              {TuiList.map((props, idx) => (
                <Tui key={idx} {...props} />
              ))}
            </div>
          </div>
          <div className={styles.you}>
            <h2>关注热点</h2>
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}