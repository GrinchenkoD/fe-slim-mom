import { useDevice } from '../../hooks/useDevice';
import Banana from '../../images/banana.png';
import Leafs from '../../images/leafs.png';
import Vector from '../../images/vector.png';
import Strawberry from '../../images/strawberry.png';
import BananaTab from '../../images/bananatab.png';
import LeafsTab from '../../images/leafstab.png';
import VectorTab from '../../images/vectortab.png';
import StrawberryTab from '../../images/strawberrytab.png';

import styles from './Background.module.css';

const Background = () => {
  const { isDesctopDevice, isTabletDevice } = useDevice();

  return (
    <div>
      {(isTabletDevice && (
        <div>
          <img className={styles.vector} src={VectorTab} alt='' />
          <img className={styles.banana} src={BananaTab} alt='' />
          <img className={styles.strawberry} src={StrawberryTab} alt='' />
          <img className={styles.leafs} src={LeafsTab} alt='' />
        </div>
      )) ||
        (isDesctopDevice && (
          <div>
            <img className={styles.vector} src={Vector} alt='' />
            <img className={styles.banana} src={Banana} alt='' />
            <img className={styles.strawberry} src={Strawberry} alt='' />
            <img className={styles.leafs} src={Leafs} alt='' />
          </div>
        ))}
    </div>
  );
};

export default Background;
