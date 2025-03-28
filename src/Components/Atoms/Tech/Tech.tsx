import { TechProps } from '../../../interfaces/interfaces';
import styles from './Tech.module.css'

const Tech: React.FC<TechProps>  = ({ tech }) => {
  return (
    <li className={styles.tech}>
      <img src={`https://skillicons.dev/icons?i=${tech}`} alt={tech} />
    </li>
  );
};

export default Tech;
