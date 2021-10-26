import { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faPen,
  faChevronUp,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

import { CartState } from '../../store/Context';

import { priceFormat } from '../Helpers';
import classes from './Item.module.css';
import card from '../Landing/Card.module.css';
import display from '../Book/Display.module.css';

const Item = (props) => {
  const { id, title, image, price, amount, total } = props;
  let [counter, setCounter] = useState(amount);
  const { dispatch } = CartState();

  const addItemHandler = () => {
    setCounter(counter + 1);
    dispatch({
      type: 'ADDONE',
      payload: {
        id,
        price,
      },
    });
  };

  const removeItemHandler = () => {
    setCounter(counter - 1);
    dispatch({
      type: 'REMOVEONE',
      payload: {
        id,
        price,
      },
    });
  };

  const deleteItemHandler = () => {
    dispatch({
      type: 'DELETE',
      payload: {
        id,
        total,
      },
    });
  };

  return (
    <Fragment>
      <tr>
        <td>
          <div className={classes.fBox}>
            <div className={classes.imgContainer}>
              <img className={classes.imgBox} src={`/images/${image}`} alt="" />
            </div>
            <div>{title}</div>
          </div>
        </td>
        <td className={classes.price}>THB{priceFormat(price)}</td>
        <td>
          <div className={display.counterBox}>
            <div className={display.counter}>{counter}</div>
            <div className={display.arrowBox}>
              <div className={display.arrow} onClick={addItemHandler}>
                <FontAwesomeIcon icon={faChevronUp} />
              </div>
              <div className={display.arrow} onClick={removeItemHandler}>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </div>
          </div>
        </td>
        <td className={classes.price}>THB{priceFormat(total)}</td>
        <td>
          <div
            className={`${card.circleBtn} ${classes.deleteBtn}`}
            onClick={deleteItemHandler}
          >
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <div className={`${card.circleBtn} ${classes.editBtn}`}>
            <FontAwesomeIcon icon={faPen} />
          </div>
        </td>
      </tr>
    </Fragment>
  );
};

export default Item;
