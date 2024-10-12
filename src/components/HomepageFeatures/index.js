import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: `The Art of Self-Care: Prioritizing Your Well-being in a Busy Lifestyle`,
    des: `In today's fasalancing work, hobbies, gaming, family, friends, social life, and nature...`,
    img: `https://demo.tagdiv.com/newspaper_world_matters_pro/wp-content/uploads/2023/06/40-1-696x580.jpg`,
    url: `https://demo.tagdiv.com/`
  },
  {
    title: `The Art of Self-Care: Prioritizing Your Well-being in a Busy Lifestyle`,
    des: `In today's fast-paced society, finding a harmonious work-life balance has become an essential pursuit. Balancing work, hobbies, gaming, family, friends, social life, and nature...`,
    img: `https://demo.tagdiv.com/newspaper_world_matters_pro/wp-content/uploads/2023/06/40-1-696x580.jpg`,
    url: `https://demo.tagdiv.com/`
  },
  {
    title: `The Art of Self-Care: Prioritizing Your Well-being in a Busy Lifestyle`,
    des: `In today's fast-paced society, finding a harmonious work-life balance has become an essential pursuit. Balancing work, hobbies, gaming, family, friends, social life, and nature...`,
    img: `https://demo.tagdiv.com/newspaper_world_matters_pro/wp-content/uploads/2023/06/40-1-696x580.jpg`,
    url: `https://demo.tagdiv.com/`
  },
  {
    title: `The Art of Self-Care: Prioritizing Your Well-being in a Busy Lifestyle`,
    des: `In today's fast-paced society, finding a harmonious work-life balance has become an essential pursu,it. Balancing work, hobbies, gaming, family, friends, social life, and nature...`,
    img: `https://demo.tagdiv.com/newspaper_world_matters_pro/wp-content/uploads/2023/06/40-1-696x580.jpg`,
    url: `https://demo.tagdiv.com/`
  },
  {
    title: `The Art of Self-Care: Prioritizing Your Well-being in a Busy Lifestyle`,
    des: `In today's fast-paced society, finding a harmonious work-life balance has become an essential pursuit. Balancing work, hobbies, gaming, family, friends, social life, and nature...`,
    img: `https://demo.tagdiv.com/newspaper_world_matters_pro/wp-content/uploads/2023/06/40-1-696x580.jpg`,
    url: `https://demo.tagdiv.com/`
  },
  {
    title: `The Art of Self-Care: Prioritizing Your Well-being in a Busy Lifestyle`,
    des: `In today's fast-paced society, finding a harmonious work-life balance has become an essential pursuit. Balancing work, hobbies, gaming, family, friends, social life, and nature...`,
    img: `https://demo.tagdiv.com/newspaper_world_matters_pro/wp-content/uploads/2023/06/40-1-696x580.jpg`,
    url: `https://demo.tagdiv.com/`
  },
  {
    title: `The Art of Self-Care: Prioritizing Your Well-being in a Busy Lifestyle`,
    des: `In today's fast-paced society, finding a harmonious work-life balance has become an essential pursuit. Balancing work, hobbies, gaming, family, friends, social life, and nature...`,
    img: `https://demo.tagdiv.com/newspaper_world_matters_pro/wp-content/uploads/2023/06/40-1-696x580.jpg`,
    url: `https://demo.tagdiv.com/`
  },
  {
    title: `The Art of Self-Care: Prioritizing Your Well-being in a Busy Lifestyle`,
    des: `In today's fast-paced society, finding a harmonious work-life balance has become an essential pursuit. Balancing work, hobbies, gaming, family, friends, social life, and nature...`,
    img: `https://demo.tagdiv.com/newspaper_world_matters_pro/wp-content/uploads/2023/06/40-1-696x580.jpg`,
    url: `https://demo.tagdiv.com/`
  },  
];

function Feature({ title, des, img, url }) {
  return (
    <div className={styles.item}>
      <div className={styles.img}>
      <Link to={url}><img src={img} alt={title} /></Link>
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
