import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import classes from './Carousel.module.css';
import common from './Landing.module.css';

const Carousel = (props) => {
  return (
    <Fragment>
      <div className={classes.carouselContainer}>
        <div className={common.leftArrowBox}>
          <FontAwesomeIcon icon={faChevronLeft} className={common.arrowLeft} />
        </div>
        <div className={common.rightArrowBox}>
          <FontAwesomeIcon
            icon={faChevronRight}
            className={common.arrowRight}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Carousel;
