import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';
import Image from '@theme/IdealImage';
const FeatureList = [
  {
    title: <Translate>Hello</Translate>,
    des: <Translate>Hello1</Translate>,
    img: `https://demo.tagdiv.com/newspaper_world_matters_pro/wp-content/uploads/2023/06/40-1-696x580.jpg`,
    url: `https://demo.tagdiv.com/`
  },
  {
    title: <Translate>Hello2</Translate>,
    des: <Translate>Hello3</Translate>,
    img: `https://demo.tagdiv.com/newspaper_world_matters_pro/wp-content/uploads/2023/06/40-1-696x580.jpg`,
    url: `https://demo.tagdiv.com/`
  },
];

function Feature({ title, des, img, url }) {
  return (
    <div className={styles.item}>
      <div className={styles.img}>
      <Link to={url}><Image img={img} alt={title} /></Link>
      </div>
      <div className={styles.text}>
        <Heading as="h3"><Link to={url}>{title}</Link></Heading>
        <p>{des}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={clsx("container",styles.items)}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
