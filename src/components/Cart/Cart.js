import { Fragment } from 'react';

import Invoice from './Invoice';
import Basket from './Basket';

import classes from './Cart.module.css';

const Cart = () => {
  return (
    <Fragment>
      <div className={classes.cartContainer}>
        <div className={classes.cartHeader}>ตระกร้าสินค้า</div>
        <div className={classes.cartDetail}>
          <Basket />
          <Invoice btn="ไปชำระเงิน" />
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
