import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faTimesCircle,
  faShoppingCart,
  faSignal,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

import RatingStar from './RatingStar';

import { priceFormat, calPriceDiscount } from '../Helpers';
import classes from './Card.module.css';
import target from './Landing.module.css';

const Card = (props) => {
  const { id, list, idx, title, price, rating, image, status } = props;

  const [isHover, setIsHover] = useState(false);

  let cls, txt, pic;

  if (status === 'valid') {
    cls = classes.valid;
    txt = ' มีสินค้า';
    pic = <FontAwesomeIcon icon={faCheckCircle} />;
  } else {
    cls = classes.invalid;
    txt = ' ไม่มีสินค้า';
    pic = <FontAwesomeIcon icon={faTimesCircle} />;
  }

  const hadleMouseOver = () => {
    setIsHover(true);
    if (idx === 0) {
      $(`#${list} .${target.leftArrowBox}`).hide();
    } else if (idx === 4) {
      $(`#${list} .${target.rightArrowBox}`).hide();
    }
  };

  const hadleMouseOut = () => {
    setIsHover(false);
    if (idx === 0) {
      $(`#${list} .${target.leftArrowBox}`).show();
    } else if (idx === 4) {
      $(`#${list} .${target.rightArrowBox}`).show();
    }
  };

  return (
    <Fragment>
      <Link
        id={id}
        to={'/book/' + id}
        className={classes.card}
        onMouseEnter={hadleMouseOver}
        onMouseLeave={hadleMouseOut}
      >
        <div className={`${classes.status} ${cls}`}>
          {pic}
          {txt}
        </div>
        {isHover && (
          <div>
            <div className={`${classes.circleBtn} ${classes.heartBtn}`}>
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div className={`${classes.circleBtn} ${classes.statBtn}`}>
              <FontAwesomeIcon icon={faSignal} />
            </div>
          </div>
        )}
        <div className={classes.bookImageBox}>
          <img src={`/images/${image}`} alt="" className={classes.bookImage} />
        </div>
        {isHover && (
          <div className={classes.cartBtn}>
            <FontAwesomeIcon
              icon={faShoppingCart}
              flip="horizontal"
              className={classes.hoverIcon}
            />{' '}
            Add To Cart
          </div>
        )}
        <div className={classes.detailSection}>
          <div className={classes.ratingBox}>
            <div className={classes.stars}>
              {[1, 2, 3, 4, 5].map((index) => {
                return <RatingStar key={index} index={index} rating={rating} />;
              })}
            </div>
            <div className={classes.review}>Reviews ({rating})</div>
          </div>
          <div className={classes.title} title={title}>
            {title}
          </div>
          <div className={classes.price}>THB{priceFormat(price)}</div>
          <div className={classes.discountPrice}>
            THB{calPriceDiscount(price, 30)}
          </div>
        </div>
      </Link>
    </Fragment>
  );
};

export default Card;
