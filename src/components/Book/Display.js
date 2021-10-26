import { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronUp,
  faChevronDown,
  faHeart,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faTumblr,
  faFacebookF,
  faGooglePlusG,
} from '@fortawesome/free-brands-svg-icons';

import { CartState } from '../../store/Context';

import { priceFormat, calPriceDiscount } from '../Helpers';
import classes from './Display.module.css';

const Display = (props) => {
  const {
    id,
    title,
    image,
    preview,
    author,
    company,
    category,
    type,
    barcode,
    price,
  } = props;

  const {
    state: { items },
    dispatch,
  } = CartState();
  let arr = items.filter((item) => item.id === id);
  let amount;
  if (arr.length > 0) {
    amount = arr[0].amount;
  } else {
    amount = 0;
  }

  let [counter, setCounter] = useState(amount);
  let discountPrice = calPriceDiscount(price, 30);

  const incrementCounter = () => {
    counter++;
    setCounter(counter);
  };

  const decrementCounter = () => {
    if (counter > 0) {
      counter--;
      setCounter(counter);
    }
  };

  const addItemHandler = () => {
    dispatch({
      type: 'ADD',
      payload: {
        id,
        title,
        image,
        price: +discountPrice,
        total: +discountPrice * (counter - amount),
        amount: counter - amount,
      },
    });
  };

  const removeItemHandler = () => {
    dispatch({
      type: 'REMOVE',
      payload: {
        id,
        removedTotal: +discountPrice * (amount - counter),
        removedAmount: amount - counter,
      },
    });
  };

  return (
    <Fragment>
      <div className={classes.displayContainer}>
        <div className={classes.headerSection}>
          <img className={classes.bookImg} src={`/images/${image}`} alt="" />
          <div className={classes.detailBox}>
            <div className={classes.title}>{title}</div>
            <div>ผู้เขียน: {author}</div>
            <div>สำนักพิมพ์: {company}</div>
            <div>หมวดหมู่: {category}</div>
            <div>ประเภทของสินค้า: {type}</div>
            <div>บาร์โค้ด: {barcode}</div>
            <div className={classes.priceBox}>
              <div className={classes.priceWord}>ราคา</div>
              <div className={classes.discountPrice}>THB{discountPrice}</div>
              <div className={classes.price}>THB{priceFormat(price)}</div>
            </div>
            <div className={classes.cartBox}>
              <div className={classes.counterBox}>
                <div className={classes.counter}>{counter}</div>
                <div className={classes.arrowBox}>
                  <div className={classes.arrow} onClick={incrementCounter}>
                    <FontAwesomeIcon icon={faChevronUp} />
                  </div>
                  <div className={classes.arrow} onClick={decrementCounter}>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </div>
                </div>
              </div>
              {counter > amount && (
                <Link
                  to="/cart"
                  onClick={addItemHandler}
                  className={classes.showBtn}
                  style={{ backgroundColor: 'blue' }}
                >
                  Add
                </Link>
              )}
              {counter < amount && (
                <Link
                  to="/cart"
                  onClick={removeItemHandler}
                  className={classes.showBtn}
                  style={{ backgroundColor: 'red' }}
                >
                  Remove
                </Link>
              )}
              {counter === amount && (
                <Link
                  to="/cart"
                  className={classes.showBtn}
                  style={{
                    backgroundColor: 'blue',
                    pointerEvents: 'none',
                    opacity: 0.4,
                  }}
                >
                  Add
                </Link>
              )}
              <div
                className={classes.showBtn}
                style={{ backgroundColor: 'orange' }}
              >
                <FontAwesomeIcon icon={faHeart} className={classes.heartIcon} />{' '}
                Wishlist
              </div>
            </div>
            <div className={classes.shareBox}>
              <div className={classes.shareWord}>แชร์:</div>
              <div
                className={classes.shareIcon}
                style={{ backgroundColor: 'green' }}
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div
                className={classes.shareIcon}
                style={{ backgroundColor: '#2b3177' }}
              >
                <FontAwesomeIcon icon={faTumblr} />
              </div>
              <div
                className={classes.shareIcon}
                style={{ backgroundColor: '#4170f2' }}
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
              <div
                className={classes.shareIcon}
                style={{ backgroundColor: '#ed3515' }}
              >
                <FontAwesomeIcon icon={faGooglePlusG} />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.previewSection}>
          <img className={classes.previewImg} src={`/images/${image}`} alt="" />
          <img
            className={classes.previewImg}
            style={{ opacity: 0.4 }}
            src={`/images/${preview}`}
            alt=""
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Display;
