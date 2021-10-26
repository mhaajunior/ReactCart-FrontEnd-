import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import classes from './RatingStar.module.css';

const RatingStar = (props) => {
  const { index, rating } = props;

  return (
    <FontAwesomeIcon
      icon={faStar}
      className={index <= rating ? classes.yellowStar : classes.greyStar}
    />
  );
};

export default RatingStar;
