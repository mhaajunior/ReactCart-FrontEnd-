import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { CartState } from '../../store/Context';
import Item from './Item';

import classes from './Basket.module.css';

const Basket = () => {
  const {
    state: { items },
    dispatch,
  } = CartState();

  const emptyCart = () => {
    dispatch({ type: 'EMPTY', payload: {} });
  };

  return (
    <Fragment>
      <div className={classes.basketSection}>
        <div className={classes.tableContainer}>
          {items.length === 0 ? (
            <div className={classes.noData}>ตะกร้าของคุณว่างเปล่า</div>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>สินค้า</th>
                  <th>ราคา</th>
                  <th>จำนวน</th>
                  <th>ยอดรวม</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {items.map((book) => (
                  <Item
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    price={book.price}
                    image={book.image}
                    amount={book.amount}
                    total={book.total}
                  />
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div className={classes.btnContainer}>
          <Link to="/" className={`${classes.cartBtn} ${classes.buyNext}`}>
            ซื้อสินค้าต่อไป
          </Link>
          <div
            className={`${classes.cartBtn} ${classes.clearAll}`}
            onClick={emptyCart}
          >
            ล้างตระกร้าสินค้า
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Basket;
